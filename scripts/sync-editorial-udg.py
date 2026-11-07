#!/usr/bin/env python3
"""Sincroniza el catálogo público de Editorial Universidad de Guadalajara.

La salida es una instantánea determinista para PHILOSOPHIA. El build de
producción NO ejecuta este script: evita que una caída externa rompa Pages.
"""

from __future__ import annotations

import argparse
import html
import json
import math
import re
import sys
import time
import urllib.parse
import urllib.request
from dataclasses import dataclass, field
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path

BASE_URL = "https://editorial.udg.mx/catalogo.html"
DEFAULT_OUTPUT = Path("src/data/editorialUdgCatalog.generated.js")
USER_AGENT = "PHILOSOPHIA-Catalog-Sync/1.0 (+https://github.com/kychan00/philosophia)"
PRICE_RE = re.compile(r"^(?:Desde\s+)?\$[\d,.]+$")
CATALOG_TOTAL_RE = re.compile(r"Publicaciones\s+\d+[–-]\d+\s+de\s+([\d,]+)", re.I)
PUBLISHER_TOTAL_RE = re.compile(r"Editorial\s+Universidad\s+de\s+Guadalajara\s+([\d,]+)\s+element", re.I)
SKIP_TEXT = {
    "Agregar al carrito", "Agregar a la lista de deseos", "Agregar para comparar",
    "No disponible", "hearth-icon",
}
FORMAT_PREFIXES = ("Impreso", "eBook", "Audiolibro")


@dataclass
class Product:
    title: str = ""
    url: str = ""
    texts: list[str] = field(default_factory=list)


class CatalogParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.products: list[Product] = []
        self.current: Product | None = None
        self.item_depth = 0
        self.in_product_link = False

    @staticmethod
    def _classes(attrs) -> set[str]:
        for key, value in attrs:
            if key == "class" and value:
                return set(value.split())
        return set()

    @staticmethod
    def _attr(attrs, key: str) -> str:
        for attr_key, value in attrs:
            if attr_key == key and value:
                return value
        return ""

    def handle_starttag(self, tag: str, attrs) -> None:
        classes = self._classes(attrs)
        if self.current is None and tag == "li" and "product-item" in classes:
            self.current = Product()
            self.item_depth = 1
            return

        if self.current is not None:
            if tag == "li":
                self.item_depth += 1
            if tag == "a" and "product-item-link" in classes:
                self.in_product_link = True
                self.current.url = urllib.parse.urljoin(BASE_URL, self._attr(attrs, "href"))

    def handle_endtag(self, tag: str) -> None:
        if self.current is None:
            return
        if tag == "a" and self.in_product_link:
            self.in_product_link = False
        if tag == "li":
            self.item_depth -= 1
            if self.item_depth <= 0:
                if self.current.title and self.current.url:
                    self.products.append(self.current)
                self.current = None
                self.item_depth = 0
                self.in_product_link = False

    def handle_data(self, data: str) -> None:
        if self.current is None:
            return
        value = " ".join(html.unescape(data).split())
        if not value:
            return
        self.current.texts.append(value)
        if self.in_product_link:
            self.current.title = " ".join((self.current.title + " " + value).split())


def fetch(url: str, timeout: float) -> str:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": USER_AGENT,
            "Accept": "text/html,application/xhtml+xml",
            "Accept-Language": "es-MX,es;q=0.9,en;q=0.6",
        },
    )
    with urllib.request.urlopen(request, timeout=timeout) as response:
        charset = response.headers.get_content_charset() or "utf-8"
        return response.read().decode(charset, errors="replace")


def normalized_tokens(product: Product) -> list[str]:
    result: list[str] = []
    for raw in product.texts:
        value = " ".join(raw.split())
        if not value or value == product.title:
            continue
        if result and result[-1] == value:
            continue
        result.append(value)
    return result


def parse_product(product: Product, page: int, ordinal: int) -> dict:
    tokens = normalized_tokens(product)
    formats: list[str] = []
    author = ""

    for token in tokens:
        if any(token.startswith(prefix) for prefix in FORMAT_PREFIXES):
            if token not in formats:
                formats.append(token)
            continue
        if token in SKIP_TEXT or PRICE_RE.match(token):
            continue
        if token.startswith("Desde $"):
            continue
        if not author and len(token) > 1:
            author = token

    path = urllib.parse.urlparse(product.url).path.rstrip("/")
    slug = path.rsplit("/", 1)[-1] or f"registro-{ordinal}"
    return {
        "id": f"editorial-udg:{slug}",
        "titulo": product.title,
        "autor": author or "Autor no identificado en la tarjeta pública",
        "formatos": formats,
        "url": product.url,
        "paginaFuente": page,
        "ordenFuente": ordinal,
    }


def parse_page(source: str, page: int, start_ordinal: int) -> list[dict]:
    parser = CatalogParser()
    parser.feed(source)
    return [
        parse_product(product, page, start_ordinal + index)
        for index, product in enumerate(parser.products)
    ]


def int_match(pattern: re.Pattern, source: str) -> int | None:
    match = pattern.search(source)
    return int(match.group(1).replace(",", "")) if match else None


def dump_js(records: list[dict], catalog_total: int | None, publisher_total: int | None, captured_at: str) -> str:
    meta = {
        "source": BASE_URL,
        "capturedAt": captured_at,
        "catalogReportedCount": catalog_total,
        "publisherFilterReportedCount": publisher_total,
        "totalFetched": len(records),
        "note": (
            "Instantánea del catálogo público. Es un corpus institucional externo: "
            "no acredita posesión, lectura, tesis ni incorporación al canon académico de PHILOSOPHIA."
        ),
    }
    return (
        "// Archivo generado por scripts/sync-editorial-udg.py. No editar a mano.\n"
        + "export const editorialUdgCatalogMeta = "
        + json.dumps(meta, ensure_ascii=False, indent=2)
        + "\n\nexport const editorialUdgBooks = "
        + json.dumps(records, ensure_ascii=False, indent=2)
        + "\n"
    )


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--timeout", type=float, default=30)
    parser.add_argument("--delay", type=float, default=0.15)
    parser.add_argument("--date", default=None, help="Fecha YYYY-MM-DD para una captura reproducible")
    args = parser.parse_args()

    first = fetch(BASE_URL + "?p=1", args.timeout)
    catalog_total = int_match(CATALOG_TOTAL_RE, first)
    publisher_total = int_match(PUBLISHER_TOTAL_RE, first)
    if not catalog_total:
        raise RuntimeError("No se pudo leer el total de publicaciones reportado por el catálogo")

    page_size_records = parse_page(first, 1, 1)
    if not page_size_records:
        raise RuntimeError("La primera página no produjo registros; cambió el HTML del catálogo")
    page_size = len(page_size_records)
    pages = math.ceil(catalog_total / page_size)

    records = list(page_size_records)
    for page in range(2, pages + 1):
        source = fetch(f"{BASE_URL}?p={page}", args.timeout)
        page_records = parse_page(source, page, len(records) + 1)
        if not page_records:
            raise RuntimeError(f"La página {page} no produjo registros")
        records.extend(page_records)
        if args.delay:
            time.sleep(args.delay)

    deduped: list[dict] = []
    seen_urls: set[str] = set()
    seen_ids: set[str] = set()
    for record in records:
        if record["url"] in seen_urls:
            continue
        seen_urls.add(record["url"])
        base_id = record["id"]
        candidate = base_id
        suffix = 2
        while candidate in seen_ids:
            candidate = f"{base_id}:{suffix}"
            suffix += 1
        record["id"] = candidate
        seen_ids.add(candidate)
        record["ordenFuente"] = len(deduped) + 1
        deduped.append(record)

    if len(deduped) != catalog_total:
        raise RuntimeError(
            f"Integridad incompleta: catálogo reporta {catalog_total} y se obtuvieron "
            f"{len(deduped)} URLs únicas"
        )

    captured_at = args.date or datetime.now(timezone.utc).date().isoformat()
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(
        dump_js(deduped, catalog_total, publisher_total, captured_at),
        encoding="utf-8",
    )

    print(
        json.dumps(
            {
                "output": str(args.output),
                "capturedAt": captured_at,
                "catalogReportedCount": catalog_total,
                "publisherFilterReportedCount": publisher_total,
                "totalFetched": len(deduped),
                "pages": pages,
            },
            ensure_ascii=False,
        )
    )
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as exc:
        print(f"sync-editorial-udg: {exc}", file=sys.stderr)
        raise
