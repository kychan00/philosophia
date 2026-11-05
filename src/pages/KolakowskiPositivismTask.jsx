import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import {
  Background,
  Controls,
  Handle,
  MarkerType,
  MiniMap,
  Position,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema.jsx'
import SectionPedagogy from '../components/philosophy/system2d/SectionPedagogy.jsx'
import { useSystem2DCompactViewport } from '../components/philosophy/system2d/mobilePerformance.js'
import {
  KOLAKOWSKI_GEOMETRY,
  kolakowskiById,
  kolakowskiCoreSchema,
  kolakowskiEdges,
  kolakowskiNodes,
  kolakowskiOrder,
  kolakowskiRoutes,
  kolakowskiSchemaFor,
} from '../data/kolakowskiPositivismSystem.js'
import './KolakowskiPositivismTask.css'

const PAPER = '#F3EFE4'
const INK = '#26201B'
const BURGUNDY = '#7A2D1E'
const GOLD = '#A98045'

const STUDY_RULES = [
  {
    number: '01',
    title: 'Fenomenalismo',
    pages: 'pp. 15–17',
    thesis: 'No convertir una esencia inaccesible en conocimiento.',
    bullets: [
      'El conocimiento debe permanecer ligado a experiencia posible.',
      'No se elimina la investigación causal: se exige que la causa tenga consecuencias observables o controlables.',
      'Una entidad que no cambia ninguna observación ni explicación queda fuera del saber legítimo.',
    ],
    example: 'Ejemplo del texto: un bacilo causal puede aceptarse porque explica síntomas y entra en investigación empírica.',
  },
  {
    number: '02',
    title: 'Nominalismo',
    pages: 'pp. 17–20',
    thesis: 'Un concepto general no prueba un universal existente por sí mismo.',
    bullets: [
      'Las abstracciones ordenan, simplifican y comunican la experiencia.',
      'Modelos ideales y conceptos generales pueden ser científicamente indispensables.',
      'Su utilidad no autoriza a reificarlos como entidades independientes.',
    ],
    example: 'Ejemplo: hablar del triángulo en general no obliga a postular “el Triángulo” como cosa separada.',
  },
  {
    number: '03',
    title: 'Hechos, valores y normas',
    pages: 'pp. 20–21',
    thesis: 'Del hecho no se deriva científicamente, por sí solo, el deber.',
    bullets: [
      'La experiencia describe hechos, relaciones y consecuencias.',
      'Un juicio de valor o una norma no se verifica del mismo modo que un enunciado empírico.',
      'La ciencia puede evaluar medios para un fin, pero no demostrar por ese mismo procedimiento el valor último del fin.',
    ],
    example: 'Ejemplo: la ciencia puede indicar cómo curar; que debamos querer curar no aparece como dato experimental.',
  },
  {
    number: '04',
    title: 'Unidad del método científico',
    pages: 'pp. 21–22',
    thesis: 'Las ciencias comparten una exigencia básica de control del conocimiento.',
    bullets: [
      'Los objetos y técnicas de las ciencias pueden ser distintos.',
      'La orientación común exige observación, comunicación, contraste y control público.',
      'Esto no implica que todas las ciencias deban reducirse sin más a una sola disciplina.',
    ],
    example: 'La física funciona históricamente como modelo fuerte, pero la reducción total exige supuestos adicionales.',
  },
]

const STUDY_WARNINGS = [
  ['No dice', 'que sólo exista lo que vemos directamente.', 'Sí permite causas no observadas si tienen consecuencias empíricas.'],
  ['No dice', 'que las abstracciones sean inútiles.', 'Las considera instrumentos necesarios para ordenar y prever.'],
  ['No dice', 'que no podamos tener valores.', 'Sostiene que no se prueban científicamente del mismo modo que los hechos.'],
  ['No dice', 'que todo deba reducirse automáticamente a física.', 'Defiende una unidad metodológica básica, no una reducción ya demostrada.'],
  ['No equivale', 'simplemente a materialismo.', 'También critica un materialismo que se presente como metafísica no comprobable.'],
]

function KolakowskiNode({ data, selected }) {
  return (
    <article
      className={
        'kol-card' +
        (selected ? ' is-selected' : '') +
        (data.isNeighbor ? ' is-neighbor' : '') +
        (data.dimmed ? ' is-dimmed' : '')
      }
      style={{ '--kol-band': data.color }}
    >
      <Handle type="target" position={Position.Top} />
      <div className="kol-card-meta">
        <span>{data.number} / {data.kind}</span>
        <b>{data.page}</b>
      </div>
      <h3>{data.title}</h3>
      <p className="kol-card-lead">{data.short}</p>
      <div className="kol-card-source">
        <small>FUENTE · PARÁFRASIS LOCALIZADA</small>
        <p>{data.source}</p>
      </div>
      <div className="kol-card-foot">
        <span>FOLIO {data.number}</span>
        <strong>ABRIR ↗</strong>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </article>
  )
}

const nodeTypes = { kolakowski: KolakowskiNode }

function KolakowskiCanvas() {
  const [route, setRoute] = useState('all')
  const compactViewport = useSystem2DCompactViewport()
  const [selectedId, setSelectedId] = useState('K01')
  const [guided, setGuided] = useState(false)
  const [guideIndex, setGuideIndex] = useState(0)
  const [folioOpen, setFolioOpen] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const [minimap, setMinimap] = useState(false)
  const workspaceRef = useRef(null)
  const { fitView, setCenter } = useReactFlow()

  const selected = kolakowskiById(selectedId)
  const routeSequence = useMemo(
    () =>
      route === 'all'
        ? kolakowskiOrder
        : kolakowskiNodes
            .filter((node) => node.data.section === route)
            .map((node) => node.id),
    [route],
  )
  const activeSequence = guided ? kolakowskiOrder : routeSequence
  const activeIndex = guided
    ? guideIndex
    : activeSequence.indexOf(selectedId)
  const allowed = useMemo(() => new Set(routeSequence), [routeSequence])
  const relationIds = useMemo(
    () =>
      new Set([
        selectedId,
        ...kolakowskiEdges
          .filter(
            (edge) =>
              edge.source === selectedId || edge.target === selectedId,
          )
          .flatMap((edge) => [edge.source, edge.target]),
      ]),
    [selectedId],
  )

  const displayedNodes = useMemo(
    () =>
      kolakowskiNodes.map((node) => {
        const focus = node.id === selectedId
        const neighbor = relationIds.has(node.id) && !focus
        const dimmed = Boolean(selectedId) && !relationIds.has(node.id)
        return {
          ...node,
          hidden: !allowed.has(node.id),
          selected: focus,
          draggable: false,
          data: {
            ...node.data,
            isNeighbor: neighbor,
            dimmed: dimmed && !focus,
          },
        }
      }),
    [allowed, relationIds, selectedId],
  )

  const displayedEdges = useMemo(
    () =>
      kolakowskiEdges.map((edge) => {
        const related =
          edge.source === selectedId || edge.target === selectedId
        const stroke = edge.critical ? BURGUNDY : related ? GOLD : '#8B7966'
        return {
          ...edge,
          type: 'smoothstep',
          hidden: !allowed.has(edge.source) || !allowed.has(edge.target),
          style: {
            stroke,
            strokeWidth: related ? 3 : 1.6,
            opacity: related ? 1 : 0.42,
          },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: stroke,
            width: 15,
            height: 15,
          },
        }
      }),
    [allowed, selectedId],
  )

  const center = useCallback(
    (id) => {
      const node = kolakowskiById(id)
      if (!node) return
      window.requestAnimationFrame(() =>
        setCenter(
          node.position.x + KOLAKOWSKI_GEOMETRY.width / 2,
          node.position.y + KOLAKOWSKI_GEOMETRY.height / 2,
          { zoom: 0.94, duration: 420 },
        ),
      )
    },
    [setCenter],
  )

  const focus = useCallback(
    (id, fromGuide = false) => {
      const node = kolakowskiById(id)
      if (!node) return
      setRoute((current) =>
        current === 'all' || current === node.data.section
          ? current
          : node.data.section,
      )
      if (!fromGuide) setGuided(false)
      setSelectedId(id)
      center(id)
    },
    [center],
  )

  const changeRoute = useCallback((next) => {
    setGuided(false)
    setFolioOpen(false)
    setRoute(next)
    const first =
      next === 'all'
        ? kolakowskiNodes[0]
        : kolakowskiNodes.find((node) => node.data.section === next)
    if (first) setSelectedId(first.id)
  }, [])

  const launchGuide = () => {
    setRoute('all')
    setGuided(true)
    setGuideIndex(0)
    setSelectedId(kolakowskiOrder[0])
    center(kolakowskiOrder[0])
  }

  const navigate = useCallback(
    (delta) => {
      const next = Math.max(
        0,
        Math.min(activeIndex + delta, activeSequence.length - 1),
      )
      const id = activeSequence[next]
      if (!id) return
      if (guided) setGuideIndex(next)
      focus(id, guided)
    },
    [activeIndex, activeSequence, focus, guided],
  )

  useEffect(() => {
    const ids = route === 'all' ? kolakowskiOrder : routeSequence
    const frame = window.requestAnimationFrame(() =>
      fitView({
        nodes: ids.map((id) => ({ id })),
        padding: 0.19,
        maxZoom: 0.84,
        duration: 420,
      }),
    )
    return () => window.cancelAnimationFrame(frame)
  }, [fitView, route, routeSequence])

  useEffect(() => {
    const listener = () =>
      setFullscreen(document.fullscreenElement === workspaceRef.current)
    document.addEventListener('fullscreenchange', listener)
    return () => document.removeEventListener('fullscreenchange', listener)
  }, [])

  const toggleFullscreen = async () => {
    const element = workspaceRef.current
    if (!element) return
    try {
      if (document.fullscreenElement === element) {
        await document.exitFullscreen()
      } else {
        await element.requestFullscreen()
      }
      window.requestAnimationFrame(() =>
        fitView({ padding: 0.14, maxZoom: 0.86, duration: 360 }),
      )
    } catch {
      // La vista continúa utilizable si el navegador no expone Fullscreen API.
    }
  }

  const relations = kolakowskiEdges.filter(
    (edge) => edge.source === selectedId || edge.target === selectedId,
  )

  return (
    <main className="kol-shell">
      <nav className="kol-nav">
        <Link to="/semestre/5/ontologia-ii">← ONTOLOGÍA II</Link>
        <Link to="/" className="kol-brand">Φ · PHILOSOPHIA</Link>
        <Link to="/tareas">CALENDARIO ↗</Link>
      </nav>

      <header className="kol-hero">
        <div className="kol-hero-copy">
          <span className="kol-overline">
            ARCHIVUM ONTOLOGICUM · LECTURA · 04 XI 2026
          </span>
          <p className="kol-folio-label">LESZEK KOŁAKOWSKI · CAPÍTULO I · PP. 13–23</p>
          <h1>
            Cuatro reglas para <em>limitar el saber</em>
          </h1>
          <p className="kol-hero-lead">
            ¿Qué hace “positiva” a una filosofía? En esta introducción,
            Kołakowski no empieza por una escuela cerrada, sino por reglas que
            deciden qué puede presentarse como conocimiento.
          </p>
          <div className="kol-hero-actions">
            <button type="button" onClick={launchGuide}>
              {guided ? 'REINICIAR GUÍA COMPLETA' : 'INICIAR GUÍA COMPLETA →'}
            </button>
            <Link to="/tareas">VER TAREA EN CALENDARIO ↗</Link>
          </div>
        </div>

        <aside className="kol-hero-plate" aria-label="Ficha documental">
          <span>CORREO / ONT-II / 2026-10-28</span>
          <strong>POSITIVISMO</strong>
          <dl>
            <div><dt>FUENTE</dt><dd>Texto asignado</dd></div>
            <div><dt>ALCANCE</dt><dd>Cap. I · 13–23</dd></div>
            <div><dt>ESTACIONES</dt><dd>08</dd></div>
            <div><dt>REGLAS</dt><dd>04</dd></div>
          </dl>
          <p>
            El esquema y las preguntas son reconstrucciones de estudio de
            PHILOSOPHIA; no figuras ni formulaciones añadidas al autor.
          </p>
        </aside>
      </header>

      <section className="kol-source-boundary">
        <strong>FRONTERA DOCUMENTAL</strong>
        <p>
          <b>Fuente:</b> capítulo «Características generales del positivismo»,
          pp. impresas 13–23 del PDF aportado para la materia. <b>Texto de esta
          página:</b> paráfrasis localizada; no se reproducen páginas del libro.
          <b>Esquemas y preguntas:</b> reconstrucción pedagógica explícita.
        </p>
        <span>FUENTE → RECONSTRUCCIÓN → ESQUEMA</span>
      </section>

      <section className="kol-thesis">
        <div>
          <span>PROBLEMA RECTOR</span>
          <h2>El positivismo como disciplina de límites</h2>
          <p>
            El hilo que organiza el capítulo es metodológico: establecer
            criterios para admitir o rechazar afirmaciones como conocimiento.
            Las cuatro reglas no son cuatro doctrinas aisladas; juntas fijan
            una frontera frente a la metafísica.
          </p>
        </div>
        <div className="kol-master-schema">
          <AnimatedConceptSchema schema={kolakowskiCoreSchema} />
        </div>
      </section>

      <section className="kol-study" aria-labelledby="kol-study-title">
        <header className="kol-study-head">
          <div>
            <span>RESUMEN DE ESTUDIO · PP. 13–23</span>
            <h2 id="kol-study-title">Cuatro reglas, punto por punto</h2>
          </div>
          <p>
            Capa de estudio basada únicamente en el capítulo
            «Características generales del positivismo». Todo lo que sigue es
            paráfrasis sintética; no cita literal.
          </p>
        </header>

        <div className="kol-study-grid">
          {STUDY_RULES.map((rule) => (
            <article className="kol-rule-card" key={rule.number}>
              <header>
                <span>REGLA {rule.number}</span>
                <b>{rule.pages}</b>
              </header>
              <h3>{rule.title}</h3>
              <p className="kol-rule-thesis">{rule.thesis}</p>
              <ul>
                {rule.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p className="kol-rule-example">
                <strong>EJEMPLO / MATIZ</strong>
                {rule.example}
              </p>
            </article>
          ))}
        </div>

        <div className="kol-system-strip" aria-label="Sistema completo del capítulo">
          <div>
            <span>RECORRIDO POSITIVISTA</span>
            <strong>experiencia</strong>
            <i>→</i>
            <strong>fenómenos</strong>
            <i>→</i>
            <strong>conceptos</strong>
            <i>→</i>
            <strong>regularidades</strong>
            <i>→</i>
            <strong>conocimiento</strong>
          </div>
          <div className="is-rejected">
            <span>SALTO QUE SE RECHAZA</span>
            <strong>fenómeno</strong>
            <i>→</i>
            <strong>esencia metafísica incognoscible</strong>
          </div>
        </div>
      </section>

      <section className="kol-misconceptions" aria-labelledby="kol-not-title">
        <div className="kol-misconceptions-intro">
          <span>LECTURA DE PRECISIÓN</span>
          <h2 id="kol-not-title">Lo que el positivismo de este capítulo no dice</h2>
          <p>
            Estas distinciones evitan convertir la lectura en una caricatura
            empirista más fuerte que el propio texto.
          </p>
        </div>
        <div className="kol-warning-list">
          {STUDY_WARNINGS.map(([label, wrong, right]) => (
            <article key={wrong}>
              <span>{label}</span>
              <p><s>{wrong}</s></p>
              <strong>{right}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="kol-memory-strip">
        <span>REPASO DE MEMORIA · 60 SEGUNDOS</span>
        <h2>Positivismo = límites del conocimiento legítimo.</h2>
        <div>
          <p><b>1.</b> Fenomenalismo → no esencia incognoscible.</p>
          <p><b>2.</b> Nominalismo → concepto general ≠ entidad universal.</p>
          <p><b>3.</b> Hecho ≠ valor → el “es” no demuestra el “debe”.</p>
          <p><b>4.</b> Unidad científica → control, contraste y experiencia.</p>
        </div>
        <blockquote>
          En una frase: Kołakowski presenta el positivismo menos como una
          teoría sobre qué existe que como una disciplina sobre qué tenemos
          derecho a presentar como conocimiento.
        </blockquote>
      </section>

      <section className="kol-guide">
        <div>
          <span>GUÍA COMPLETA / 08 DE 08</span>
          <h2>Lea el movimiento, no sólo las definiciones.</h2>
          <p>
            La guía recorre el problema inicial, las cuatro reglas, sus
            consecuencias y la apertura histórica del capítulo.
          </p>
        </div>
        <button type="button" onClick={launchGuide}>
          {guided ? 'VOLVER AL INICIO' : 'COMENZAR →'}
        </button>
      </section>

      <section className="kol-routes" aria-label="Rutas temáticas">
        {kolakowskiRoutes.map((item) => (
          <button
            type="button"
            key={item.id}
            className={route === item.id ? 'is-active' : ''}
            onClick={() => changeRoute(item.id)}
          >
            {item.label}
          </button>
        ))}
      </section>

      <SectionPedagogy
        nodes={kolakowskiNodes}
        routes={kolakowskiRoutes.filter((item) => item.id !== 'all')}
        nodeOrder={kolakowskiOrder}
        activeRoute={route}
        selectedId={selectedId}
        onSectionChange={changeRoute}
        onFocusNode={focus}
      />

      <section className="kol-map-section">
        <div className="kol-map-head">
          <div>
            <span>ATLAS 2D · RELACIONES DE LECTURA</span>
            <h2>El archivo de las cuatro reglas</h2>
          </div>
          <div className="kol-map-actions">
            <button
              type="button"
              onClick={() =>
                fitView({
                  nodes: displayedNodes
                    .filter((node) => !node.hidden)
                    .map((node) => ({ id: node.id })),
                  padding: 0.2,
                  maxZoom: 0.86,
                  duration: 350,
                })
              }
            >
              ENCUADRAR
            </button>
            <button type="button" onClick={() => setMinimap((value) => !value)}>
              {minimap ? 'OCULTAR MINIMAPA' : 'MINIMAPA'}
            </button>
            <button type="button" onClick={toggleFullscreen}>
              {fullscreen ? 'SALIR DE PANTALLA COMPLETA' : 'PANTALLA COMPLETA'}
            </button>
          </div>
        </div>

        <div className="kol-workspace" ref={workspaceRef}>
          <div className="kol-canvas">
            <ReactFlow
              nodes={
                compactViewport
                  ? displayedNodes.filter((node) => !node.hidden)
                  : displayedNodes
              }
              edges={
                compactViewport
                  ? displayedEdges.filter((edge) => !edge.hidden)
                  : displayedEdges
              }
              nodeTypes={nodeTypes}
              onNodeClick={(_, node) => focus(node.id)}
              nodesDraggable={false}
              nodesConnectable={false}
              fitView
              fitViewOptions={{ padding: 0.16, maxZoom: 0.82 }}
              minZoom={0.18}
              maxZoom={1.7}
              panOnScroll={false}
              proOptions={{ hideAttribution: false }}
            >
              <Background color="#B7A996" gap={26} size={1} />
              <Controls showInteractive={false} position="bottom-left" />
              {minimap && !compactViewport && (
                <MiniMap
                  pannable
                  zoomable
                  maskColor="#f3efe4c7"
                  nodeColor={(node) => node.data.color}
                />
              )}
            </ReactFlow>
          </div>

          <aside className="kol-inspector" aria-live="polite">
            <header>
              <span>FOLIO / {selected?.data.number} · {selected?.data.page}</span>
              <b>{selected?.data.kind}</b>
            </header>
            <div className="kol-inspector-scroll">
              <h3>{selected?.data.title}</h3>
              <p className="kol-inspector-short">{selected?.data.short}</p>

              <section>
                <span>01 / FUENTE · PARÁFRASIS</span>
                <p>{selected?.data.source}</p>
                <small>{selected?.data.sourceRef}</small>
              </section>

              <section>
                <span>02 / RECONSTRUCCIÓN DE ESTUDIO</span>
                <p>{selected?.data.explanation}</p>
              </section>

              <section>
                <span>03 / ESQUEMA</span>
                {selected && (
                  <AnimatedConceptSchema
                    schema={kolakowskiSchemaFor(selected.id)}
                  />
                )}
              </section>

              <section className="kol-question">
                <span>04 / PREGUNTA DE ESTUDIO</span>
                <p>{selected?.data.question}</p>
              </section>

              <section>
                <span>05 / RELACIONES DOCUMENTADAS</span>
                {relations.length ? (
                  <ul className="kol-relations">
                    {relations.map((edge) => {
                      const target =
                        edge.source === selectedId ? edge.target : edge.source
                      return (
                        <li key={edge.id}>
                          <button type="button" onClick={() => focus(target)}>
                            {kolakowskiById(target)?.data.title} ↗
                          </button>
                          <small>{edge.explanation}</small>
                        </li>
                      )
                    })}
                  </ul>
                ) : (
                  <p>Estación de apertura sin dependencia previa.</p>
                )}
              </section>
            </div>

            <footer>
              <div>
                <button
                  type="button"
                  disabled={activeIndex <= 0}
                  onClick={() => navigate(-1)}
                >
                  ← ANTERIOR
                </button>
                <span>
                  {guided ? 'GUÍA' : 'RUTA'} · {Math.max(0, activeIndex + 1)}/
                  {activeSequence.length}
                </span>
                <button
                  type="button"
                  disabled={activeIndex >= activeSequence.length - 1}
                  onClick={() => navigate(1)}
                >
                  SIGUIENTE →
                </button>
              </div>
              <button
                type="button"
                className="kol-open"
                onClick={() => setFolioOpen(true)}
              >
                ABRIR FOLIO Y ESQUEMA ↗
              </button>
            </footer>
          </aside>

          {folioOpen && selected && (
            <div
              className="kol-folio-layer"
              role="dialog"
              aria-modal="true"
              aria-label={'Folio ampliado: ' + selected.data.title}
            >
              <article className="kol-folio">
                <header>
                  <span>
                    ARCHIVUM / {selected.data.number} / {selected.data.page}
                  </span>
                  <button
                    type="button"
                    onClick={() => setFolioOpen(false)}
                    aria-label="Cerrar folio"
                  >
                    CERRAR ✕
                  </button>
                </header>
                <p className="kol-folio-kicker">{selected.data.kind}</p>
                <h2>{selected.data.title}</h2>
                <small>FUENTE · PARÁFRASIS LOCALIZADA</small>
                <p>{selected.data.source}</p>
                <small>LECTURA EDITORIAL · PHILOSOPHIA</small>
                <p>{selected.data.explanation}</p>
                <small>ESQUEMA RECONSTRUIDO · NO FIGURA DEL AUTOR</small>
                <AnimatedConceptSchema
                  schema={kolakowskiSchemaFor(selected.id)}
                />
                <small>PREGUNTA DE ESTUDIO</small>
                <blockquote>{selected.data.question}</blockquote>
              </article>
            </div>
          )}
        </div>
      </section>

      <section className="kol-after">
        <div>
          <span>ANTES / EL PROBLEMA</span>
          <h2>¿Qué puede contar como conocimiento?</h2>
          <p>
            La introducción convierte esa pregunta en reglas de admisión y
            exclusión. No parte de una ontología positiva de lo real, sino de
            un criterio sobre el estatuto de nuestras afirmaciones.
          </p>
        </div>
        <div>
          <span>DESPUÉS / EL UMBRAL</span>
          <h2>¿Cómo se formó históricamente esta disciplina?</h2>
          <p>
            Kołakowski deja abierto el recorrido por sus antecedentes,
            transformaciones, tensiones y efectos. Ese problema histórico es
            el siguiente umbral del libro.
          </p>
        </div>
      </section>

      <section className="kol-calendar-note">
        <span>CALENDARIUM · FECHA DOCENTE VERIFICADA</span>
        <p>
          Correo del profesor enviado el <b>miércoles 28 de octubre de 2026</b>:
          la lectura debe estar preparada para el <b>miércoles 4 de noviembre
          de 2026</b>. PHILOSOPHIA usa ahora esa misma fecha como objetivo del
          calendario.
        </p>
      </section>

      <footer className="kol-footer">
        <span>PHILOSOPHIA · ARCHIVUM ONTOLOGICUM · 2026</span>
        <Link to="/semestre/5/ontologia-ii">ONTOLOGÍA II ↗</Link>
        <Link to="/tareas">CALENDARIO DE TAREAS ↗</Link>
      </footer>
    </main>
  )
}

export default function KolakowskiPositivismTask() {
  return (
    <ReactFlowProvider>
      <KolakowskiCanvas />
    </ReactFlowProvider>
  )
}
