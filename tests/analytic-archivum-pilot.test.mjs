import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
const read=(p)=>readFileSync(new URL(p, import.meta.url),'utf8')
const page=read('../src/pages/AnalyticClass14Oct.jsx')
const css=read('../src/pages/AnalyticClass14Oct.css')
const illustration=read('../public/images/filosofia-analitica/archivum-14-octubre-mapa.svg')
test('Archivum 14-Oct incluye activación, tres conceptos, mapa original, prueba formal y memoria activa',()=>{
 for (const marker of ['ArchivumMnemonic','ArchivumArgument','ArchivumRecall','ac1410-triad','modus tollens','mnemonicQuestions','archivum-14-octubre-mapa.svg']) assert.ok(page.includes(marker),marker)
 assert.match(page,/loading="lazy"/)
 assert.match(page,/alt="Mapa de tres niveles/)
 assert.match(page,/reconstrucción editorial/i)
 assert.match(css,/@media\(max-width:700px\)/)
 assert.match(illustration,/<svg/)
 assert.match(illustration,/<title/)
 assert.match(illustration,/<desc/)
})
