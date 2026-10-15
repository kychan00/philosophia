import { mkdir, readFile, stat, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import process from 'node:process'

const manifestPath = resolve('src/data/openAssets.json')
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'))

const userAgent =
  'PHILOSOPHIA/1.0 (educational project; https://github.com/kychan00/philosophia)'

async function existsWithContent(path) {
  try {
    const info = await stat(path)
    return info.isFile() && info.size > 1024
  } catch {
    return false
  }
}

async function download(asset) {
  const target = resolve(asset.target)

  if (await existsWithContent(target)) {
    console.log(`[open-assets] ok: ${asset.id}`)
    return
  }

  await mkdir(dirname(target), { recursive: true })

  // Copia publicada de la última versión de PHILOSOPHIA: respaldo verificable
  // cuando Wikimedia aplica HTTP 429. No se aceptan páginas HTML como imágenes.
  const mirror = asset.target.startsWith('public/')
    ? new URL(asset.target.slice('public/'.length), 'https://kychan00.github.io/philosophia/').href
    : null
  let lastError
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const sources = [asset.download_url, ...(mirror ? [mirror] : [])]
    for (const source of sources) {
      try {
        console.log(`[open-assets] downloading ${asset.id} (attempt ${attempt}, ${source === mirror ? 'site mirror' : 'original'})`)
        const response = await fetch(source, {
          redirect: 'follow',
          headers: {
            'User-Agent': userAgent,
            Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          },
        })
        if (!response.ok) {
          throw new Error(`HTTP ${response.status} ${response.statusText}`)
        }
        const type = response.headers.get('content-type') || ''
        if (!type.startsWith('image/')) {
          throw new Error(`unexpected content type: ${type || 'missing'}`)
        }
        const bytes = new Uint8Array(await response.arrayBuffer())
        if (bytes.byteLength < 1024) {
          throw new Error(`download too small: ${bytes.byteLength} bytes`)
        }
        await writeFile(target, bytes)
        console.log(`[open-assets] saved ${asset.target} (${bytes.byteLength} bytes)`)
        return
      } catch (error) {
        lastError = error
        console.warn(`[open-assets] source unavailable: ${source} (${error?.message || error})`)
      }
    }
    if (attempt < 3) {
      await new Promise(resolveDelay => setTimeout(resolveDelay, attempt * 1200))
    }
  }
  throw new Error(
    `Unable to download ${asset.id} from source or published mirror: ${lastError?.message || lastError}`,
  )
}

for (const asset of manifest.assets || []) {
  await download(asset)
}

console.log(`[open-assets] ready: ${manifest.assets?.length || 0} asset(s)`)
