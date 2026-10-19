import SectionPedagogy from '../components/philosophy/system2d/SectionPedagogy'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import { createPortal } from 'react-dom'
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
import './MarxCommodityValueSystem.css'
import './HegelCroceTaskSystem.css'

import HegelCroceNode from '../components/hegel/HegelCroceNode'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import { SYSTEM_2D_THEME, resolveSystem2DEdgeColor } from '../components/philosophy/system2d/system2dTheme'
import {
  hegelCroceConceptualEdges,
  hegelCroceCrossRelationById,
  hegelCroceEdges,
  hegelCroceGuidedRoute,
  hegelCroceNodeById,
  hegelCroceNodes,
  hegelCrocePhases,
  hegelCroceRoutes,
  hegelCroceSource,
  hegelCroceStats,
} from '../data/hegelCroceTaskSystem'

const nodeTypes = { text:HegelCroceNode, core:HegelCroceNode }

function relatedSet(id, includeConceptual=false) {
  if (!id) return new Set()
  const set=new Set([id])
  hegelCroceEdges.forEach((edge)=>{
    if(edge.source===id) set.add(edge.target)
    if(edge.target===id) set.add(edge.source)
  })
  if(includeConceptual){
    hegelCroceConceptualEdges.forEach((edge)=>{
      if(edge.source===id) set.add(edge.target)
      if(edge.target===id) set.add(edge.source)
    })
  }
  return set
}

function routeOrder(routeId) {
  if(!routeId || routeId==='all') return []
  return hegelCroceNodes
    .filter((node)=>node.data.branch.includes(routeId))
    .sort((a,b)=>{
      const phaseDelta=hegelCrocePhases.indexOf(a.data.phase)-hegelCrocePhases.indexOf(b.data.phase)
      if(phaseDelta) return phaseDelta
      return a.id.localeCompare(b.id,'es',{numeric:true})
    })
    .map((node)=>node.id)
}

function HegelCroceTaskCanvas() {
  const { setCenter, fitView, getNodes } = useReactFlow()
  const workspaceRef=useRef(null)
  const [route,setRoute]=useState('all')
  const [selectedId,setSelectedId]=useState(null)
  const [conceptualMode,setConceptualMode]=useState(false)
  const [guidedMode,setGuidedMode]=useState(false)
  const [guidedIndex,setGuidedIndex]=useState(0)
  const [folioId,setFolioId]=useState(null)
  const [relationId,setRelationId]=useState(null)
  const [workspaceFullscreen,setWorkspaceFullscreen]=useState(false)
  const [history,setHistory]=useState([])

  const selected=hegelCroceNodeById(selectedId)
  const folio=hegelCroceNodeById(folioId)
  const relation=hegelCroceCrossRelationById(relationId)
  const guidedStep=hegelCroceGuidedRoute[guidedIndex]
  const guidedCurrent=hegelCroceNodeById(guidedStep?.id)
  const guidedPrev=guidedIndex>0
  const guidedNext=guidedIndex<hegelCroceGuidedRoute.length-1
  const relationSet=relatedSet(selectedId,conceptualMode)
  const routeIds=useMemo(()=>new Set(routeOrder(route)),[route])
  const routeSequence=useMemo(()=>routeOrder(route),[route])
  const routeCurrentIndex=selectedId ? routeSequence.indexOf(selectedId) : -1
  const routePrevId=routeCurrentIndex>0 ? routeSequence[routeCurrentIndex-1] : null
  const routeNextId=routeCurrentIndex>=0
    ? routeSequence[routeCurrentIndex+1] || null
    : routeSequence[0] || null

  const selectedCrossRelations=useMemo(()=>{
    if(!selectedId) return []
    return hegelCroceConceptualEdges
      .filter((edge)=>edge.source===selectedId || edge.target===selectedId)
      .map((edge)=>hegelCroceCrossRelationById(edge.relationSheetId))
      .filter(Boolean)
  },[selectedId])

  const nodes=useMemo(()=>hegelCroceNodes.map((node)=>{
    const routeActive=route==='all' || node.data.branch.includes(route)
    const guidedCurrentFlag=guidedMode && guidedCurrent?.id===node.id
    const guidedNextNode=guidedMode && hegelCroceGuidedRoute[guidedIndex+1]?.id===node.id
    const related=selectedId ? relationSet.has(node.id) : true
    const hidden=guidedMode
      ? !guidedCurrentFlag && !guidedNextNode
      : route!=='all' && !routeActive

    return {
      ...node,
      hidden,
      data:{
        ...node.data,
        highlighted:selectedId===node.id,
        dimmed:Boolean(selectedId && !related),
        guidedCurrent:guidedCurrentFlag,
        guidedNext:guidedNextNode,
        routeActive,
        onOpenFolio:()=>setFolioId(node.id),
      },
    }
  }),[guidedMode,guidedIndex,guidedCurrent,route,selectedId,relationSet])

  const edges=useMemo(()=>{
    const base=hegelCroceEdges.map((edge)=>{
      const guidedActive=guidedMode && guidedCurrent &&
        (edge.source===guidedCurrent.id || edge.target===guidedCurrent.id)
      const touchesSelected=selectedId && (edge.source===selectedId || edge.target===selectedId)
      return {
        ...edge,
        hidden:guidedMode
          ? !guidedActive
          : route!=='all' && !(routeIds.has(edge.source) && routeIds.has(edge.target)),
        markerEnd:{type:MarkerType.ArrowClosed},
        style:{
          stroke:resolveSystem2DEdgeColor({
            guidedActive,
            relation:edge.relation,
            touchesSelected,
          }),
          strokeWidth:guidedActive || touchesSelected ? 3 : 1.5,
          opacity:selectedId && !touchesSelected ? .16 : .72,
        },
      }
    })

    if(!conceptualMode || guidedMode) return base

    return [
      ...base,
      ...hegelCroceConceptualEdges.map((edge)=>({
        ...edge,
        markerEnd:{type:MarkerType.ArrowClosed},
        animated:true,
        style:{
          stroke:resolveSystem2DEdgeColor({conceptual:true,conceptualType:edge.conceptualType}),
          strokeWidth:2.2,
          strokeDasharray:'7 7',
          opacity:selectedId && !(edge.source===selectedId || edge.target===selectedId) ? .12 : .8,
        },
      })),
    ]
  },[conceptualMode,guidedMode,guidedCurrent,route,routeIds,selectedId])

  const selectNode=useCallback((node)=>{
    if(!node) return
    if(guidedMode) setGuidedMode(false)
    setSelectedId(node.id)
    setHistory((current)=>{
      if(current[current.length-1]===node.id) return current
      return [...current.slice(-11),node.id]
    })
    setCenter(node.position.x+160,node.position.y+100,{zoom:1.03,duration:420})
  },[guidedMode,setCenter])

  const selectById=useCallback((id)=>{
    const node=hegelCroceNodeById(id)
    if(node) selectNode(node)
  },[selectNode])

  const jumpRouteNode=useCallback((id)=>{
    const node=hegelCroceNodeById(id)
    if(!node) return
    setSelectedId(id)
    setCenter(node.position.x+160,node.position.y+100,{zoom:1.03,duration:420})
  },[setCenter])

  const jumpGuided=useCallback((index)=>{
    const safe=Math.min(Math.max(index,0),hegelCroceGuidedRoute.length-1)
    const step=hegelCroceGuidedRoute[safe]
    const node=hegelCroceNodeById(step?.id)
    if(!node) return
    setGuidedMode(true)
    setRoute('all')
    setGuidedIndex(safe)
    setSelectedId(node.id)
    setRelationId(null)
    setFolioId(null)
    try{ window.localStorage.setItem('philosophia-hegel-croce-step',String(safe)) }catch{}
    setCenter(node.position.x+160,node.position.y+100,{zoom:1.03,duration:500})
  },[setCenter])

  useEffect(()=>{
    try{
      const saved=Number(window.localStorage.getItem('philosophia-hegel-croce-step'))
      if(Number.isFinite(saved) && saved>=0 && saved<hegelCroceGuidedRoute.length) setGuidedIndex(saved)
    }catch{}
  },[])

  useEffect(()=>{
    if(guidedMode || route==='all') return
    const timer=window.setTimeout(()=>{
      const visible=getNodes().filter((node)=>!node.hidden)
      if(visible.length) fitView({nodes:visible,padding:.13,duration:650,maxZoom:.82})
    },100)
    return ()=>window.clearTimeout(timer)
  },[route,guidedMode,getNodes,fitView])

  useEffect(()=>{
    const onFullscreen=()=>setWorkspaceFullscreen(document.fullscreenElement===workspaceRef.current)
    document.addEventListener('fullscreenchange',onFullscreen)
    return ()=>document.removeEventListener('fullscreenchange',onFullscreen)
  },[])

  useEffect(()=>{
    if(!folioId && !relationId) return
    const onKey=(event)=>{
      if(event.key==='Escape'){
        setFolioId(null)
        setRelationId(null)
      }
    }
    window.addEventListener('keydown',onKey)
    return ()=>window.removeEventListener('keydown',onKey)
  },[folioId,relationId])

  const toggleWorkspaceFullscreen=async()=>{
    if(!document.fullscreenElement){
      await workspaceRef.current?.requestFullscreen?.()
    }else{
      await document.exitFullscreen?.()
    }
  }

  const overlayHost=workspaceFullscreen && workspaceRef.current ? workspaceRef.current : document.body

  return (
    <main className="marx-study-shell hegel-task-shell">
      <nav className="marx-study-nav">
        <Link to="/tareas">← Tareas</Link>
        <Link to="/" className="marx-study-brand">Φ · Philosophia</Link>
        <span>Ontología II · Hegel</span>
      </nav>

      <header className="marx-study-hero hegel-task-hero">
        <div>
          <p>14 OCT 2026 · TAREA TRABAJADA EN CLASE</p>
          <h1>Hegel · Croce <em>dialéctica, Ser, Nada y Devenir</em></h1>
          <p className="marx-study-lead">
            Un sistema de estudio construido desde los materiales enviados y ampliado con la clase del 14 de octubre:
            Croce, cuestionario, Ciencia de la lógica, Henrich, la clase del 14 de octubre y una nueva lectura de las pp. 77–98 con dos presentaciones docentes diferenciadas.
          </p>
        </div>
        <aside>
          <span>TAREA · ONTOLOGÍA II</span>
          <strong>{hegelCroceStats.nodes} nodos · {hegelCroceStats.schemas} esquemas · {hegelCroceStats.crossRelations} relaciones II</strong>
          <b>{hegelCroceStats.questions} preguntas resueltas</b>
          <small>Trabajada en clase · 14 oct 2026</small>
        </aside>
      </header>

      <section className="marx-source-boundary hegel-task-boundary">
        <div>
          <span>CONTROL DE FUENTE</span>
          <strong>No completa silenciosamente los materiales con manuales externos.</strong>
          <p>{hegelCroceSource.boundary}</p>
        </div>
        <div>
          <span>MATERIALES + CLASE</span>
          {hegelCroceSource.readings.map((reading)=><p key={reading}>{reading}</p>)}
        </div>
      </section>

      <section className="hegel-reading-announcement" aria-labelledby="hegel-reading-new-title">
        <div>
          <span>LECTURA NUEVA · 18 OCTUBRE 2026</span>
          <h2 id="hegel-reading-new-title">Ciencia de la lógica · páginas 77–98</h2>
          <p>
            La consigna posterior del profesor solicita leer estas páginas de la edición Mondolfo.
            El recorrido incorpora el texto primario y sus dos presentaciones docentes sin
            confundirlas con la clase del 14 de octubre ni modificar aquella entrega.
          </p>
          <small>21 nodos del libro · 7 nodos de apoyo docente · localizadores por página y diapositiva</small>
        </div>
        <div className="hegel-reading-actions">
          <button type="button" onClick={() => { setGuidedMode(false);setSelectedId(null);setRoute('reading77') }}>
            Explorar lectura en el mapa →
          </button>
          <button type="button" onClick={() => { setGuidedMode(false);setSelectedId(null);setRoute('docente') }}>
            Ver las presentaciones
          </button>
        </div>
      </section>

      <section className="hegel-task-plan">
        <article><span>01</span><strong>Croce</strong><p>Entender el problema de los contrarios y la solución hegeliana.</p></article>
        <article><span>02</span><strong>Cuestionario</strong><p>Probar la comprensión mediante las 18 preguntas del capítulo I.</p></article>
        <article><span>03</span><strong>Hegel</strong><p>Verificar en el texto primario Ser puro, Nada pura y Devenir.</p></article>
        <article><span>04</span><strong>Henrich</strong><p>Ubicar el mapa bibliográfico: comienzo, método, dialéctica y totalidad.</p></article>
      </section>

      <section className="marx-guided-launch">
        <div>
          <span>LECTIO ORDINATA</span>
          <strong>Ruta guiada completa · {hegelCroceGuidedRoute.length} / {hegelCroceStats.nodes} nodos</strong>
          <p>
            La guía recorre los {hegelCroceStats.nodes} nodos sin saltarse detalles: consigna, Croce,
            las 18 preguntas, Hegel, Henrich, las páginas 77–98 y las presentaciones docentes. El nodo actual y el siguiente permanecen visibles.
          </p>
        </div>
        <button
          type="button"
          onClick={()=>{
            if(guidedMode){
              setGuidedMode(false)
              setSelectedId(null)
              setTimeout(()=>fitView({padding:.08,duration:450}),0)
            }else jumpGuided(guidedIndex)
          }}
        >
          {guidedMode ? 'Salir de ruta guiada' : 'Empezar / continuar guía'}
        </button>
      </section>

      {guidedMode && guidedCurrent && (
        <section className="marx-guided-panel">
          <div className="marx-guided-progress">
            <span>Paso {guidedIndex+1} / {hegelCroceGuidedRoute.length}</span>
            <div><i style={{width:`${((guidedIndex+1)/hegelCroceGuidedRoute.length)*100}%`}} /></div>
          </div>

          <div className="marx-guided-phases">
            {hegelCrocePhases.map((phase)=>(
              <span key={phase} className={guidedStep?.phase===phase ? 'is-active' : ''}>{phase}</span>
            ))}
          </div>

          <div className="marx-guided-copy">
            <div>
              <span>{guidedCurrent.data.phase} · {guidedCurrent.data.page}</span>
              <strong>{guidedCurrent.data.code} · {guidedCurrent.data.title}</strong>
              <blockquote>{guidedCurrent.data.excerpt}</blockquote>
            </div>
            <aside>
              <span>FUNCIÓN EN LA TAREA</span>
              <p>{guidedCurrent.data.role}</p>
              <strong>{guidedCurrent.data.question}</strong>
            </aside>
          </div>

          <div className="marx-guided-nav">
            <button type="button" disabled={!guidedPrev} onClick={()=>jumpGuided(guidedIndex-1)}>← Anterior</button>
            <button type="button" onClick={()=>setFolioId(guidedCurrent.id)}>Abrir folio</button>
            <button type="button" disabled={!guidedNext} onClick={()=>jumpGuided(guidedIndex+1)}>Siguiente →</button>
          </div>
        </section>
      )}

      <section className="marx-study-routes">
        <div>
          <span>Ruta conceptual</span>
          {hegelCroceRoutes.map((item)=>(
            <button
              key={item.id}
              type="button"
              className={route===item.id ? 'is-active' : ''}
              onClick={()=>{
                setGuidedMode(false)
                setRoute(item.id)
                setSelectedId(null)
                if(item.id==='all') setTimeout(()=>fitView({padding:.08,duration:500}),0)
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="marx-route-actions">
          <button
            type="button"
            className={conceptualMode ? 'is-conceptual-active' : ''}
            onClick={()=>{setConceptualMode((v)=>!v);setRelationId(null)}}
          >
            Relaciones II · {conceptualMode ? 'ON' : 'OFF'}
          </button>
          <button
            type="button"
            onClick={()=>{
              setGuidedMode(false)
              setConceptualMode(false)
              setRoute('all')
              setSelectedId(null)
              setRelationId(null)
              setTimeout(()=>fitView({padding:.08,duration:500}),0)
            }}
          >
            Sistema completo
          </button>
        </div>
      </section>

      <section
        ref={workspaceRef}
        className={workspaceFullscreen ? 'marx-study-workspace hegel-task-workspace is-fullscreen' : 'marx-study-workspace hegel-task-workspace'}
      >
        <div className="marx-flow-panel">
          <div className="marx-flow-caption">
            <div>
              <span>STRUCTURA DIALECTICA</span>
              <strong>método → contrarios → monismo / dualismo → síntesis → Ser / Nada / Devenir → contexto</strong>
            </div>
            <div className="marx-flow-caption-actions">
              <div className="marx-flow-legend">
                <span>nodo textual</span>
                <span>nodo nuclear</span>
                <span>detalle</span>
                <span className="is-conceptual">relación II</span>
              </div>
              <button
                type="button"
                className="marx-workspace-fullscreen-toggle"
                onClick={toggleWorkspaceFullscreen}
              >
                {workspaceFullscreen ? 'Salir ⛶' : 'Pantalla completa ⛶'}
              </button>
            </div>
          </div>

          <div className="marx-flow-canvas">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              onNodeClick={(_,node)=>selectNode(node)}
              onEdgeClick={(event,edge)=>{
                if(!edge.relationSheetId) return
                event.stopPropagation()
                setRelationId(edge.relationSheetId)
              }}
              onPaneClick={()=>{if(!guidedMode)setSelectedId(null)}}
              fitView
              fitViewOptions={{padding:.08}}
              minZoom={.025}
              maxZoom={1.6}
              nodesConnectable={false}
              proOptions={{hideAttribution:true}}
            >
              <Background gap={32} size={1} />
              <Controls showInteractive={false} />
              <MiniMap pannable zoomable nodeStrokeWidth={3} />
            </ReactFlow>
          </div>
        </div>

        <aside className="marx-inspector">
          <div className="marx-inspector-scroll">
          <SectionPedagogy
            nodes={hegelCroceNodes}
            routes={hegelCroceRoutes}
            activeRoute={route}
            selectedId={selectedId}
            onSectionChange={(id) => { setGuidedMode(false); setRoute(id); setSelectedId(null) }}
            onFocusNode={(id) => {
              setGuidedMode(false)
              selectById(id)
            }}
          />

            {selected ? (
              <>
                <div className="marx-inspector-head">
                  <span>{selected.data.phase}</span>
                  <b>{selected.data.code}</b>
                </div>

                <h2>{selected.data.title}</h2>

                <section className="marx-inspector-text">
                  <span>{selected.data.sourceMode}</span>
                  <blockquote>{selected.data.excerpt}</blockquote>
                  <small>{selected.data.sourceShort} · {selected.data.page}</small>
                </section>

                <section>
                  <span>EXPLICACIÓN</span>
                  <p>{selected.data.explanation}</p>
                </section>

                <section>
                  <span>FUNCIÓN EN LA TAREA</span>
                  <p>{selected.data.role}</p>
                </section>

                <section>
                  <span>CONCEPTOS</span>
                  <div className="marx-inspector-concepts">
                    {selected.data.concepts.map((concept)=><b key={concept}>{concept}</b>)}
                  </div>
                </section>

                {selected.data.dependsOn.length>0 && (
                  <section>
                    <span>DEPENDE DE</span>
                    <div className="marx-inspector-links">
                      {selected.data.dependsOn.map((id)=>{
                        const node=hegelCroceNodeById(id)
                        if(!node) return null
                        return (
                          <button key={id} type="button" onClick={()=>selectById(id)}>
                            <b>{node.data.code}</b><small>{node.data.title}</small>
                          </button>
                        )
                      })}
                    </div>
                  </section>
                )}

                {selected.data.produces.length>0 && (
                  <section>
                    <span>ABRE HACIA</span>
                    <div className="marx-inspector-links">
                      {selected.data.produces.map((id)=>{
                        const node=hegelCroceNodeById(id)
                        if(!node) return null
                        return (
                          <button key={id} type="button" onClick={()=>selectById(id)}>
                            <b>{node.data.code}</b><small>{node.data.title}</small>
                          </button>
                        )
                      })}
                    </div>
                  </section>
                )}

                {selectedCrossRelations.length>0 && (
                  <section className="marx-inspector-conceptual">
                    <span>RELACIONES DE SEGUNDO NIVEL</span>
                    <div>
                      {selectedCrossRelations.map((item)=>(
                        <button key={item.id} type="button" onClick={()=>setRelationId(item.id)}>
                          <b>{item.id}</b><strong>{item.title}</strong>
                        </button>
                      ))}
                    </div>
                  </section>
                )}

                <section className="marx-inspector-question">
                  <span>PREGUNTA DE CONTROL</span>
                  <strong>{selected.data.question}</strong>
                </section>

                <button type="button" className="marx-open-folio" onClick={()=>setFolioId(selected.id)}>
                  Abrir folio + esquema ↗
                </button>
              </>
            ) : (
              <div className="marx-inspector-empty">
                <span>SELECTIO</span>
                <strong>Seleccione un nodo</strong>
                <p>
                  Hay {hegelCroceStats.nodes} nodos. Puede empezar por Croce,
                  abrir las 18 respuestas del cuestionario o saltar directamente
                  al texto primario de Hegel.
                </p>
              </div>
            )}
          </div>

          {workspaceFullscreen && !guidedMode && route!=='all' && routeSequence.length>0 && (
            <div className="marx-inspector-route-footer">
              <button type="button" disabled={!routePrevId} onClick={()=>jumpRouteNode(routePrevId)}>← Anterior</button>
              <div className="marx-inspector-route-progress">
                <small>{hegelCroceRoutes.find((item)=>item.id===route)?.label}</small>
                <strong>{routeCurrentIndex>=0 ? routeCurrentIndex+1 : '—'} / {routeSequence.length}</strong>
              </div>
              <button type="button" disabled={!routeNextId} onClick={()=>jumpRouteNode(routeNextId)}>
                {routeCurrentIndex>=0 ? 'Siguiente →' : 'Empezar →'}
              </button>
            </div>
          )}

          {guidedMode && workspaceFullscreen && guidedCurrent && (
            <div className="marx-inspector-guided-footer">
              <button type="button" disabled={!guidedPrev} onClick={()=>jumpGuided(guidedIndex-1)}>← Anterior</button>
              <div className="marx-inspector-guided-progress">
                <small>MODO GUÍA</small>
                <strong>Paso {guidedIndex+1} / {hegelCroceGuidedRoute.length}</strong>
              </div>
              <button type="button" disabled={!guidedNext} onClick={()=>jumpGuided(guidedIndex+1)}>Siguiente →</button>
            </div>
          )}
        </aside>
      </section>

      <section className="marx-study-history">
        <span>Iter lectionis</span>
        <div>
          {history.map((id,index)=>{
            const node=hegelCroceNodeById(id)
            return (
              <span key={id+'-'+index}>
                {index>0 && <b>→</b>}
                <button type="button" onClick={()=>selectById(id)}>{node?.data.code || id}</button>
              </span>
            )
          })}
        </div>
      </section>

      <section className="hegel-task-questions">
        <header>
          <span>SEMINARIUM · CROCE</span>
          <h2>Las 18 preguntas ya están dentro del sistema</h2>
          <p>
            Cada tarjeta abre su nodo-respuesta y desde ahí puede rastrear
            exactamente qué conceptos de Croce y Hegel la sostienen.
          </p>
        </header>
        <div>
          {Array.from({length:18},(_,index)=>{
            const id=`Q${String(index+1).padStart(2,'0')}`
            const node=hegelCroceNodeById(id)
            return (
              <button key={id} type="button" onClick={()=>selectById(id)}>
                <span>{id}</span>
                <strong>{node?.data.title.replace(/^Q\d+ · /,'')}</strong>
                <small>{node?.data.excerpt}</small>
              </button>
            )
          })}
        </div>
      </section>

      <section className="hegel-task-sources">
        <article>
          <span>FUENTE 01</span>
          <strong>Benedetto Croce</strong>
          <p>Capítulo I · La dialéctica o la síntesis de los contrarios.</p>
        </article>
        <article>
          <span>FUENTE 02</span>
          <strong>Cuestionario</strong>
          <p>18 preguntas del capítulo I; el capítulo II aparece en el documento, pero no se trata aquí como tarea de hoy.</p>
        </article>
        <article>
          <span>FUENTE 03</span>
          <strong>G. W. F. Hegel</strong>
          <p>Ciencia de la Lógica · Libro I · Ser puro · Nada pura · Devenir.</p>
        </article>
        <article>
          <span>FUENTE 04</span>
          <strong>Dieter Henrich</strong>
          <p>Hegel en su contexto · consulta general · índice como mínimo.</p>
        </article>
      </section>

      <footer className="marx-study-footer">
        <Link to="/tareas">← Volver a tareas</Link>
        <span>Sein · Nichts · Werden · Aufhebung</span>
        <Link to="/semestre/5/ontologia-ii">Ontología II ↗</Link>
      </footer>

      {folio && createPortal((
        <div
          className="marx-folio-overlay"
          role="presentation"
          onMouseDown={(event)=>{if(event.currentTarget===event.target)setFolioId(null)}}
        >
          <article className="marx-folio" role="dialog" aria-modal="true" aria-labelledby="hegel-croce-folio-title">
            <header>
              <div>
                <span>{folio.data.phase} · {folio.data.page}</span>
                <h2 id="hegel-croce-folio-title">{folio.data.title}</h2>
              </div>
              <button type="button" onClick={()=>setFolioId(null)} aria-label="Cerrar">×</button>
            </header>

            <div className="marx-folio-grid">
              <section className="marx-folio-source">
                <span>{folio.data.sourceMode}</span>
                <blockquote>{folio.data.excerpt}</blockquote>
                <small>{folio.data.sourceShort} · {folio.data.page}</small>
              </section>
              <section>
                <span>EXPLICACIÓN</span>
                <p>{folio.data.explanation}</p>
                <span>FUNCIÓN</span>
                <p>{folio.data.role}</p>
                <span>CONCEPTOS</span>
                <div className="marx-inspector-concepts">
                  {folio.data.concepts.map((concept)=><b key={concept}>{concept}</b>)}
                </div>
              </section>

              <section className="marx-folio-schema-panel">
                <span>ESQUEMA DEL NODO</span>
                <AnimatedConceptSchema
                  key={`hegel-croce-schema-${folio.id}`}
                  schema={folio.data.schema}
                />
              </section>
            </div>

            <div className="hegel-task-folio-links">
              {folio.data.dependsOn.map((id)=>{
                const node=hegelCroceNodeById(id)
                return node ? <button key={'d-'+id} type="button" onClick={()=>{setFolioId(null);selectById(id)}}>← {node.data.code} · {node.data.title}</button> : null
              })}
              {folio.data.produces.map((id)=>{
                const node=hegelCroceNodeById(id)
                return node ? <button key={'p-'+id} type="button" onClick={()=>{setFolioId(null);selectById(id)}}>{node.data.code} · {node.data.title} →</button> : null
              })}
            </div>
          </article>
        </div>
      ),overlayHost)}

      {relation && createPortal((
        <div
          className="marx-folio-overlay"
          role="presentation"
          onMouseDown={(event)=>{if(event.currentTarget===event.target)setRelationId(null)}}
        >
          <article className="marx-folio hegel-task-relation" role="dialog" aria-modal="true">
            <header>
              <div><span>RELACIÓN II · {relation.id}</span><h2>{relation.title}</h2></div>
              <button type="button" onClick={()=>setRelationId(null)} aria-label="Cerrar">×</button>
            </header>
            <p>{relation.synthesis}</p>
            <div className="hegel-task-relation-pair">
              <button type="button" onClick={()=>{setRelationId(null);selectById(relation.source)}}>
                {hegelCroceNodeById(relation.source)?.data.code} · {hegelCroceNodeById(relation.source)?.data.title}
              </button>
              <span>↔</span>
              <button type="button" onClick={()=>{setRelationId(null);selectById(relation.target)}}>
                {hegelCroceNodeById(relation.target)?.data.code} · {hegelCroceNodeById(relation.target)?.data.title}
              </button>
            </div>
          </article>
        </div>
      ),overlayHost)}
    </main>
  )
}

export default function HegelCroceTaskSystem() {
  return <ReactFlowProvider><HegelCroceTaskCanvas /></ReactFlowProvider>
}
