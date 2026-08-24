import { useMemo, useState } from 'react'
import { Link } from 'react-router'

import { spinozaNodeById } from '../data/spinozaEthics1Prototype'
import {
  spinozaFigureRouteById,
  spinozaFigureRoutes,
  spinozaSphereToRoute,
} from '../data/spinozaFiguresPhase3'

const views = [
  {
    id: 'ontological',
    number: 'I',
    label: 'Vista ontológica',
    short: 'qué es lo real',
    question: '¿Cómo puede haber multiplicidad sin multiplicar sustancias?',
    focus: ['substance', 'attributes', 'modes'],
  },
  {
    id: 'causal',
    number: 'II',
    label: 'Vista causal',
    short: 'cómo se sigue lo real',
    question: '¿Cómo causa Dios todo lo que es sin actuar desde fuera?',
    focus: ['causa', 'naturans', 'modes', 'world'],
  },
  {
    id: 'nature',
    number: 'III',
    label: 'Vista Naturaleza',
    short: 'naturans / naturata',
    question: '¿Cómo se distinguen la naturaleza activa y lo que se sigue de ella?',
    focus: ['substance', 'naturans', 'naturata', 'world'],
  },
  {
    id: 'freedom',
    number: 'IV',
    label: 'Libertad / voluntad',
    short: 'necesidad sin libre albedrío',
    question: '¿Dónde queda la voluntad si todo está determinado?',
    focus: ['necessity', 'thought', 'will', 'world'],
  },
]

const spheres = [
  {
    id: 'causa',
    code: 'D1',
    title: 'Causa sui',
    subtitle: 'esencia que implica existencia',
    className: 'sf-sphere-causa',
    refs: 'D1 · P6 · P7 · P11',
  },
  {
    id: 'substance',
    code: 'D3 · D6',
    title: 'Sustancia única · Dios',
    subtitle: 'lo que es en sí y se concibe por sí',
    className: 'sf-sphere-core',
    refs: 'D3 · D6 · P7 · P11 · P14 · P15',
  },
  {
    id: 'attributes',
    code: 'D4',
    title: 'Atributos',
    subtitle: 'expresiones de la esencia',
    className: 'sf-sphere-attributes',
    refs: 'D4 · P9 · P10 · P19 · P20',
  },
  {
    id: 'thought',
    code: 'ATR.',
    title: 'Pensamiento',
    subtitle: 'atributo conocido',
    className: 'sf-sphere-thought',
    refs: 'puente hacia Parte II',
  },
  {
    id: 'extension',
    code: 'ATR.',
    title: 'Extensión',
    subtitle: 'atributo conocido',
    className: 'sf-sphere-extension',
    refs: 'puente hacia Parte II',
  },
  {
    id: 'naturans',
    code: 'P16–P18',
    title: 'Natura naturans',
    subtitle: 'naturaleza activa / causalidad inmanente',
    className: 'sf-sphere-naturans',
    refs: 'P16 · P17 · P18 · P34–P36',
  },
  {
    id: 'modes',
    code: 'P21–P23',
    title: 'Modos infinitos',
    subtitle: 'mediación entre atributo y singularidad',
    className: 'sf-sphere-modes',
    refs: 'P21 · P22 · P23',
  },
  {
    id: 'naturata',
    code: 'P24–P29',
    title: 'Natura naturata',
    subtitle: 'todo lo que se sigue de la naturaleza divina',
    className: 'sf-sphere-naturata',
    refs: 'P24 · P25 · P26 · P27 · P28 · P29',
  },
  {
    id: 'world',
    code: 'D5',
    title: 'Mundo · cosas singulares',
    subtitle: 'modos finitos, nunca una sustancia exterior',
    className: 'sf-sphere-world',
    refs: 'D5 · P25 · P28 · P29 · P33',
  },
  {
    id: 'necessity',
    code: 'D7',
    title: 'Necesidad',
    subtitle: 'determinarse por la propia naturaleza',
    className: 'sf-sphere-necessity',
    refs: 'D7 · P17 · P29 · P33',
  },
  {
    id: 'will',
    code: 'P31–P33',
    title: 'Voluntad',
    subtitle: 'modo del Pensamiento, no soberanía exterior',
    className: 'sf-sphere-will',
    refs: 'P31 · P32 · P33',
  },
]

const macroPhases = [
  ['I', 'P1–P10', 'Construcción de la sustancia'],
  ['II', 'P11–P15', 'Existencia y unicidad de Dios'],
  ['III', 'P16–P18', 'Productividad e inmanencia'],
  ['IV', 'P19–P20', 'Eternidad de atributos'],
  ['V', 'P21–P23', 'Modos infinitos'],
  ['VI', 'P24–P25', 'Esencia y producción modal'],
  ['VII', 'P26–P29', 'Determinación de modos finitos'],
  ['VIII', 'P30–P33', 'Entendimiento, voluntad y necesidad'],
  ['IX', 'P34–P36', 'Potencia y cierre causal'],
]

const relations = [
  ['Identidad / convergencia', 'Sustancia única ↔ Dios', 'identity'],
  ['Expresión', 'Sustancia → atributo', 'expression'],
  ['Ser-en', 'Modo → sustancia / atributo', 'inherence'],
  ['Causalidad inmanente', 'Dios / Naturaleza → modos', 'immanent'],
  ['Determinación necesaria', 'Modo → modo', 'determination'],
  ['Dependencia demostrativa', 'D / A / P → proposición', 'demonstrative'],
]

function nodeKind(node) {
  if (!node) return 'unknown'
  if (node.type === 'definition') return 'definition'
  if (node.type === 'axiom') return 'axiom'
  return 'proposition'
}

function nodeKindLabel(node) {
  const kind = nodeKind(node)
  if (kind === 'definition') return 'Definición'
  if (kind === 'axiom') return 'Axioma'
  return 'Proposición'
}

function radialPositions(count) {
  const cx = 500
  const cy = 350
  const rx = count >= 7 ? 370 : 350
  const ry = count >= 7 ? 245 : 225

  return Array.from({ length: count }, (_, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / count
    return {
      x: cx + Math.cos(angle) * rx,
      y: cy + Math.sin(angle) * ry,
    }
  })
}

function curvedPath(a, b, bend = 24) {
  const dx = b.x - a.x
  const dy = b.y - a.y
  const length = Math.sqrt(dx * dx + dy * dy) || 1
  const nx = -dy / length
  const ny = dx / length
  const mx = (a.x + b.x) / 2 + nx * bend
  const my = (a.y + b.y) / 2 + ny * bend
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`
}

export default function SpinozaFigures() {
  const [view, setView] = useState('ontological')
  const [selectedId, setSelectedId] = useState('substance')
  const [routeId, setRouteId] = useState('substance')
  const [routeStepIndex, setRouteStepIndex] = useState(0)
  const [selectedProofId, setSelectedProofId] = useState('E1D3')
  const [edgeMode, setEdgeMode] = useState('both')
  const [visibleKinds, setVisibleKinds] = useState({
    definition: true,
    axiom: true,
    proposition: true,
  })
  const [proofHistory, setProofHistory] = useState(['E1D3'])
  const [convergenceId, setConvergenceId] = useState('E1P14')

  const currentView = views.find((item) => item.id === view) || views[0]
  const selected = spheres.find((item) => item.id === selectedId) || spheres[1]
  const route = spinozaFigureRouteById(routeId)

  const focused = useMemo(
    () => new Set(currentView.focus),
    [currentView],
  )

  const routeNodes = useMemo(
    () =>
      route.steps
        .map((id) => spinozaNodeById(id))
        .filter(Boolean),
    [route],
  )

  const routePositions = useMemo(
    () => radialPositions(routeNodes.length),
    [routeNodes.length],
  )

  const routeIndexById = useMemo(
    () =>
      new Map(routeNodes.map((node, index) => [node.id, index])),
    [routeNodes],
  )

  const dependencyEdges = useMemo(() => {
    const edges = []

    routeNodes.forEach((target, targetIndex) => {
      target.data.dependsOn.forEach((sourceId) => {
        const sourceIndex = routeIndexById.get(sourceId)
        if (!Number.isInteger(sourceIndex)) return

        edges.push({
          id: `dep-${sourceId}-${target.id}`,
          sourceIndex,
          targetIndex,
        })
      })
    })

    return edges
  }, [routeNodes, routeIndexById])

  const pedagogicalEdges = useMemo(
    () =>
      routeNodes.slice(0, -1).map((node, index) => ({
        id: `ped-${node.id}-${routeNodes[index + 1].id}`,
        sourceIndex: index,
        targetIndex: index + 1,
      })),
    [routeNodes],
  )

  const selectedProof =
    spinozaNodeById(selectedProofId) ||
    routeNodes[routeStepIndex] ||
    routeNodes[0] ||
    null

  const externalSupports = useMemo(() => {
    if (!selectedProof) return []

    return selectedProof.data.dependsOn
      .filter((id) => !routeIndexById.has(id))
      .map((id) => spinozaNodeById(id))
      .filter(Boolean)
  }, [selectedProof, routeIndexById])

  const selectedSupports = useMemo(
    () =>
      selectedProof
        ? selectedProof.data.dependsOn
            .map((id) => spinozaNodeById(id))
            .filter(Boolean)
        : [],
    [selectedProof],
  )

  const selectedProduces = useMemo(
    () =>
      selectedProof
        ? selectedProof.data.produces
            .map((id) => spinozaNodeById(id))
            .filter(Boolean)
        : [],
    [selectedProof],
  )

  const crossRoutes = useMemo(
    () =>
      selectedProof
        ? spinozaFigureRoutes.filter((item) =>
            item.steps.includes(selectedProof.id),
          )
        : [],
    [selectedProof],
  )

  const routeCurrentNode = routeNodes[routeStepIndex] || null
  const routeNextNode = routeNodes[routeStepIndex + 1] || null

  const convergenceIds = [
    'E1P11',
    'E1P14',
    'E1P15',
    'E1P16',
    'E1P29',
    'E1P33',
    'E1P34',
  ]

  const convergenceNotes = {
    E1P11:
      'Convergen aquí la definición de Dios, la necesidad de existencia y la línea causa sui / sustancia.',
    E1P14:
      'Este es uno de los grandes cierres de la primera construcción: la pluralidad de sustancias queda excluida.',
    E1P15:
      'La unicidad de la sustancia se convierte aquí en una tesis sobre todo lo real: nada puede ser ni concebirse fuera de Dios.',
    E1P16:
      'El sistema cambia de dirección: desde la sustancia única comienza el despliegue necesario de sus consecuencias.',
    E1P29:
      'Las cadenas de determinación desembocan en la negación de la contingencia dentro de la Naturaleza.',
    E1P33:
      'La necesidad alcanza el orden entero: no se introduce una voluntad capaz de producir otro orden por indiferencia.',
    E1P34:
      'Potencia y esencia convergen y preparan el cierre causal de P35–P36.',
  }

  const convergenceNodes = convergenceIds
    .map((id) => spinozaNodeById(id))
    .filter(Boolean)

  const convergenceNode =
    spinozaNodeById(convergenceId) || convergenceNodes[0] || null

  const convergenceSupports = convergenceNode
    ? convergenceNode.data.dependsOn
        .map((id) => spinozaNodeById(id))
        .filter(Boolean)
    : []

  const convergenceProduces = convergenceNode
    ? convergenceNode.data.produces
        .map((id) => spinozaNodeById(id))
        .filter(Boolean)
    : []

  const convergenceRoutes = convergenceNode
    ? spinozaFigureRoutes.filter((item) =>
        item.steps.includes(convergenceNode.id),
      )
    : []

  const supportRouteMembership = (supportId) =>
    spinozaFigureRoutes.filter((item) => item.steps.includes(supportId))

  const transitionKind =
    routeCurrentNode && routeNextNode
      ? routeNextNode.data.dependsOn.includes(routeCurrentNode.id) ||
        routeCurrentNode.data.produces.includes(routeNextNode.id)
        ? 'logical'
        : 'pedagogical'
      : null

  const rememberProof = (id) => {
    setProofHistory((current) => {
      if (!id || current[current.length - 1] === id) return current
      return [...current.slice(-8), id]
    })
  }

  const openRoute = (nextRouteId, sphereId = null) => {
    const nextRoute = spinozaFigureRouteById(nextRouteId)
    const firstId = nextRoute.steps[0]

    setRouteId(nextRouteId)
    setRouteStepIndex(0)
    setSelectedProofId(firstId)
    setProofHistory([firstId])

    if (sphereId) setSelectedId(sphereId)
  }

  const selectSphere = (sphere) => {
    setSelectedId(sphere.id)
    const mappedRoute = spinozaSphereToRoute[sphere.id]
    if (mappedRoute) openRoute(mappedRoute, sphere.id)
  }

  const goToRouteStep = (index) => {
    const safeIndex = Math.min(
      Math.max(index, 0),
      routeNodes.length - 1,
    )

    const node = routeNodes[safeIndex]
    if (!node) return

    setRouteStepIndex(safeIndex)
    setSelectedProofId(node.id)
    rememberProof(node.id)
  }

  const selectProofById = (id) => {
    const node = spinozaNodeById(id)
    if (!node) return

    setSelectedProofId(id)
    rememberProof(id)

    const routeIndex = routeIndexById.get(id)
    if (Number.isInteger(routeIndex)) {
      setRouteStepIndex(routeIndex)
    }
  }

  const switchRouteKeepingProof = (nextRouteId) => {
    const nextRoute = spinozaFigureRouteById(nextRouteId)
    const selectedId = selectedProof?.id
    const nextIndex = selectedId
      ? nextRoute.steps.indexOf(selectedId)
      : -1

    setRouteId(nextRouteId)

    if (nextIndex >= 0) {
      setRouteStepIndex(nextIndex)
      setSelectedProofId(selectedId)
      rememberProof(selectedId)
    } else {
      const firstId = nextRoute.steps[0]
      setRouteStepIndex(0)
      setSelectedProofId(firstId)
      setProofHistory([firstId])
    }
  }

  const toggleKind = (kind) => {
    setVisibleKinds((current) => ({
      ...current,
      [kind]: !current[kind],
    }))
  }

  return (
    <main className="sf-page">
      <nav className="sf-nav">
        <Link to="/tareas/ontologia-ii/spinoza-etica-parte-i">
          ← Volver al mapa de Spinoza
        </Link>

        <Link to="/" className="sf-brand">
          <span>Φ</span> Philosophia
        </Link>

        <span>FIGURAE · SPINOZA</span>
      </nav>

      <header className="sf-hero">
        <div className="sf-hero-orbit sf-orbit-a" aria-hidden="true" />
        <div className="sf-hero-orbit sf-orbit-b" aria-hidden="true" />
        <div className="sf-hero-ghost" aria-hidden="true">DEUS SIVE NATURA</div>

        <div className="sf-hero-copy">
          <p>ETHICA · PARS I · ARCHITECTURA VISUALIS</p>
          <span className="sf-medallion">III</span>

          <h1>
            Figuras Espinoza
            <em>la esfera se vuelve argumento</em>
          </h1>

          <p className="sf-lead">
            La arquitectura ontológica de la Fase 2 se convierte ahora en una
            herramienta de estudio: cada concepto abre su propia constelación
            de definiciones, axiomas y proposiciones.
          </p>

          <div className="sf-hero-rule">
            <span>Regla maestra</span>
            <strong>
              La figura distingue dos órdenes: la dependencia demostrativa
              real de la Ética y la ruta pedagógica recomendada para entenderla.
            </strong>
          </div>
        </div>
      </header>

      <section className="sf-phase-strip">
        <article>
          <span>FASE 2 · COMPLETA</span>
          <strong>Arquitectura navegable</strong>
          <p>Capas, campos y jerarquía ontológica.</p>
        </article>

        <article className="is-active">
          <span>FASE 3 · AHORA</span>
          <strong>Esfera 2D argumental</strong>
          <p>D/A/P, flechas, filtros y rutas conceptuales.</p>
        </article>

        <article className="is-active-secondary">
          <span>FASES 4–5 · ACTIVAS</span>
          <strong>Microrutas + convergencias</strong>
          <p>Vecindades locales y puntos donde varias ramas del sistema se encuentran.</p>
        </article>
      </section>

      <section className="sf-view-picker">
        <header>
          <p>Modi legendi</p>
          <h2>Cuatro maneras de entrar al sistema</h2>
        </header>

        <div className="sf-view-grid">
          {views.map((item) => (
            <button
              key={item.id}
              type="button"
              className={view === item.id ? 'is-active' : ''}
              onClick={() => setView(item.id)}
            >
              <span>{item.number}</span>
              <div>
                <strong>{item.label}</strong>
                <small>{item.short}</small>
              </div>
            </button>
          ))}
        </div>

        <div className="sf-view-question">
          <span>PREGUNTA DE LA VISTA</span>
          <strong>{currentView.question}</strong>
        </div>
      </section>

      <section className="sf-universe-section">
        <div className="sf-section-heading">
          <span>I</span>
          <div>
            <p>Schema universi</p>
            <h2>Esfera maestra · elija una puerta de entrada</h2>
          </div>
        </div>

        <div className="sf-universe-layout">
          <div className="sf-universe sf-universe-v2">
            <div className="sf-cosmos-boundary" aria-hidden="true">
              <span>NATURA NATURATA · CAMPO DE LOS MODOS</span>
            </div>

            <div className="sf-cosmos-naturans" aria-hidden="true">
              <span>NATURA NATURANS · POTENCIA Y CAUSALIDAD INMANENTE</span>
            </div>

            <div className="sf-cosmos-attributes" aria-hidden="true">
              <span>ATRIBUTOS INFINITOS</span>
            </div>

            <div className="sf-cosmos-axis sf-cosmos-axis-thought" aria-hidden="true">
              <span>PENSAMIENTO</span>
            </div>

            <div className="sf-cosmos-axis sf-cosmos-axis-extension" aria-hidden="true">
              <span>EXTENSIÓN</span>
            </div>

            <div className="sf-cosmos-core-caption" aria-hidden="true">
              <small>D3 · D6 · P11 · P14 · P15</small>
              <strong>SUSTANCIA ÚNICA · DIOS</strong>
            </div>

            {spheres.map((sphere) => (
              <button
                key={sphere.id}
                type="button"
                className={[
                  'sf-sphere',
                  sphere.className,
                  selectedId === sphere.id ? 'is-selected' : '',
                  focused.has(sphere.id) ? 'is-focused' : '',
                ].join(' ')}
                onClick={() => selectSphere(sphere)}
              >
                <small>{sphere.code}</small>
                <strong>{sphere.title}</strong>
              </button>
            ))}

            <div className="sf-cosmos-singulars" aria-hidden="true">
              {Array.from({ length: 18 }).map((_, index) => (
                <i key={index} />
              ))}
            </div>

            <div className="sf-cosmos-note sf-note-world">
              <span>MUNDO</span>
              <small>no está fuera de la Naturaleza</small>
            </div>

            <div className="sf-cosmos-note sf-note-attributes">
              <span>∞</span>
              <small>
                vemos explícitamente Pensamiento y Extensión, no sólo dos atributos
              </small>
            </div>
          </div>

          <aside className="sf-inspector">
            <p className="sf-inspector-kicker">Sphaera selecta</p>
            <span className="sf-inspector-code">{selected.code}</span>
            <h3>{selected.title}</h3>
            <p>{selected.subtitle}</p>

            <div className="sf-inspector-ref">
              <span>Ruta textual</span>
              <strong>{selected.refs}</strong>
            </div>

            <div className="sf-inspector-note">
              <span>Cómo leerla</span>
              <p>
                La posición representa nivel ontológico o función conceptual;
                no una localización física. Seleccionar una esfera abre ahora
                su ruta argumental en la sección siguiente.
              </p>
            </div>

            <div className="sf-inspector-route">
              <span>Ruta activa</span>
              <strong>{route.label}</strong>
              <small>{route.short}</small>
            </div>
          </aside>
        </div>
      </section>

      <section className="sf-argument-section">
        <div className="sf-section-heading">
          <span>II</span>
          <div>
            <p>Ordo argumentorum</p>
            <h2>Constelación argumental · {route.label}</h2>
          </div>
        </div>

        <div className="sf-concept-selector">
          {spinozaFigureRoutes.map((item) => (
            <button
              key={item.id}
              type="button"
              className={routeId === item.id ? 'is-active' : ''}
              style={{ '--route-accent': item.accent }}
              onClick={() => openRoute(item.id)}
            >
              <strong>{item.label}</strong>
              <small>{item.short}</small>
            </button>
          ))}
        </div>

        <div
          className="sf-route-question"
          style={{ '--route-accent': route.accent }}
        >
          <span>PREGUNTA GUÍA</span>
          <strong>{route.question}</strong>
          <p>{route.result}</p>
          {route.note && <small>{route.note}</small>}
        </div>

        <div className="sf-argument-toolbar">
          <div>
            <span>Relaciones</span>
            {[
              ['both', 'Ambas'],
              ['logical', 'Lógicas'],
              ['pedagogical', 'Pedagógica'],
            ].map(([id, label]) => (
              <button
                key={id}
                type="button"
                className={edgeMode === id ? 'is-active' : ''}
                onClick={() => setEdgeMode(id)}
              >
                {label}
              </button>
            ))}
          </div>

          <div>
            <span>Tipos de nodo</span>
            {[
              ['definition', 'Def.'],
              ['axiom', 'Ax.'],
              ['proposition', 'Prop.'],
            ].map(([kind, label]) => (
              <button
                key={kind}
                type="button"
                className={visibleKinds[kind] ? 'is-active' : ''}
                aria-pressed={visibleKinds[kind]}
                onClick={() => toggleKind(kind)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="sf-argument-layout">
          <div
            className="sf-argument-stage"
            style={{ '--route-accent': route.accent }}
          >
            <svg
              className="sf-argument-svg"
              viewBox="0 0 1000 700"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <marker
                  id="sf-ped-arrow"
                  markerWidth="8"
                  markerHeight="8"
                  refX="6.5"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,6 L7,3 z" fill="#5f8a63" />
                </marker>

                <marker
                  id="sf-logical-arrow"
                  markerWidth="7"
                  markerHeight="7"
                  refX="6"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,6 L7,3 z" fill="#704840" />
                </marker>
              </defs>

              {(edgeMode === 'both' || edgeMode === 'pedagogical') &&
                pedagogicalEdges.map((edge) => {
                  const a = routePositions[edge.sourceIndex]
                  const b = routePositions[edge.targetIndex]
                  if (!a || !b) return null

                  return (
                    <path
                      key={edge.id}
                      className="sf-edge sf-edge-pedagogical"
                      d={curvedPath(a, b, -14)}
                      markerEnd="url(#sf-ped-arrow)"
                    />
                  )
                })}

              {(edgeMode === 'both' || edgeMode === 'logical') &&
                dependencyEdges.map((edge, index) => {
                  const a = routePositions[edge.sourceIndex]
                  const b = routePositions[edge.targetIndex]
                  if (!a || !b) return null

                  return (
                    <path
                      key={edge.id}
                      className="sf-edge sf-edge-logical"
                      d={curvedPath(a, b, index % 2 === 0 ? 28 : -28)}
                      markerEnd="url(#sf-logical-arrow)"
                    />
                  )
                })}
            </svg>

            <div className="sf-argument-center">
              <span>CONCEPTO</span>
              <strong>{route.label}</strong>
              <small>{route.short}</small>
            </div>

            {routeNodes.map((node, index) => {
              const position = routePositions[index]
              const kind = nodeKind(node)
              const visible = visibleKinds[kind]
              const isCurrent = index === routeStepIndex
              const isCompleted = index < routeStepIndex

              return (
                <button
                  key={node.id}
                  type="button"
                  className={[
                    'sf-proof-node',
                    `is-${kind}`,
                    visible ? '' : 'is-filtered',
                    isCurrent ? 'is-current' : '',
                    isCompleted ? 'is-completed' : '',
                    selectedProofId === node.id ? 'is-selected' : '',
                  ].join(' ')}
                  style={{
                    left: `${position.x / 10}%`,
                    top: `${position.y / 7}%`,
                  }}
                  onClick={() => selectProofById(node.id)}
                >
                  <i>{index + 1}</i>
                  <span>{node.data.code}</span>
                  <strong>{node.data.title}</strong>
                  <small>{nodeKindLabel(node)}</small>
                </button>
              )
            })}
          </div>

          <aside className="sf-proof-inspector">
            {selectedProof ? (
              <>
                <div className="sf-proof-inspector-head">
                  <span>{nodeKindLabel(selectedProof)}</span>
                  <b>{selectedProof.data.code}</b>
                </div>

                <h3>{selectedProof.data.title}</h3>
                <blockquote>{selectedProof.data.short}</blockquote>

                <section>
                  <span>Qué significa</span>
                  <p>{selectedProof.data.explanation}</p>
                </section>

                <section>
                  <span>Función en el argumento</span>
                  <p>{selectedProof.data.role}</p>
                </section>

                <section>
                  <span>Dependencias registradas</span>
                  <div className="sf-proof-supports">
                    {selectedProof.data.dependsOn.length ? (
                      selectedProof.data.dependsOn.map((id) => {
                        const dep = spinozaNodeById(id)
                        return (
                          <button
                            key={id}
                            type="button"
                            onClick={() => selectProofById(id)}
                          >
                            <b>{dep?.data.code || id}</b>
                            <small>{dep?.data.title || 'Soporte'}</small>
                          </button>
                        )
                      })
                    ) : (
                      <em>Fundamento inicial.</em>
                    )}
                  </div>
                </section>

                {externalSupports.length > 0 && (
                  <section>
                    <span>Fundamentos externos a esta ruta</span>
                    <div className="sf-proof-supports">
                      {externalSupports.map((support) => (
                        <button
                          key={support.id}
                          type="button"
                          onClick={() => selectProofById(support.id)}
                        >
                          <b>{support.data.code}</b>
                          <small>{support.data.title}</small>
                        </button>
                      ))}
                    </div>
                  </section>
                )}

                <footer>
                  <span>Fuente</span>
                  <strong>PDF p. {selectedProof.data.page}</strong>
                </footer>
              </>
            ) : (
              <p>Seleccione un nodo argumental.</p>
            )}
          </aside>
        </div>

        <div className="sf-route-progress">
          <div className="sf-route-progress-head">
            <span>
              Paso {routeStepIndex + 1} de {routeNodes.length}
            </span>
            <strong>
              {routeNodes[routeStepIndex]?.data.code} ·{' '}
              {routeNodes[routeStepIndex]?.data.title}
            </strong>
          </div>

          <div className="sf-route-progress-line">
            <i
              style={{
                width: `${((routeStepIndex + 1) / routeNodes.length) * 100}%`,
                background: route.accent,
              }}
            />
          </div>

          <div className="sf-route-progress-actions">
            <button
              type="button"
              disabled={routeStepIndex === 0}
              onClick={() => goToRouteStep(routeStepIndex - 1)}
            >
              ← Anterior
            </button>

            <button
              type="button"
              onClick={() => goToRouteStep(0)}
            >
              Reiniciar ruta
            </button>

            <button
              type="button"
              disabled={routeStepIndex >= routeNodes.length - 1}
              onClick={() => goToRouteStep(routeStepIndex + 1)}
            >
              Siguiente →
            </button>
          </div>
        </div>

        <section
          className="sf-microroute-section"
          style={{ '--route-accent': route.accent }}
        >
          <header className="sf-microroute-head">
            <div>
              <span>MICRORUTA · VECINDAD INMEDIATA</span>
              <h3>
                {selectedProof
                  ? `${selectedProof.data.code} · ${selectedProof.data.title}`
                  : 'Seleccione un nodo'}
              </h3>
              <p>
                Aquí se separa la ruta temática de la estructura local:
                qué sostiene este nodo, qué produce directamente y qué
                bifurcaciones quedan fuera de la ruta actual.
              </p>
            </div>

            <div className="sf-microroute-route-tags">
              <span>Aparece en</span>
              <div>
                {crossRoutes.length ? (
                  crossRoutes.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={item.id === routeId ? 'is-active' : ''}
                      onClick={() => switchRouteKeepingProof(item.id)}
                    >
                      {item.label}
                    </button>
                  ))
                ) : (
                  <small>Sin otra ruta temática registrada.</small>
                )}
              </div>
            </div>
          </header>

          <div className="sf-microroute-grid">
            <div className="sf-microroute-column supports">
              <span>SE APOYA EN</span>

              <div>
                {selectedSupports.length ? (
                  selectedSupports.map((support) => (
                    <button
                      key={support.id}
                      type="button"
                      className={
                        routeIndexById.has(support.id)
                          ? 'is-in-route'
                          : 'is-external'
                      }
                      onClick={() => selectProofById(support.id)}
                    >
                      <b>{support.data.code}</b>
                      <strong>{support.data.title}</strong>
                      <small>
                        {routeIndexById.has(support.id)
                          ? 'dentro de esta ruta'
                          : 'fundamento lateral'}
                      </small>
                    </button>
                  ))
                ) : (
                  <p>Este nodo funciona aquí como fundamento inicial.</p>
                )}
              </div>
            </div>

            <div className="sf-microroute-arrow" aria-hidden="true">
              <span>→</span>
            </div>

            <div className="sf-microroute-current">
              {selectedProof && (
                <>
                  <span>{nodeKindLabel(selectedProof)}</span>
                  <b>{selectedProof.data.code}</b>
                  <strong>{selectedProof.data.title}</strong>

                  <div className="sf-microroute-concepts">
                    {selectedProof.data.concepts.map((concept) => (
                      <small key={concept}>{concept}</small>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="sf-microroute-arrow" aria-hidden="true">
              <span>→</span>
            </div>

            <div className="sf-microroute-column produces">
              <span>PRODUCE / ABRE</span>

              <div>
                {selectedProduces.length ? (
                  selectedProduces.map((produced) => (
                    <button
                      key={produced.id}
                      type="button"
                      className={
                        routeIndexById.has(produced.id)
                          ? 'is-in-route'
                          : 'is-external'
                      }
                      onClick={() => selectProofById(produced.id)}
                    >
                      <b>{produced.data.code}</b>
                      <strong>{produced.data.title}</strong>
                      <small>
                        {routeIndexById.has(produced.id)
                          ? 'continúa en esta ruta'
                          : 'bifurcación fuera de ruta'}
                      </small>
                    </button>
                  ))
                ) : (
                  <p>No hay consecuencia directa adicional registrada.</p>
                )}
              </div>
            </div>
          </div>

          {routeCurrentNode && (
            <div className="sf-transition-explainer">
              <div
                className={[
                  'sf-transition-badge',
                  transitionKind === 'logical'
                    ? 'is-logical'
                    : 'is-pedagogical',
                ].join(' ')}
              >
                {routeNextNode
                  ? transitionKind === 'logical'
                    ? 'CONTINUIDAD LÓGICA DIRECTA'
                    : 'TRANSICIÓN PEDAGÓGICA'
                  : 'FIN DE LA RUTA'}
              </div>

              <div>
                <span>¿Por qué sigue este paso?</span>

                {routeNextNode ? (
                  <>
                    <strong>
                      {routeCurrentNode.data.code} → {routeNextNode.data.code}
                    </strong>

                    <p>
                      {transitionKind === 'logical'
                        ? `El siguiente nodo registra a ${routeCurrentNode.data.code} como dependencia o consecuencia directa.`
                        : `La ruta recomienda pasar a ${routeNextNode.data.code}, pero esta flecha no afirma una dependencia lógica directa entre ambos.`}
                    </p>
                  </>
                ) : (
                  <p>
                    Ha llegado al cierre de la ruta temática {route.label}.
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="sf-proof-history">
            <span>ITER RATIONIS · SU RECORRIDO</span>

            <div>
              {proofHistory.map((id, index) => {
                const historyNode = spinozaNodeById(id)
                if (!historyNode) return null

                return (
                  <span key={`${id}-${index}`}>
                    {index > 0 && <i>→</i>}
                    <button
                      type="button"
                      className={
                        selectedProof?.id === id ? 'is-active' : ''
                      }
                      onClick={() => selectProofById(id)}
                    >
                      {historyNode.data.code}
                    </button>
                  </span>
                )
              })}
            </div>
          </div>
        </section>

        <section
          className="sf-convergence-section"
          style={{ '--route-accent': route.accent }}
        >
          <header className="sf-convergence-head">
            <div>
              <span>NODI CARDINALES · CONVERGENCIAS</span>
              <h3>Dónde se juntan varias ramas del sistema</h3>
              <p>
                Una proposición puede ser más que un paso de una ruta:
                puede recoger fundamentos diferentes y convertirse en un
                punto de giro para varias regiones de la Parte I.
              </p>
            </div>

            <div className="sf-convergence-selector">
              {convergenceNodes.map((node) => (
                <button
                  key={node.id}
                  type="button"
                  className={
                    convergenceId === node.id ? 'is-active' : ''
                  }
                  onClick={() => setConvergenceId(node.id)}
                >
                  <b>{node.data.code}</b>
                  <small>{node.data.title}</small>
                </button>
              ))}
            </div>
          </header>

          {convergenceNode && (
            <>
              <div className="sf-convergence-question">
                <span>POR QUÉ ES UN NODO CARDINAL</span>
                <strong>
                  {convergenceNode.data.code} · {convergenceNode.data.title}
                </strong>
                <p>
                  {convergenceNotes[convergenceNode.id] ||
                    convergenceNode.data.role}
                </p>
              </div>

              <div className="sf-convergence-map">
                <div className="sf-convergence-branches">
                  <span>RAMAS QUE CONVERGEN</span>

                  {convergenceSupports.length ? (
                    convergenceSupports.map((support, index) => {
                      const memberships =
                        supportRouteMembership(support.id)

                      return (
                        <button
                          key={support.id}
                          type="button"
                          style={{
                            '--branch-offset': `${index * 8}px`,
                          }}
                          onClick={() => selectProofById(support.id)}
                        >
                          <b>{support.data.code}</b>

                          <div>
                            <strong>{support.data.title}</strong>

                            <small>
                              {memberships.length
                                ? memberships
                                    .map((item) => item.label)
                                    .join(' · ')
                                : support.data.kind}
                            </small>
                          </div>

                          <i>→</i>
                        </button>
                      )
                    })
                  ) : (
                    <p>Este nodo no registra dependencias directas.</p>
                  )}
                </div>

                <div className="sf-convergence-hub">
                  <div className="sf-convergence-orbit orbit-1" />
                  <div className="sf-convergence-orbit orbit-2" />

                  <span>{convergenceNode.data.kind}</span>
                  <b>{convergenceNode.data.code}</b>
                  <strong>{convergenceNode.data.title}</strong>

                  <div>
                    {convergenceNode.data.concepts.map((concept) => (
                      <small key={concept}>{concept}</small>
                    ))}
                  </div>
                </div>

                <div className="sf-convergence-out">
                  <span>LO QUE ESTE NODO ABRE</span>

                  {convergenceProduces.length ? (
                    convergenceProduces.slice(0, 7).map((produced) => (
                      <button
                        key={produced.id}
                        type="button"
                        onClick={() => selectProofById(produced.id)}
                      >
                        <i>→</i>
                        <b>{produced.data.code}</b>

                        <div>
                          <strong>{produced.data.title}</strong>
                          <small>{produced.data.kind}</small>
                        </div>
                      </button>
                    ))
                  ) : (
                    <p>Sin consecuencia directa adicional registrada.</p>
                  )}
                </div>
              </div>

              <div className="sf-convergence-routes">
                <span>RUTAS TEMÁTICAS QUE CRUZAN ESTE NODO</span>

                <div>
                  {convergenceRoutes.length ? (
                    convergenceRoutes.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className={item.id === routeId ? 'is-active' : ''}
                        onClick={() => {
                          setConvergenceId(convergenceNode.id)
                          switchRouteKeepingProof(item.id)
                          selectProofById(convergenceNode.id)
                        }}
                      >
                        <b>{item.label}</b>
                        <small>{item.question}</small>
                      </button>
                    ))
                  ) : (
                    <small>
                      Este nodo cardinal no está incluido en una de las
                      rutas temáticas reducidas actuales.
                    </small>
                  )}
                </div>
              </div>

              <div className="sf-convergence-reading">
                <div>
                  <span>LECTURA FRACTAL</span>
                  <strong>
                    rama → convergencia → nuevo despliegue
                  </strong>
                </div>

                <p>
                  Puede abrir un fundamento de la izquierda, volver al nodo
                  cardinal y después seguir una consecuencia de la derecha.
                  Así la demostración deja de parecer una lista lineal y se
                  muestra como una arquitectura de convergencias.
                </p>
              </div>
            </>
          )}
        </section>

        <div className="sf-edge-legend">
          <span><i className="pedagogical" /> ruta pedagógica</span>
          <span><i className="logical" /> dependencia lógica registrada</span>
          <span><b className="definition" /> definición</span>
          <span><b className="axiom" /> axioma</span>
          <span><b className="proposition" /> proposición</span>
        </div>
      </section>

      <section className="sf-section">
        <div className="sf-section-heading">
          <span>III</span>
          <div>
            <p>Ordo ontologicus</p>
            <h2>Capas que deben conservarse en 2D y 3D</h2>
          </div>
        </div>

        <div className="sf-layer-stack">
          <article className="layer-0"><span>0</span><strong>Causa sui · necesidad · eternidad</strong><small>núcleo de inteligibilidad</small></article>
          <article className="layer-1"><span>1</span><strong>Sustancia única · Dios</strong><small>centro ontológico</small></article>
          <article className="layer-2"><span>2</span><strong>Atributos infinitos</strong><small>Pensamiento y Extensión como atributos conocidos</small></article>
          <article className="layer-3"><span>3</span><strong>Natura naturans</strong><small>actividad · potencia · causalidad inmanente</small></article>
          <article className="layer-4"><span>4</span><strong>Modos infinitos</strong><small>zona intermedia</small></article>
          <article className="layer-5"><span>5</span><strong>Natura naturata</strong><small>todo lo que se sigue necesariamente</small></article>
          <article className="layer-6"><span>6</span><strong>Mundo · cosas singulares</strong><small>modos finitos dentro de la Naturaleza</small></article>
        </div>
      </section>

      <section className="sf-section">
        <div className="sf-section-heading">
          <span>IV</span>
          <div>
            <p>Signa relationum</p>
            <h2>Lenguaje visual del sistema</h2>
          </div>
        </div>

        <div className="sf-relations">
          {relations.map(([label, example, kind]) => (
            <article key={kind}>
              <i className={`sf-line sf-line-${kind}`} />
              <div>
                <strong>{label}</strong>
                <span>{example}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sf-section">
        <div className="sf-section-heading">
          <span>V</span>
          <div>
            <p>Ordo propositionum</p>
            <h2>Nueve regiones de la Parte I</h2>
          </div>
        </div>

        <div className="sf-phases-grid">
          {macroPhases.map(([number, range, label]) => (
            <article key={number}>
              <span>{number}</span>
              <small>{range}</small>
              <strong>{label}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="sf-section sf-prohibitions">
        <div className="sf-section-heading">
          <span>VI</span>
          <div>
            <p>Praecepta</p>
            <h2>Lo que la figura nunca debe sugerir</h2>
          </div>
        </div>

        <div className="sf-prohibitions-grid">
          <article><b>×</b><span>Dios y Sustancia como dos sustancias distintas.</span></article>
          <article><b>×</b><span>Causa sui como causa temporal anterior a Dios.</span></article>
          <article><b>×</b><span>Atributos como piezas físicas de la sustancia.</span></article>
          <article><b>×</b><span>El mundo como una creación situada fuera de Dios/Naturaleza.</span></article>
          <article><b>×</b><span>La voluntad como facultad soberana que rompe la necesidad.</span></article>
          <article><b>×</b><span>La ruta pedagógica como si fuera idéntica a la demostración lógica.</span></article>
        </div>
      </section>

      <Link
        to="/tareas/ontologia-ii/spinoza-etica-parte-i/figuras/3d"
        className="sf3d-entry"
      >
        <span>3D</span>

        <div>
          <small>FASE VI · UNIVERSUM NAVIGABILE</small>
          <strong>Abrir Universo 3D</strong>
          <p>
            Rote la arquitectura ontológica, seleccione esferas
            y aísle sus relaciones inmediatas.
          </p>
        </div>

        <b>↗</b>
      </Link>

      <section className="sf-next">
        <span>FASE SIGUIENTE</span>
        <div>
          <h2>Fase 4 · microrutas, bifurcaciones y relaciones semánticas</h2>
          <p>
            Una vez validada esta constelación 2D, podremos abrir cada paso
            para mostrar bifurcaciones, soportes laterales y relaciones
            filosóficas más finas antes de llevar la geometría al 3D.
          </p>
        </div>
        <strong>IV</strong>
      </section>

      <footer className="sf-footer">
        <Link to="/tareas/ontologia-ii/spinoza-etica-parte-i">
          ← Mapa demostrativo
        </Link>
        <span>DEUS · SUBSTANTIA · NATURA</span>
        <span>Figuras Espinoza · Fase III</span>
      </footer>
    </main>
  )
}
