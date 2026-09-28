import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router'
import {
  Background,
  Controls,
  MarkerType,
  MiniMap,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import {
  ASSIGNED_DIALECTIC_READING,
  DIALECTIC_BRANCHES,
  DIALECTIC_BY_ID,
  DIALECTIC_NODES,
} from '../data/kantDialecticSystem'
import './KantDialecticSystem.css'

const NODE_WIDTH = 244
const NODE_HEIGHT = 138

const LAYOUT = {
  D00: [80, 500],
  D01: [380, 300],
  D02: [380, 520],
  D03: [700, 520],

  D04: [1040, 120],
  D07: [1370, 120],

  D05: [1040, 410],
  D08: [1370, 410],

  D06: [1040, 760],
  D09: [1370, 760],
  D10: [1700, 760],

  D11: [2030, 570],
  D12: [2360, 500],
  D13: [2690, 500],

  D14: [2030, 800],
  D15: [2030, 1030],

  D16: [1700, 210],

  'DC23-01': [-520, 120],
  'DC23-02': [-220, 120],
  'DC23-03': [-520, 350],
  'DC23-04': [-220, 350],
  'DC23-05': [-520, 690],
  'DC23-06': [-220, 690],
  'DC23-07': [80, 820],
}

const EDGE_SPECS = [
  ['D00', 'D01', 'detecta'],
  ['D00', 'D02', 'sitúa'],
  ['D01', 'D02', 'empuja'],
  ['D02', 'D03', 'produce'],
  ['D03', 'D04', 'sujeto'],
  ['D04', 'D07', 'deriva en'],
  ['D03', 'D05', 'mundo'],
  ['D05', 'D08', 'deriva en'],
  ['D03', 'D06', 'Dios'],
  ['D06', 'D09', 'ideal'],
  ['D09', 'D10', 'pruebas'],
  ['D10', 'D11', '1'],
  ['D11', 'D12', 'tesis crítica'],
  ['D12', 'D13', 'ejemplo'],
  ['D10', 'D14', '2'],
  ['D10', 'D15', '3'],
  ['D03', 'D16', 'uso legítimo'],

  ['DC23-01', 'DC23-02', 'estructura'],
  ['DC23-01', 'DC23-03', 'facultades'],
  ['DC23-02', 'DC23-04', 'contexto'],
  ['DC23-02', 'DC23-05', 'metafísica'],
  ['DC23-03', 'D00', 'prepara'],
  ['DC23-04', 'D01', 'problema crítico'],
  ['DC23-05', 'D03', 'tres ideas'],
  ['DC23-05', 'DC23-06', 'límite'],
  ['DC23-06', 'D11', 'aplica a'],
  ['DC23-07', 'D00', 'ubica'],
  ['DC23-07', 'D08', 'tesis / antítesis'],
]

const SUPPORT_BY_BRANCH = {
  class23: new Set([
    'DC23-01', 'DC23-02', 'DC23-03', 'DC23-04', 'DC23-05', 'DC23-06', 'DC23-07',
    'D00', 'D01', 'D02', 'D03', 'D04', 'D05', 'D06', 'D08', 'D11', 'D12',
  ]),
  intro: new Set(['D00', 'D01', 'D02', 'D03', 'D16']),
  soul: new Set(['D00', 'D02', 'D03', 'D04', 'D07']),
  world: new Set(['D00', 'D02', 'D03', 'D05', 'D08']),
  god: new Set(['D00', 'D02', 'D03', 'D06', 'D09', 'D10', 'D11', 'D12', 'D13', 'D14', 'D15']),
  reading: new Set(['D03', 'D06', 'D09', 'D10', 'D11', 'D12', 'D13']),
}

const GUIDE_BY_BRANCH = {
  all: ['D00', 'D01', 'D02', 'D03', 'D04', 'D07', 'D05', 'D08', 'D06', 'D09', 'D10', 'D11', 'D12', 'D13', 'D14', 'D15', 'D16'],
  class23: ['DC23-01', 'DC23-02', 'DC23-03', 'DC23-04', 'DC23-07', 'DC23-05', 'DC23-06', 'D11', 'D12'],
  intro: ['D00', 'D01', 'D02', 'D03', 'D16'],
  soul: ['D03', 'D04', 'D07'],
  world: ['D03', 'D05', 'D08'],
  god: ['D03', 'D06', 'D09', 'D10', 'D11', 'D12', 'D13', 'D14', 'D15'],
  reading: ['D11', 'D12', 'D13'],
}

function branchLabel(id) {
  return DIALECTIC_BRANCHES.find((item) => item.id === id)?.label || id
}

function DialecticNodeLabel({ item }) {
  return (
    <div className="kd2-node-copy">
      <div className="kd2-node-top">
        <span>{item.code}</span>
        <div>
          {item.class23 && <b className="is-class23">CLASE 23</b>}
          {item.assigned && <b>LECTURA</b>}
          <small>{item.pages}</small>
        </div>
      </div>

      <strong>{item.title}</strong>
      <p>{item.short}</p>
    </div>
  )
}

function buildBaseNodes() {
  return DIALECTIC_NODES.map((item) => {
    const [x, y] = LAYOUT[item.id] || [0, 0]

    return {
      id: item.id,
      position: { x, y },
      data: {
        ...item,
        label: <DialecticNodeLabel item={item} />,
      },
      style: {
        width: NODE_WIDTH,
        minHeight: NODE_HEIGHT,
        padding: 0,
        borderRadius: 3,
        background: '#efe6d4',
        color: '#1d211f',
        border: '1px solid rgba(29,33,31,.28)',
        boxShadow: '0 12px 28px rgba(29,33,31,.075)',
      },
    }
  })
}

function buildBaseEdges() {
  return EDGE_SPECS.map(([source, target, label], index) => ({
    id: `kd2-${source}-${target}-${index}`,
    source,
    target,
    label,
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 17,
      height: 17,
      color: '#526d65',
    },
    style: {
      stroke: '#526d65',
      strokeWidth: 1.55,
    },
    labelStyle: {
      fill: '#526d65',
      fontSize: 10,
      fontFamily: 'Georgia, serif',
      fontWeight: 700,
    },
    labelBgStyle: {
      fill: '#eee5d3',
      fillOpacity: 0.96,
    },
  }))
}

function Inspector({
  item,
  guideActive,
  guideIndex,
  guideLength,
  onPrevious,
  onNext,
  onClose,
}) {
  if (!item) {
    return (
      <aside className="kd2-inspector is-empty">
        <span>INSPECTOR</span>
        <strong>Seleccione un nodo</strong>
        <p>
          El mapa conservará visible la red inmediata del concepto y desenfocará
          lo que no esté directamente relacionado.
        </p>
      </aside>
    )
  }

  return (
    <aside className="kd2-inspector">
      <div className="kd2-inspector-head">
        <div>
          <span>{item.code}</span>
          <small>{item.pages}</small>
        </div>
        <button type="button" onClick={onClose} aria-label="Cerrar ficha">×</button>
      </div>

      <h2>{item.title}</h2>
      <p className="kd2-inspector-short">{item.short}</p>

      {item.assigned && (
        <div className="kd2-reading-chip">
          LECTURA ASIGNADA · 23 SEP
        </div>
      )}

      {item.class23 && (
        <div className="kd2-class23-chip">
          VISTO EN CLASE · 23 SEP 2026
        </div>
      )}

      <section>
        <span>QUÉ SIGNIFICA</span>
        <p>{item.detail}</p>
      </section>

      <section>
        <span>FUNCIÓN EN LA DIALÉCTICA</span>
        <p>
          {item.branch === 'intro' &&
            'Ubica la estructura crítica general: la razón busca totalidad e incondicionado, pero puede confundir una exigencia racional con conocimiento objetivo.'}
          {item.branch === 'soul' &&
            'Pertenece a la psicología racional y al intento de convertir el sujeto pensante en un objeto metafísico conocido.'}
          {item.branch === 'world' &&
            'Pertenece a la cosmología racional y muestra el conflicto que aparece al tratar el mundo como una totalidad completamente dada.'}
          {item.branch === 'god' &&
            'Pertenece a la teología racional y al examen de la pretensión de demostrar especulativamente la existencia de un ser supremo.'}
          {item.branch === 'reading' &&
            'Forma parte de la lectura asignada: la crítica kantiana del paso desde el concepto de un ser necesario hasta su existencia.'}
          {item.branch === 'class23' &&
            'Es una pieza del esquema elaborado por el profesor en la pizarra durante la clase del 23 de septiembre y sirve para conectar Estética, Analítica y Dialéctica en una sola arquitectura.'}
        </p>
      </section>

      {item.id === 'D12' && (
        <blockquote>
          «El ser no es un predicado real.»
          <cite>Kant · p. 369</cite>
        </blockquote>
      )}

      {item.formula && (
        <div className="kd2-board-formula">
          <span>ESQUEMA DE PIZARRA</span>
          <code>{item.formula}</code>
          <small>
            O = objeto de conocimiento / fenómeno · E = espacio · T = tiempo · d = Dios
          </small>
        </div>
      )}

      {item.id === 'D13' && (
        <div className="kd2-thalers">
          <article>
            <span>POSIBLES</span>
            <strong>100</strong>
            <p>contenido del concepto</p>
          </article>
          <b>≠</b>
          <article>
            <span>REALES</span>
            <strong>100</strong>
            <p>objeto efectivamente puesto</p>
          </article>
        </div>
      )}

      <section>
        <span>FUENTE PRIMARIA</span>
        <strong>{item.source}</strong>
        <p>{item.pages}</p>
      </section>

      <section>
        <span>SE CONECTA CON</span>
        <div className="kd2-related">
          {(item.connects || []).map((id) => {
            const related = DIALECTIC_BY_ID[id]
            if (!related) return null

            return (
              <div key={id}>
                <b>{related.code}</b>
                <span>{related.title}</span>
              </div>
            )
          })}
        </div>
      </section>

      {guideActive && (
        <footer className="kd2-guide-footer">
          <span>
            PASO {guideIndex + 1} / {guideLength}
          </span>
          <div>
            <button
              type="button"
              onClick={onPrevious}
              disabled={guideIndex <= 0}
            >
              ← ATRÁS
            </button>
            <button
              type="button"
              onClick={onNext}
              disabled={guideIndex >= guideLength - 1}
            >
              SIGUIENTE →
            </button>
          </div>
        </footer>
      )}
    </aside>
  )
}

function DialecticCanvas() {
  const { fitView, setCenter } = useReactFlow()

  const [branch, setBranch] = useState('all')
  const [selectedId, setSelectedId] = useState(null)
  const [guideActive, setGuideActive] = useState(false)
  const [guideIndex, setGuideIndex] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)

  const baseNodes = useMemo(() => buildBaseNodes(), [])
  const baseEdges = useMemo(() => buildBaseEdges(), [])

  const selected = selectedId ? DIALECTIC_BY_ID[selectedId] || null : null

  const activeGuide = GUIDE_BY_BRANCH[branch] || GUIDE_BY_BRANCH.all

  const selectedRelated = useMemo(() => {
    if (!selected) return new Set()

    const direct = new Set([selected.id, ...(selected.connects || [])])

    EDGE_SPECS.forEach(([source, target]) => {
      if (source === selected.id) direct.add(target)
      if (target === selected.id) direct.add(source)
    })

    return direct
  }, [selected])

  const visibleByBranch = useMemo(() => {
    if (branch === 'all') return null
    return SUPPORT_BY_BRANCH[branch] || null
  }, [branch])

  const nodes = useMemo(
    () =>
      baseNodes.map((node) => {
        const item = node.data
        const branchVisible =
          !visibleByBranch || visibleByBranch.has(node.id)

        const focusDimmed =
          selectedId &&
          branchVisible &&
          !selectedRelated.has(node.id)

        return {
          ...node,
          hidden: !branchVisible,
          className: [
            'kd2-flow-node',
            item.branch ? `is-${item.branch}` : '',
            item.class23 ? 'is-class23' : '',
            item.assigned ? 'is-assigned' : '',
            selectedId === node.id ? 'is-selected' : '',
            focusDimmed ? 'is-dimmed' : '',
            guideActive && activeGuide[guideIndex] === node.id ? 'is-guide' : '',
          ].filter(Boolean).join(' '),
        }
      }),
    [
      activeGuide,
      baseNodes,
      guideActive,
      guideIndex,
      selectedId,
      selectedRelated,
      visibleByBranch,
    ],
  )

  const edges = useMemo(
    () =>
      baseEdges.map((edge) => {
        const branchVisible =
          (!visibleByBranch ||
            (visibleByBranch.has(edge.source) &&
              visibleByBranch.has(edge.target)))

        const touchesSelection =
          selectedId &&
          (edge.source === selectedId || edge.target === selectedId)

        return {
          ...edge,
          hidden: !branchVisible,
          animated: Boolean(touchesSelection),
          style: {
            ...edge.style,
            strokeWidth: touchesSelection ? 2.7 : 1.55,
            opacity: selectedId
              ? touchesSelection
                ? 1
                : 0.08
              : 0.72,
          },
        }
      }),
    [baseEdges, selectedId, visibleByBranch],
  )

  const centerNode = useCallback(
    (id, zoom = 1.03) => {
      const [x, y] = LAYOUT[id] || [0, 0]
      setCenter(x + NODE_WIDTH / 2, y + NODE_HEIGHT / 2, {
        zoom,
        duration: 420,
      })
    },
    [setCenter],
  )

  const startGuide = useCallback(() => {
    const first = activeGuide[0]
    if (!first) return
    setGuideActive(true)
    setGuideIndex(0)
    setSelectedId(first)
    window.setTimeout(() => centerNode(first, 1.06), 20)
  }, [activeGuide, centerNode])

  const jumpGuide = useCallback(
    (index) => {
      if (!activeGuide.length) return
      const safe = Math.max(0, Math.min(index, activeGuide.length - 1))
      const id = activeGuide[safe]
      setGuideActive(true)
      setGuideIndex(safe)
      setSelectedId(id)
      centerNode(id, 1.06)
    },
    [activeGuide, centerNode],
  )

  const chooseBranch = useCallback(
    (id) => {
      setBranch(id)
      setGuideActive(false)
      setGuideIndex(0)
      setSelectedId(null)

      window.setTimeout(() => {
        fitView({
          padding: 0.18,
          duration: 420,
          maxZoom: id === 'all' ? 0.72 : 1.02,
        })
      }, 60)
    },
    [fitView],
  )

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape' && fullscreen) {
        setFullscreen(false)
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [fullscreen])

  return (
    <main className={`kd2-page ${fullscreen ? 'is-fullscreen' : ''}`}>
      <nav className="kd2-nav">
        <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
        <Link to="/" className="kd2-brand">Φ · Philosophia</Link>
        <span>KANT · DIALÉCTICA · SISTEMA 2D</span>
      </nav>

      <header className="kd2-header">
        <div className="kd2-cover">
          <div className="kd2-cover-card">
            <div className="kd2-cover-frame">
              <span className="kd2-cover-label">Immanuel Kant</span>
              <strong>Crítica de la razón pura</strong>
              <em>Dialéctica trascendental</em>
              <p>Arquitectura de la ilusión crítica</p>
            </div>
            <div className="kd2-cover-band">pp. 353–370 · edición de Pedro Ribas</div>
          </div>
          <small>Portada de lectura · mapa 2D de estudio</small>
        </div>

        <div className="kd2-hero-copy">
          <p>CRÍTICA DE LA RAZÓN PURA · SEGUNDA DIVISIÓN</p>
          <h1>
            El vértigo de
            <em> la razón</em>
          </h1>
          <span>
            La razón busca lo incondicionado, engendra las ideas de alma, mundo
            y Dios, y Kant muestra cómo ese impulso puede convertirse en ilusión
            trascendental si no se somete a crítica.
          </span>
        </div>

        <aside className="kd2-hero-reading">
          <span>LECTURA ASIGNADA</span>
          <strong>{ASSIGNED_DIALECTIC_READING.title}</strong>
          <small>{ASSIGNED_DIALECTIC_READING.pages}</small>
          <p>
            Paralogismos, antinomias e ideal de la razón pura dentro de un solo
            sistema visual.
          </p>
        </aside>
      </header>

      <section className="kd2-toolbar">
        <div className="kd2-routes">
          <span>RUTA</span>
          {DIALECTIC_BRANCHES.map((item) => (
            <button
              type="button"
              key={item.id}
              className={branch === item.id ? 'active' : ''}
              onClick={() => chooseBranch(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="kd2-tools">
          <button type="button" onClick={startGuide}>
            ▶ GUÍA {branch === 'all' ? 'GENERAL' : branchLabel(branch)}
          </button>
          <button
            type="button"
            onClick={() =>
              fitView({
                padding: 0.18,
                duration: 420,
                maxZoom: branch === 'all' ? 0.72 : 1.02,
              })
            }
          >
            ENCUADRAR
          </button>
          <button type="button" onClick={() => setFullscreen((value) => !value)}>
            {fullscreen ? 'SALIR' : 'PANTALLA COMPLETA'}
          </button>
        </div>
      </section>

      <section className="kd2-studybar">
        <div>
          <span>SENSIBILIDAD</span>
          <b>intuiciones</b>
        </div>
        <i>→</i>
        <div>
          <span>ENTENDIMIENTO</span>
          <b>categorías</b>
        </div>
        <i>→</i>
        <div className="active">
          <span>RAZÓN</span>
          <b>ideas</b>
        </div>
        <i>→</i>
        <div>
          <span>INCONDICIONADO</span>
          <b>alma · mundo · Dios</b>
        </div>
      </section>

      <div className="kd2-workspace">
        <div className="kd2-canvas">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
            fitViewOptions={{ padding: 0.18, maxZoom: 0.72 }}
            minZoom={0.18}
            maxZoom={1.65}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable
            panOnScroll
            zoomOnScroll
            onNodeClick={(_, node) => {
              setSelectedId(node.id)
              setGuideActive(false)
            }}
            onPaneClick={() => {
              setSelectedId(null)
              setGuideActive(false)
            }}
          >
            <Background
              color="rgba(82,109,101,.22)"
              gap={28}
              size={1}
            />
            <MiniMap
              pannable
              zoomable
              nodeColor={(node) => {
                if (node.id === selectedId) return '#924b38'
                if (node.data?.class23) return '#3f6d67'
                if (node.data?.assigned) return '#b4863f'
                if (node.data?.branch === 'soul') return '#6c7d8d'
                if (node.data?.branch === 'world') return '#7a694c'
                if (node.data?.branch === 'god') return '#526d65'
                return '#8b8170'
              }}
              maskColor="rgba(238,229,211,.74)"
            />
            <Controls />
          </ReactFlow>

          <div className="kd2-map-key">
            <span><i className="class23" /> clase 23</span>
            <span><i className="intro" /> ilusión / razón</span>
            <span><i className="soul" /> alma</span>
            <span><i className="world" /> mundo</span>
            <span><i className="god" /> Dios</span>
            <span><i className="reading" /> lectura</span>
          </div>
        </div>

        <Inspector
          item={selected}
          guideActive={guideActive}
          guideIndex={guideIndex}
          guideLength={activeGuide.length}
          onPrevious={() => jumpGuide(guideIndex - 1)}
          onNext={() => jumpGuide(guideIndex + 1)}
          onClose={() => {
            setSelectedId(null)
            setGuideActive(false)
          }}
        />
      </div>

      {!fullscreen && (
        <section className="kd2-reading-note">
          <div>
            <span>LECTURA ASIGNADA · 23 SEP</span>
            <h2>La prueba ontológica dentro del sistema completo</h2>
          </div>

          <div className="kd2-reading-chain">
            <article>
              <span>01</span>
              <strong>Concepto de ser necesario</strong>
            </article>
            <b>→</b>
            <article>
              <span>02</span>
              <strong>¿la existencia está contenida?</strong>
            </article>
            <b>→</b>
            <article className="active">
              <span>03</span>
              <strong>“ser” no es predicado real</strong>
            </article>
            <b>→</b>
            <article>
              <span>04</span>
              <strong>cien táleros</strong>
            </article>
          </div>

          <p>
            La lectura asignada queda resaltada dentro del mapa, no separada de su
            contexto: ideal de la razón pura → pruebas de Dios → crítica ontológica.
          </p>
        </section>
      )}
    </main>
  )
}

export default function KantDialecticSystem() {
  return (
    <ReactFlowProvider>
      <DialecticCanvas />
    </ReactFlowProvider>
  )
}
