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

import SpinozaNode from '../components/spinoza/SpinozaNode'
import {
  spinozaEdges,
  spinozaNodeById,
  spinozaNodes,
  spinozaRoutes,
  spinozaGuidedRoute,
  spinozaGuidedPhases,
} from '../data/spinozaEthics1Prototype'

const nodeTypes = {
  definition: SpinozaNode,
  axiom: SpinozaNode,
  proposition: SpinozaNode,
  core: SpinozaNode,
  appendix: SpinozaNode,
}

const conceptColors = {
  substance: '#49687d',
  god: '#7b4d46',
  causality: '#9a702e',
  modes: '#6f6d85',
  necessity: '#6b5a78',
  freedom: '#9a5a42',
  nature: '#59745c',
  power: '#8b633e',
}

function nodeOrderIndex(id) {
  const index = spinozaGuidedRoute.findIndex((step) => step.id === id)
  return index === -1 ? 999 : index
}

function buildConceptGuide(route) {
  if (route === 'all') return []

  const matches = spinozaNodes
    .filter((node) => node.data.branch.includes(route))
    .sort((a, b) => nodeOrderIndex(a.id) - nodeOrderIndex(b.id))

  const foundations = matches.filter(
    (node) => node.type === 'definition' || node.type === 'axiom',
  )
  const developments = matches.filter(
    (node) => node.type !== 'definition' && node.type !== 'axiom',
  )

  const numbered = []

  foundations.forEach((node, index) => {
    numbered.push({
      id: node.id,
      number: `1.${index + 1}`,
      group: 'Fundamentos',
    })
  })

  developments.forEach((node, index) => {
    numbered.push({
      id: node.id,
      number: String(index + 2),
      group: 'Desarrollo',
    })
  })

  return numbered
}

function nodeSetForSelection(selectedId) {
  if (!selectedId) return new Set()
  const set = new Set([selectedId])

  spinozaEdges.forEach((edge) => {
    if (edge.source === selectedId) set.add(edge.target)
    if (edge.target === selectedId) set.add(edge.source)
  })

  return set
}

function StudyCanvas() {
  const [route, setRoute] = useState('all')
  const [selectedId, setSelectedId] = useState('E1P14')
  const [history, setHistory] = useState(['E1P14'])
  const [guidedMode, setGuidedMode] = useState(false)
  const [guidedIndex, setGuidedIndex] = useState(() => {
    try {
      const saved = Number(
        window.localStorage.getItem('philosophia-spinoza-guided-step') || 0,
      )
      return Number.isFinite(saved)
        ? Math.min(Math.max(saved, 0), spinozaGuidedRoute.length - 1)
        : 0
    } catch {
      return 0
    }
  })

  const { fitView, setCenter, getNodes } = useReactFlow()

  const guidedStep = spinozaGuidedRoute[guidedIndex] || null
  const guidedCurrent = guidedStep ? spinozaNodeById(guidedStep.id) : null
  const guidedNext = spinozaGuidedRoute[guidedIndex + 1] || null
  const guidedPrev = spinozaGuidedRoute[guidedIndex - 1] || null

  const guidedCompletedIds = useMemo(
    () =>
      new Set(
        spinozaGuidedRoute
          .slice(0, guidedIndex)
          .map((step) => step.id),
      ),
    [guidedIndex],
  )

  const conceptGuide = useMemo(
    () => buildConceptGuide(route),
    [route],
  )

  const conceptGuideMap = useMemo(
    () =>
      new Map(
        conceptGuide.map((item) => [item.id, item]),
      ),
    [conceptGuide],
  )

  const conceptColor =
    route === 'all'
      ? null
      : conceptColors[route] || '#59745c'

  const conceptRouteNodes = useMemo(
    () =>
      route === 'all'
        ? []
        : spinozaNodes.filter((node) =>
            node.data.branch.includes(route),
          ),
    [route],
  )

  const conceptTopicIds = useMemo(
    () => new Set(conceptRouteNodes.map((node) => node.id)),
    [conceptRouteNodes],
  )

  const conceptSupportIds = useMemo(() => {
    if (route === 'all') return new Set()

    const support = new Set()

    conceptRouteNodes.forEach((node) => {
      node.data.dependsOn.forEach((id) => {
        if (!conceptTopicIds.has(id)) {
          support.add(id)
        }
      })
    })

    return support
  }, [route, conceptRouteNodes, conceptTopicIds])

  const conceptLayout = useMemo(() => {
    if (route === 'all') return new Map()

    const active = [...conceptRouteNodes]
      .sort((a, b) => nodeOrderIndex(a.id) - nodeOrderIndex(b.id))

    const levels = new Map()

    active.forEach((node) => {
      if (node.type === 'definition' || node.type === 'axiom') {
        levels.set(node.id, 0)
      }
    })

    for (let pass = 0; pass < active.length + 2; pass += 1) {
      let changed = false

      active.forEach((node) => {
        if (levels.has(node.id)) return

        const internalDeps = node.data.dependsOn.filter((id) =>
          conceptTopicIds.has(id),
        )

        if (!internalDeps.length) {
          levels.set(node.id, 1)
          changed = true
          return
        }

        const known = internalDeps
          .map((id) => levels.get(id))
          .filter((value) => Number.isFinite(value))

        if (known.length === internalDeps.length) {
          levels.set(node.id, Math.max(...known) + 1)
          changed = true
        }
      })

      if (!changed) break
    }

    active.forEach((node) => {
      if (!levels.has(node.id)) {
        levels.set(node.id, 1)
      }
    })

    const byLevel = new Map()

    active.forEach((node) => {
      const level = levels.get(node.id) || 0
      if (!byLevel.has(level)) byLevel.set(level, [])
      byLevel.get(level).push(node)
    })

    byLevel.forEach((nodesAtLevel) => {
      nodesAtLevel.sort(
        (a, b) => nodeOrderIndex(a.id) - nodeOrderIndex(b.id),
      )
    })

    const layout = new Map()
    const xGap = 330
    const yGap = 205

    ;[...byLevel.entries()]
      .sort(([a], [b]) => a - b)
      .forEach(([level, nodesAtLevel]) => {
        const totalHeight = (nodesAtLevel.length - 1) * yGap

        nodesAtLevel.forEach((node, index) => {
          layout.set(node.id, {
            x: 360 + level * xGap,
            y: 120 + index * yGap - totalHeight / 2,
          })
        })
      })

    const supportNodes = [...conceptSupportIds]
      .map((id) => spinozaNodeById(id))
      .filter(Boolean)
      .sort((a, b) => nodeOrderIndex(a.id) - nodeOrderIndex(b.id))

    supportNodes.forEach((node, index) => {
      layout.set(node.id, {
        x: 10,
        y: 70 + index * 175,
      })
    })

    return layout
  }, [
    route,
    conceptRouteNodes,
    conceptTopicIds,
    conceptSupportIds,
  ])

  const selectionSet = useMemo(
    () => nodeSetForSelection(selectedId),
    [selectedId],
  )

  const nodes = useMemo(
    () =>
      spinozaNodes.map((node) => {
        const routeMatches =
          route === 'all' || node.data.branch.includes(route)

        const conceptItem = conceptGuideMap.get(node.id)
        const topicActive =
          route !== 'all' && Boolean(conceptItem)
        const topicSupport =
          route !== 'all' && conceptSupportIds.has(node.id)

        const thematicPosition =
          route !== 'all' && !guidedMode
            ? conceptLayout.get(node.id) || node.position
            : node.position

        const selectionActive = Boolean(selectedId)
        const inSelection = selectionSet.has(node.id)

        const isGuidedCurrent =
          guidedMode && node.id === guidedStep?.id
        const isGuidedNext =
          guidedMode && node.id === guidedNext?.id
        const isGuidedCompleted =
          guidedMode && guidedCompletedIds.has(node.id)
        const isGuidedSupport =
          guidedMode &&
          guidedCurrent?.data.dependsOn.includes(node.id)

        return {
          ...node,
          position: thematicPosition,
          hidden:
            route !== 'all' &&
            !guidedMode &&
            !topicActive &&
            !topicSupport,
          draggable: false,
          data: {
            ...node.data,
            nodeType: node.type,
            topicActive,
            topicSupport,
            topicColor: conceptColor,
            conceptNumber: conceptItem?.number || null,
            guidedCurrent: isGuidedCurrent,
            guidedNext: isGuidedNext,
            guidedCompleted: isGuidedCompleted,
            guidedSupport: isGuidedSupport,
            dimmed: guidedMode
              ? !isGuidedCurrent &&
                !isGuidedNext &&
                !isGuidedCompleted &&
                !isGuidedSupport
              : route !== 'all'
                ? !topicActive && !topicSupport
                : !routeMatches ||
                  (selectionActive && !inSelection),
            highlighted:
              !guidedMode &&
              routeMatches &&
              selectionActive &&
              inSelection &&
              node.id !== selectedId,
          },
        }
      }),
    [
      route,
      selectedId,
      selectionSet,
      guidedMode,
      guidedStep,
      guidedCurrent,
      guidedNext,
      guidedCompletedIds,
      conceptGuideMap,
      conceptColor,
      conceptSupportIds,
      conceptLayout,
    ],
  )

  const edges = useMemo(() => {
    const baseEdges = spinozaEdges.map((edge) => {
      const selectedTouchesEdge =
        selectedId &&
        (edge.source === selectedId || edge.target === selectedId)

      const sourceNode = spinozaNodeById(edge.source)
      const targetNode = spinozaNodeById(edge.target)

      const sourceInRoute =
        route !== 'all' && sourceNode?.data.branch.includes(route)
      const targetInRoute =
        route !== 'all' && targetNode?.data.branch.includes(route)

      const active =
        selectedTouchesEdge &&
        (
          route === 'all' ||
          sourceInRoute ||
          targetInRoute
        )

      const routeVisible =
        route === 'all' || sourceInRoute || targetInRoute

      const routeActive =
        route !== 'all' && sourceInRoute && targetInRoute

      const conceptSupportEdge =
        route !== 'all' &&
        conceptSupportIds.has(edge.source) &&
        targetInRoute

      const stroke = active
        ? '#704840'
        : routeActive
          ? conceptColor || '#a37b24'
          : conceptSupportEdge
            ? conceptColor || '#7b956f'
          : edge.relation === 'critical'
            ? 'rgba(112, 72, 64, .72)'
            : edge.relation === 'definition'
              ? 'rgba(64, 86, 107, .55)'
              : edge.relation === 'axiom'
                ? 'rgba(163, 123, 36, .58)'
                : 'rgba(50, 43, 35, .34)'

      const strokeWidth = active
        ? 4.2
        : routeActive
          ? 2.8
          : conceptSupportEdge
            ? 1.7
          : edge.relation === 'critical'
            ? 2
            : 1.15

      const isGuidedDependency =
        guidedMode &&
        edge.target === guidedStep?.id &&
        guidedCurrent?.data.dependsOn.includes(edge.source)

      const opacity = guidedMode
        ? isGuidedDependency
          ? 1
          : 0.07
        : !routeVisible
          ? 0.05
          : active || routeActive
            ? 1
            : conceptSupportEdge
              ? 0.72
              : route !== 'all'
                ? 0.025
                : 0.22

      const thematicEdgeVisible =
        route === 'all' ||
        routeActive ||
        conceptSupportEdge

      return {
        ...edge,
        hidden:
          !guidedMode &&
          route !== 'all' &&
          !thematicEdgeVisible,
        type: 'smoothstep',
        animated: false,
        style: {
          stroke: isGuidedDependency ? '#7b956f' : stroke,
          strokeWidth: isGuidedDependency ? 2.2 : strokeWidth,
          opacity,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: isGuidedDependency ? 11 : active ? 15 : routeActive ? 14 : 11,
          height: isGuidedDependency ? 11 : active ? 15 : routeActive ? 14 : 11,
          color: isGuidedDependency ? '#7b956f' : stroke,
        },
      }
    })

    if (!guidedMode && route !== 'all' && conceptGuide.length > 1) {
      conceptGuide.forEach((item, index) => {
        const next = conceptGuide[index + 1]
        if (!next) return

        const currentIsFoundation = item.number.includes('.')
        const nextIsFoundation = next.number.includes('.')

        const isFoundationSequence =
          currentIsFoundation && nextIsFoundation

        const isFoundationToDevelopment =
          currentIsFoundation && !nextIsFoundation

        const guideStroke = isFoundationSequence
          ? '#708983'
          : isFoundationToDevelopment
            ? '#a27c35'
            : conceptColor || '#59745c'

        const guideWidth = isFoundationSequence
          ? 1.35
          : isFoundationToDevelopment
            ? 1.75
            : 2.05

        const guideDash = isFoundationSequence
          ? '3 5'
          : isFoundationToDevelopment
            ? '7 5'
            : undefined

        baseEdges.push({
          id: `concept-guide-${route}-${item.id}-${next.id}`,
          source: item.id,
          target: next.id,
          type: 'smoothstep',
          animated: false,
          selectable: false,
          interactionWidth: 0,
          className: [
            'spinoza-concept-sequence-edge',
            isFoundationSequence
              ? 'is-foundation-sequence'
              : isFoundationToDevelopment
                ? 'is-foundation-transition'
                : 'is-development-sequence',
          ].join(' '),
          style: {
            stroke: guideStroke,
            strokeWidth: guideWidth,
            strokeDasharray: guideDash,
            opacity: .96,
          },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            width: isFoundationSequence ? 8 : 9,
            height: isFoundationSequence ? 8 : 9,
            color: guideStroke,
          },
        })
      })
    }

    if (guidedMode && guidedStep && guidedNext) {
      baseEdges.push({
        id: `guided-${guidedStep.id}-${guidedNext.id}`,
        source: guidedStep.id,
        target: guidedNext.id,
        type: 'smoothstep',
        animated: false,
        selectable: false,
        style: {
          stroke: '#4f7a4f',
          strokeWidth: 2.8,
          opacity: 1,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 12,
          height: 12,
          color: '#4f7a4f',
        },
      })
    }

    return baseEdges
  }, [
    route,
    selectedId,
    guidedMode,
    guidedStep,
    guidedCurrent,
    guidedNext,
    conceptColor,
    conceptSupportIds,
    conceptGuide,
  ])

  useEffect(() => {
    if (guidedMode || route === 'all') return

    const timer = window.setTimeout(() => {
      const activeNodes = getNodes().filter(
        (node) =>
          node.data.topicActive ||
          node.data.topicSupport,
      )

      if (!activeNodes.length) return

      fitView({
        nodes: activeNodes,
        padding: 0.18,
        duration: 650,
        maxZoom: 0.92,
      })
    }, 80)

    return () => window.clearTimeout(timer)
  }, [route, guidedMode, getNodes, fitView, nodes])

  const selected = spinozaNodeById(selectedId)

  const selectNode = useCallback(
    (node) => {
      if (!node) return

      setSelectedId(node.id)
      setHistory((current) => {
        if (current[current.length - 1] === node.id) return current
        return [...current.slice(-7), node.id]
      })

      setCenter(node.position.x + 110, node.position.y + 80, {
        zoom: 1.15,
        duration: 450,
      })
    },
    [setCenter],
  )

  const selectById = useCallback(
    (id) => {
      const node = spinozaNodeById(id)
      if (node) selectNode(node)
    },
    [selectNode],
  )

  const jumpGuided = useCallback(
    (index) => {
      const safeIndex = Math.min(
        Math.max(index, 0),
        spinozaGuidedRoute.length - 1,
      )

      const step = spinozaGuidedRoute[safeIndex]
      const node = step ? spinozaNodeById(step.id) : null
      if (!step || !node) return

      setGuidedMode(true)
      setGuidedIndex(safeIndex)
      setRoute('all')
      setSelectedId(node.id)

      try {
        window.localStorage.setItem(
          'philosophia-spinoza-guided-step',
          String(safeIndex),
        )
      } catch {}

      setCenter(node.position.x + 110, node.position.y + 80, {
        zoom: 1.15,
        duration: 500,
      })
    },
    [setCenter],
  )

  const reset = useCallback(() => {
    setGuidedMode(false)
    setSelectedId(null)
    setRoute('all')
    setTimeout(() => fitView({ padding: 0.12, duration: 500 }), 0)
  }, [fitView])

  const resetGuidedRoute = useCallback(() => {
    try {
      window.localStorage.removeItem('philosophia-spinoza-guided-step')
    } catch {}

    setGuidedIndex(0)
    setGuidedMode(false)
    setSelectedId(null)
    setRoute('all')

    setTimeout(() => {
      fitView({ padding: 0.12, duration: 500 })
    }, 0)
  }, [fitView])

  return (
    <div className="spinoza-study-shell">
      <nav className="spinoza-study-nav">
        <Link to="/tareas">← Tareas</Link>
        <Link to="/" className="spinoza-study-brand">Φ · Philosophia</Link>
        <span>Ethica I · De Deo</span>
      </nav>

      <header className="spinoza-study-hero">
        <div>
          <p>Ontología II · Laboratorium philosophicum</p>
          <h1>El orden de <em>las razones</em></h1>
          <p className="spinoza-study-lead">
            Definiciones, axiomas y proposiciones convergen hacia una única
            sustancia y vuelven a desplegarse desde ella.
          </p>
        </div>
        <aside>
          <span>LECTURA</span>
          <strong>Parte I · De Dios</strong>
          <b>PDF pp. 27–51</b>
          <small>Traducción de Vidal Peña</small>
        </aside>
      </header>

      <section className="spinoza-study-intro">
        <div>
          <span>ORDO GEOMETRICUS</span>
          <strong>D1–D8 · A1–A7 · P1–P36 · Apéndice parcial</strong>
        </div>
        <p>
          Puede explorar el mapa libremente o seguir la ruta pedagógica
          paso a paso.
        </p>
      </section>

      <section className="spinoza-guided-launch">
        <div>
          <span>ORDO INTELLIGENDI</span>
          <strong>Ruta guiada · Entender “De Dios” desde cero</strong>
          <p>El verde marca qué estudiar ahora y hacia dónde continúa.</p>
        </div>
        <div className="spinoza-guided-launch-actions">
          <button
            type="button"
            className="spinoza-guided-reset"
            onClick={resetGuidedRoute}
          >
            Reiniciar ruta
          </button>

          <button
            type="button"
            className="spinoza-guided-start"
            onClick={() => {
              if (guidedMode) {
                setGuidedMode(false)
                setSelectedId(null)
                setTimeout(
                  () => fitView({ padding: 0.12, duration: 500 }),
                  0,
                )
              } else {
                jumpGuided(guidedIndex)
              }
            }}
          >
            {guidedMode ? 'Salir de ruta guiada' : `Continuar · paso ${guidedIndex + 1}`}
          </button>
        </div>
      </section>

      {guidedMode && guidedCurrent && (
        <section className="spinoza-guided-panel">
          <div className="spinoza-guided-progress">
            <span>Paso {guidedIndex + 1} de {spinozaGuidedRoute.length}</span>
            <div>
              <i
                style={{
                  width: `${((guidedIndex + 1) / spinozaGuidedRoute.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <div className="spinoza-guided-phases">
            {spinozaGuidedPhases.map((phase) => (
              <span
                key={phase}
                className={guidedStep?.phase === phase ? 'is-active' : ''}
              >
                {phase}
              </span>
            ))}
          </div>

          <div className="spinoza-guided-copy">
            <div>
              <span>{guidedStep.phase}</span>
              <strong>
                {guidedCurrent.data.code} · {guidedCurrent.data.title}
              </strong>
              <p>{guidedStep.why}</p>
            </div>
            <aside>
              <span>Pregunta que abre el siguiente paso</span>
              <strong>{guidedStep.nextQuestion}</strong>
            </aside>
          </div>

          <div className="spinoza-guided-network">
            <article>
              <span>Conceptos a dominar ahora</span>
              <div className="spinoza-guided-concepts">
                {guidedCurrent.data.concepts.map((concept) => (
                  <b key={concept}>{concept}</b>
                ))}
              </div>
            </article>

            <article>
              <span>Se apoya directamente en</span>
              <div className="spinoza-guided-support-list">
                {guidedCurrent.data.dependsOn.length ? (
                  guidedCurrent.data.dependsOn.map((id) => {
                    const support = spinozaNodeById(id)
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => selectById(id)}
                      >
                        <b>{support?.data.code || id}</b>
                        <small>{support?.data.title}</small>
                        <em>{support?.data.kind}</em>
                      </button>
                    )
                  })
                ) : (
                  <p>Este paso funciona como fundamento inicial.</p>
                )}
              </div>
            </article>

            <article>
              <span>Qu\xe9 abre despu\xe9s</span>
              <div className="spinoza-guided-support-list">
                {guidedCurrent.data.produces.length ? (
                  guidedCurrent.data.produces.slice(0, 6).map((id) => {
                    const produced = spinozaNodeById(id)
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => selectById(id)}
                      >
                        <b>{produced?.data.code || id}</b>
                        <small>{produced?.data.title}</small>
                        <em>{produced?.data.kind}</em>
                      </button>
                    )
                  })
                ) : (
                  <p>No hay una consecuencia directa adicional registrada.</p>
                )}
              </div>
            </article>
          </div>

          <div className="spinoza-guided-legend">
            <span><i className="route-line" /> ruta pedag\xf3gica</span>
            <span><i className="dependency-line" /> dependencia l\xf3gica real</span>
            <span><i className="support-node" /> fundamento que conviene revisar</span>
          </div>

          <div className="spinoza-guided-nav">
            <button
              type="button"
              disabled={!guidedPrev}
              onClick={() => jumpGuided(guidedIndex - 1)}
            >
              ← Anterior
            </button>

            <button
              type="button"
              onClick={() => selectNode(guidedCurrent)}
            >
              Centrar nodo actual
            </button>

            <button
              type="button"
              className="spinoza-guided-nav-reset"
              onClick={resetGuidedRoute}
            >
              Reiniciar
            </button>

            <button
              type="button"
              disabled={!guidedNext}
              onClick={() => jumpGuided(guidedIndex + 1)}
            >
              Siguiente →
            </button>
          </div>
        </section>
      )}

      <section className="spinoza-study-routes">
        <div>
          <span>Ruta conceptual</span>
          {spinozaRoutes.map((item) => (
            <button
              key={item.id}
              type="button"
              className={route === item.id ? 'is-active' : ''}
              onClick={() => {
                setGuidedMode(false)
                setRoute(item.id)
                setSelectedId(null)
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button type="button" onClick={reset}>Ver sistema completo</button>
      </section>

      {route !== 'all' && !guidedMode && (
        <section
          className="spinoza-concept-guide"
          style={{ '--concept-color': conceptColor }}
        >
          <div className="spinoza-concept-guide-head">
            <div>
              <span>ORIENTATIO CONCEPTUALIS</span>
              <strong>
                Ruta para comprender \xb7{' '}
                {spinozaRoutes.find((item) => item.id === route)?.label}
              </strong>
              <p>
                La numeraci\xf3n indica un orden recomendado de estudio.
                No sustituye las dependencias reales: cada tarjeta muestra
                tambi\xe9n aquello de lo que depende.
              </p>
            </div>

            <div className="spinoza-concept-guide-key">
              <span><i /> aura = pertenece al tema</span>
              <span><b>1.1</b> fundamento</span>
              <span><b>2</b> desarrollo argumental</span>
              <span className="concept-key-line foundation">
                <i /> 1.1 → 1.2 · fundamentos
              </span>
              <span className="concept-key-line transition">
                <i /> 1.n → 2 · transición
              </span>
              <span className="concept-key-line development">
                <i /> 2 → 3 · recorrido temático
              </span>
            </div>
          </div>

          <div className="spinoza-concept-guide-steps">
            {conceptGuide.map((item) => {
              const guideNode = spinozaNodeById(item.id)
              const dependencies =
                guideNode?.data.dependsOn
                  .map((id) => spinozaNodeById(id))
                  .filter(Boolean) || []

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => selectById(item.id)}
                >
                  <b>{item.number}</b>
                  <div>
                    <span>
                      {guideNode?.data.code} \xb7 {guideNode?.data.kind}
                    </span>
                    <strong>{guideNode?.data.title}</strong>

                    {dependencies.length > 0 && (
                      <small>
                        depende de:{' '}
                        {dependencies
                          .map((dep) => dep.data.code)
                          .join(' \xb7 ')}
                      </small>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </section>
      )}

      <section className="spinoza-study-workspace">
        <div className="spinoza-flow-panel">
          <div className="spinoza-flow-caption">
            <div>
              <span>ORDO GEOMETRICUS</span>
              <strong>fundamentos → sustancia → Dios → inmanencia</strong>
            </div>
            <div className="spinoza-flow-legend">
              <span>Def.</span><span>Ax.</span><span>Prop.</span>
              <span>Núcleo</span><span>Apéndice</span>
            </div>
          </div>

          <div className="spinoza-flow-canvas">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              onNodeClick={(_, node) => selectNode(node)}
              onPaneClick={() => {
                if (!guidedMode) setSelectedId(null)
              }}
              fitView
              fitViewOptions={{ padding: 0.12 }}
              minZoom={0.12}
              maxZoom={1.8}
              nodesConnectable={false}
              proOptions={{ hideAttribution: true }}
            >
              <Background gap={28} size={1} />
              <Controls showInteractive={false} />
              <MiniMap pannable zoomable nodeStrokeWidth={3} />
            </ReactFlow>
          </div>
        </div>

        <aside className="spinoza-inspector">
          {selected ? (
            <>
              <div className="spinoza-inspector-head">
                <span>{selected.data.kind}</span>
                <b>{selected.data.code}</b>
              </div>
              <h2>{selected.data.title}</h2>
              <blockquote>{selected.data.short}</blockquote>

              <section>
                <span>Qué significa</span>
                <p>{selected.data.explanation}</p>
              </section>

              <section>
                <span>Función filosófica</span>
                <p>{selected.data.role}</p>
              </section>

              <section>
                <span>Depende de</span>
                <div className="spinoza-inspector-links">
                  {selected.data.dependsOn.length ? (
                    selected.data.dependsOn.map((id) => {
                      const dep = spinozaNodeById(id)
                      return (
                        <button key={id} type="button" onClick={() => selectById(id)}>
                          {dep?.data.code || id}
                          <small>{dep?.data.title}</small>
                        </button>
                      )
                    })
                  ) : (
                    <em>Fundamento inicial</em>
                  )}
                </div>
              </section>

              <section>
                <span>Produce</span>
                <div className="spinoza-inspector-links">
                  {selected.data.produces.length ? (
                    selected.data.produces.map((id) => {
                      const produced = spinozaNodeById(id)
                      return (
                        <button key={id} type="button" onClick={() => selectById(id)}>
                          {produced?.data.code || id}
                          <small>{produced?.data.title}</small>
                        </button>
                      )
                    })
                  ) : (
                    <em>Sin consecuencia directa registrada.</em>
                  )}
                </div>
              </section>

              <section>
                <span>Conceptos</span>
                <div className="spinoza-inspector-tags">
                  {selected.data.concepts.map((concept) => (
                    <b key={concept}>{concept}</b>
                  ))}
                </div>
              </section>

              <footer>
                <span>Fuente</span>
                <strong>PDF p. {selected.data.page}</strong>
              </footer>
            </>
          ) : (
            <div className="spinoza-inspector-empty">
              <span>SELECTIO</span>
              <strong>Seleccione un nodo</strong>
              <p>Se iluminarán sus dependencias inmediatas.</p>
            </div>
          )}
        </aside>
      </section>

      <section className="spinoza-study-history">
        <span>Iter rationis</span>
        <div>
          {history.map((id, index) => {
            const historyNode = spinozaNodeById(id)
            return (
              <span key={`${id}-${index}`}>
                {index > 0 && <b>→</b>}
                <button type="button" onClick={() => selectById(id)}>
                  {historyNode?.data.code || id}
                </button>
              </span>
            )
          })}
        </div>
      </section>

      <section className="spinoza-study-next">
        <span>Arquitectura de la lectura</span>
        <div>
          <article><b>01</b><strong>Fundamentos</strong><p>D1–D8 y A1–A7.</p></article>
          <article><b>02</b><strong>Convergencia</strong><p>P1–P15 llegan a la sustancia única.</p></article>
          <article><b>03</b><strong>Expansión</strong><p>P16–P33 despliegan el sistema.</p></article>
          <article><b>04</b><strong>Cierre</strong><p>P34–P36 y Apéndice parcial.</p></article>
        </div>
      </section>

      <Link
        to="/tareas/ontologia-ii/spinoza-etica-parte-i/figuras"
        className="spinoza-figures-entry"
      >
        <b>◎</b>
        <span>
          Figuras Espinoza
          <small>arquitectura 2D / 3D</small>
        </span>
      </Link>

      <footer className="spinoza-study-footer">
        <Link to="/tareas">← Volver al tablero</Link>
        <span>substantia · Deus · necessitas</span>
        <Link to="/semestre/5/ontologia-ii/clase/19-agosto">
          Clase del 19 de agosto ↗
        </Link>
      </footer>
    </div>
  )
}

export default function SpinozaEthicsStudy() {
  return (
    <ReactFlowProvider>
      <StudyCanvas />
    </ReactFlowProvider>
  )
}
