import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { SYSTEM_2D_THEME } from '../src/components/philosophy/system2d/system2dTheme.js'
import { marxCommodityNodes, marxCommodityPhases } from '../src/data/marxCommodityValueSystem.js'

const css = readFileSync(new URL('../src/components/philosophy/system2d/System2DTheme.css', import.meta.url), 'utf8')
const marxNode = readFileSync(new URL('../src/components/marx/MarxCommodityNode.jsx', import.meta.url), 'utf8')
const marxCss = readFileSync(new URL('../src/pages/MarxCommodityValueSystem.css', import.meta.url), 'utf8')

test('Hacker topic tones live in shared CSS and JS, not hardcoded in node', () => {
  for (const [key, value] of Object.entries(SYSTEM_2D_THEME.nodeTopics)) {
    assert.match(css, new RegExp('--ph2d-topic-' + key + ':' + value.replace('#', '#'), 'i'))
  }
  assert.equal(Object.keys(SYSTEM_2D_THEME.nodeTopics).length, 10)
  assert.doesNotMatch(marxNode, /#[0-9a-f]{6}/i)
})
test('Every actual Marx phase has a stable Hacker-style topic tone', () => {
  const phases = [...new Set(marxCommodityNodes.map((node) => node.data.phase))]
  assert.ok(phases.length > 3)
  for (const phase of phases) {
    assert.ok(marxCommodityPhases.includes(phase), 'undocumented phase: ' + phase)
    assert.ok(marxNode.includes("'" + phase + "':"), 'phase lacks a tone: ' + phase)
  }
  assert.match(marxNode, /data-topic-tone=\{topicTone\}/)
})
test('Hacker-inspired accent preserves original selected, guided and critical semantics', () => {
  assert.match(marxCss, /\.marx-flow-node\.is-critical\[data-topic-tone\]/)
  assert.match(marxCss, /\.marx-flow-node\.is-guided-current\[data-topic-tone\]/)
  assert.match(marxCss, /\.marx-flow-node\.is-selected\[data-topic-tone\]/)
  assert.match(marxCss, /--ph2d-node-accent/)
})
