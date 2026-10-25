# Regla editorial · Imágenes de uso seguro en todas las clases

**Estado:** regla obligatoria para cada clase nueva y cada clase que se edite de PHILOSOPHIA; aplicación inicial controlada en Teoría Crítica.  
**Referencia documental privada:** `philosophia-vault/90 - Plantillas/Regla global - Imágenes de uso seguro en clases.md`.  
**Jerarquía:** complementa la fidelidad a las fuentes, las guías 2D y el protocolo `docs/flujo-multichat-y-despliegues.md`; nunca autoriza inventar material académico.

## 1. Requisito visual y pedagógico

- **Cada página de clase debe incorporar al menos una imagen/ilustración visual pertinente al contenido**, preferentemente un esquema conceptual SVG original, una ilustración propia, una imagen histórica verificada o una fotografía de licencia compatible.
- Una imagen no es decoración obligatoria: debe **explicar, contextualizar o ejemplificar** una idea registrada en clase y acompañarse de pie descriptivo o guía de lectura cuando aporte contenido.
- Las representaciones esquemáticas originales cuentan como imágenes, incluso cuando se construyan con SVG propio. Para sistemas 2D, siguen siendo obligatorios el contrato de esquemas y sus equivalentes textuales.
- Si no existe una imagen de terceros con derechos comprobables, **dibujar un gráfico/ilustración original** basado en el contenido documentado; si la fuente tampoco permite representar ese contenido de forma fiable, marcar el folio `pendiente-imagen` y no declararlo completo. Nunca rellenar huecos con objetos o afirmaciones inventados.
- Al avanzar Teoría Crítica **clase por clase**, se auditan las sesiones heredadas y se registra lo que falta. Esta norma no significa que las trece sesiones anteriores hayan sido retroactivamente ilustradas.

## 2. Imágenes permitidas, con comprobación previa

1. **Obra original del proyecto**: ilustración, diagrama vectorial, infografía o fotografía cuya autoría/derechos de publicación correspondan al proyecto o cuenten con autorización documentada.
2. **CC0 1.0 / dominio público verificado**: guardar el enlace a la ficha de licencia o justificación de dominio público y revisar el territorio aplicable (una obra puede ser de dominio público en un país y no en otro).
3. **CC BY 4.0 u otra versión compatible**: atribuir autor, título si consta, fuente, versión/enlace de licencia e indicar modificaciones.
4. **CC BY-SA 4.0 u otra licencia compatible**: cumplir lo anterior **y la obligación de compartir adaptaciones bajo la licencia compatible exigida**. No usarla si el flujo de publicación/descarga no permite cumplir.
5. **Permiso expreso verificable**: registrar titular, alcance, fecha, condiciones, restricciones y autorización concreta de publicación.
6. **Imagen generada con IA para PHILOSOPHIA**: posible si es original, sin copiar de forma sustancial material protegido ni representar falsamente hechos de clase. Etiquetar como `ai-generated`; no afirmar que por ser IA carece automáticamente de restricciones de derechos, imagen, marca o privacidad.

**Importante:** «uso gratuito» y «se puede descargar» **no** significan dominio público. CC BY y CC BY-SA siguen protegidas por derechos de autor: se pueden usar **respetando sus condiciones**. No utilizar imágenes de búsquedas, redes, Google, Pinterest, Wikipedia o Wikimedia Commons sin verificar la **ficha del archivo concreto**. En Commons puede haber licencias distintas por imagen.

## 3. Prohibiciones y riesgos

- No introducir imágenes sin autoría/licencia verificable o reproducidas con marca de agua.
- No copiar portadas contemporáneas, carteles, fotogramas, personajes, mapas comerciales, ilustraciones ajenas o arte promocional **por el solo hecho de que estén visibles en internet**. Una excepción, licencia o permiso debe documentarse individualmente; no asumir `fair use` ni uso académico como permiso general.
- No transformar ni «pasar por IA» una imagen protegida para eludir sus derechos.
- No inferir que CC BY-NC es apta para cualquier contexto ni que CC BY-ND permite hacer adaptaciones; no utilizarlas como opción por defecto.
- Respetar también privacidad, derecho a la propia imagen, marcas y contexto histórico. Licencia de copyright no los resuelve por sí sola.
- No atribuir esquemas reconstruidos por PHILOSOPHIA al docente, autor u obra de manera silenciosa.

## 4. Registro mínimo de cada recurso publicado

Cada imagen incorporada a una clase debe tener un asiento de procedencia verificable, idealmente en un módulo de datos por materia. **Modelo de campos** (no confundir con que todos los folios antiguos ya estén migrados):

```js
{
  id: 'critica-2026-08-18-esquema',
  classPath: '/semestre/5/teoria-critica/clase/18-agosto',
  imagePath: '/images/teoria-critica/ejemplo.svg',
  imageType: 'original', // original | public-domain | cc | ai-generated | permission
  imageSource: 'PHILOSOPHIA, elaboración original',
  imageAuthor: 'PHILOSOPHIA',
  imageLicense: 'ORIGINAL-OWNED', // o CC0-1.0 / CC-BY-4.0 / CC-BY-SA-4.0 / ...
  imageLicenseUrl: null,       // URL del texto de licencia cuando corresponda
  imageAttribution: 'Ilustración original de PHILOSOPHIA',
  licenseEvidenceUrl: null,    // URL a ficha de procedencia/permisos cuando corresponda
  modifications: 'ninguna',
  alt: 'Descripción precisa de lo que comunica la imagen',
  pedagogicalPurpose: 'Qué ayuda a comprender',
  sourceBoundary: 'Esquema editorial; no es reproducción del pizarrón'
}
```

Para recursos externos, los campos de autoría, licencia, enlace, evidencia y modificaciones deben estar **completos y contrastados**, no con valores inventados. Conservar una copia fechada de la evidencia cuando la licencia pueda cambiar. El pie público o sección de créditos debe atribuir con claridad y enlazar a la fuente/licencia cuando corresponda. Los créditos de todos los recursos publicados deben seguir siendo accesibles sin iniciar sesión.

## 5. Accesibilidad y calidad

- `alt` descriptivo de la función informativa; si el recurso es puramente decorativo, `alt=""` y su justificación. Las imágenes exigidas para cada clase son **pedagógicas**, por lo que no pueden contar como cumplimiento si sólo decoran.
- Añadir pie/guía con: **qué representa, cómo leerlo, por qué está aquí, en palabras simples y qué debe quedar claro**, cuando el recurso describe un proceso conceptual.
- No deformar, pixelar ni cortar texto dentro de figuras; SVG con `viewBox`, diseño adaptativo en escritorio, teléfono e iPad, y equivalente textual accesible.
- Mantener legibles las atribuciones y procedencias en pantalla, modo impresión y exportaciones.

## 6. Puerta de aceptación / auditoría por folio

Antes de marcar una clase como terminada:

- [ ] Al menos una imagen **informativa** relevante, con explicación fiel a la clase.
- [ ] Registro con fuente, titular, licencia o permiso comprobado, evidencia y modificación cuando aplique.
- [ ] Créditos de publicación y condiciones CC verificadas; no se simula licencia libre para recurso ajeno.
- [ ] Texto alternativo, pie de figura y guía de lectura apropiados.
- [ ] No hay reproducción indebida de obras protegidas, personas o marcas.
- [ ] Verificación de la fuente filosófica: figura fiel y señalada como docente o reconstrucción editorial.
- [ ] Pruebas de carga, responsive/zoom, navegación, impresión y ausencia de desbordes.
- [ ] PR en rama exclusiva + nota y enlaces de Obsidian actualizados. Si sólo existe Preview, **no declarar GitHub Pages publicado**.

**Criterio de seguridad:** si la licencia no se puede comprobar, la imagen no se incorpora. Se crea una representación original fiel o se registra la carencia sin fingir cumplimiento.

**No retroactividad ficticia:** las clases históricas no auditadas permanecen `pendiente-de-cotejo-de-imágenes` hasta tratarlas una por una.
