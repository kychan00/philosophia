import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './AnaliticaClase7Septiembre.css'
import './AnalyticClass09Sep.css'
import './AnalyticClass14Sep.css'
import './AnalyticClass21Sep.css'
import './AnalyticClass23Sep.css'
import './AnalyticClass28Sep.css'

const sections = [
  ['00','mapa','Mapa de la sesión'],
  ['01','funcion','¿Qué función tiene el lenguaje?'],
  ['02','primer-russell','Primer Russell: referente y ontología abundante'],
  ['03','giro','El robusto sentido de la realidad'],
  ['04','descripciones','Teoría de las descripciones · 1905'],
  ['05','francia','El rey de Francia es calvo'],
  ['06','formas','Forma gramatical ≠ forma lógica'],
  ['07','proposicion','Proposición y oración'],
  ['08','parafrasis','Análisis como paráfrasis'],
  ['09','bivalencia','Bivalencia y condiciones de verdad'],
  ['10','nombres','Nombres y descripción'],
  ['11','cierre','Cierre del fragmento'],
]

const russellStages = [
  {
    id:'early',
    label:'PRIMER RUSSELL',
    title:'referencia abundante',
    body:'Si una expresión significativa parece referirse a algo, el joven Russell acepta una ontología muy amplia: relaciones, clases, universales, entidades lógicas y también referentes no empíricos.',
    formula:'expresión significativa → referente',
  },
  {
    id:'descriptions',
    label:'RUSSELL · 1905',
    title:'análisis reductivo',
    body:'La teoría de las descripciones permite eliminar compromisos ontológicos aparentes mostrando que una descripción definida no funciona lógicamente como un nombre propio.',
    formula:'descripción → análisis lógico → cuantificación',
  },
]

const franceViews = [
  {
    id:'surface',
    label:'GRAMÁTICA',
    title:'sujeto + predicado',
    body:'“El actual rey de Francia” parece ocupar el lugar de un nombre y “es calvo” parece atribuirle una propiedad.',
  },
  {
    id:'logic',
    label:'FORMA LÓGICA',
    title:'existencia + unicidad + predicación',
    body:'El análisis revela tres compromisos: existe un rey de Francia, existe sólo uno, y ese individuo es calvo.',
  },
]

const goTo=(id)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'})

function Heading({n,eyebrow,children}) {
  return (
    <div className="ac9-heading ac14-heading ac21-heading ac23-heading ac28-heading">
      <span>{n}</span>
      <div><p>{eyebrow}</p><h2>{children}</h2></div>
    </div>
  )
}

export default function AnalyticClass28Sep() {
  const [stageId,setStageId]=useState('early')
  const [franceId,setFranceId]=useState('surface')

  const stage=useMemo(
    ()=>russellStages.find(item=>item.id===stageId)||russellStages[0],
    [stageId],
  )

  const france=useMemo(
    ()=>franceViews.find(item=>item.id===franceId)||franceViews[0],
    [franceId],
  )

  return (
    <main className="ac7-page ac9-page ac14-page ac21-page ac23-page ac28-page">
      <nav className="ac9-topbar">
        <Link to="/semestre/5/filosofia-analitica">← Filosofía Analítica</Link>
        <Link to="/" className="ac9-brand">Φ · Philosophia</Link>
        <span>XXVIII · IX · MMXXVI</span>
      </nav>

      <header className="ac9-hero ac14-hero ac21-hero ac23-hero ac28-hero">
        <div className="ac9-grid" aria-hidden="true" />
        <div className="ac9-ghost ac14-ghost ac21-ghost ac23-ghost ac28-ghost" aria-hidden="true">
          ∃!
        </div>

        <div className="ac9-hero-inner">
          <div>
            <p className="ac9-kicker">
              FI264 · Duodécima clase · 28 de septiembre de 2026
            </p>

            <h1>
              Russell:
              <em>descripciones, referente y forma lógica</em>
            </h1>

            <p className="ac9-lead">
              La sesión continúa el Russell de Hacker: de la teoría referencial
              ontológicamente abundante a la teoría de las descripciones de 1905.
              El giro decisivo consiste en separar la apariencia gramatical de una
              oración de la estructura lógica de la proposición expresada.
            </p>

            <div className="ac9-question ac21-question ac23-question ac28-question">
              <span>PREGUNTA RECTORA</span>
              <strong>
                ¿Cómo puede una oración aparentemente referirse a una entidad inexistente
                sin obligarnos a poblar la realidad con aquello que su gramática parece nombrar?
              </strong>
            </div>
          </div>

          <aside className="ac9-hero-schema ac14-hero-schema ac21-hero-schema ac23-hero-schema ac28-hero-schema">
            <span>RUTA DE LA SESIÓN</span>
            <div>
              <small>PRIMER RUSSELL</small>
              <strong>referente abundante</strong>
              <p>La expresión parece exigir una entidad.</p>
            </div>
            <b>↓</b>
            <div className="active">
              <small>1905</small>
              <strong>teoría de las descripciones</strong>
              <p>La gramática puede ocultar la lógica.</p>
            </div>
            <b>↓</b>
            <div>
              <small>ANÁLISIS</small>
              <strong>paráfrasis lógica</strong>
              <p>Existencia · unicidad · predicación.</p>
            </div>
          </aside>
        </div>
      </header>

      <div className="ac9-layout ac21-layout ac23-layout ac28-layout">
        <aside className="ac9-index ac21-index ac23-index ac28-index">
          <p>Index analyticorum</p>
          {sections.map(([n,id,label])=>(
            <button type="button" key={id} onClick={()=>goTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="ac9-article ac21-article ac23-article ac28-article">
          <section id="mapa">
            <Heading n="00" eyebrow="Tabula argumenti">
              De la ontología abundante a la forma lógica
            </Heading>

            <div className="ac28-flow">
              <span>referencia</span><b>→</b>
              <span>ontología abundante</span><b>→</b>
              <strong>teoría de las descripciones</strong><b>→</b>
              <span>forma lógica</span><b>→</b>
              <span>paráfrasis</span><b>→</b>
              <span>menos compromisos ontológicos</span>
            </div>

            <div className="ac23-summary-grid ac28-summary-grid">
              <article>
                <span>LECTURA</span>
                <strong>Hacker · pp. 113–116 aprox.</strong>
                <p>
                  Continúa el apartado sobre Russell y el cambio introducido por
                  la teoría de las descripciones.
                </p>
              </article>
              <article>
                <span>NÚCLEO</span>
                <strong>gramática ≠ lógica</strong>
                <p>
                  La estructura superficial de una oración puede ocultar aquello
                  que el análisis lógico realmente afirma.
                </p>
              </article>
              <article>
                <span>CASO GUÍA</span>
                <strong>el rey de Francia</strong>
                <p>
                  Una descripción definida parece nombre propio, pero su análisis
                  revela cuantificación, identidad y predicación.
                </p>
              </article>
            </div>
          </section>

          <section id="funcion">
            <Heading n="01" eyebrow="Lingua · descriptio">
              Describir la realidad frente a comunicar
            </Heading>

            <p className="ac9-prose">
              La clase retoma una concepción temprana en la que el lenguaje se
              entiende principalmente por su función descriptiva: una expresión
              significativa se relaciona con aquello de lo que habla. Desde esa
              perspectiva, el problema del referente adquiere un peso enorme.
            </p>

            <div className="ac28-function">
              <article className="active">
                <span>FUNCIÓN DESCRIPTIVA</span>
                <strong>lenguaje → mundo</strong>
                <p>La pregunta decisiva es qué realidad corresponde a la expresión.</p>
              </article>
              <b>VS.</b>
              <article>
                <span>FUNCIÓN COMUNICATIVA</span>
                <strong>hablante ↔ hablante</strong>
                <p>
                  La descripción del mundo puede entenderse como una función dentro
                  de una práctica comunicativa más amplia.
                </p>
              </article>
            </div>

            <aside className="ac9-note ac21-note ac23-note ac28-note">
              <span>CONTEXTO DE LA EXPLICACIÓN</span>
              <strong>
                Mientras se privilegia la descripción, la exigencia de referente
                parece natural; cuando se amplía la función del lenguaje, esa exigencia
                deja de ser automática.
              </strong>
            </aside>
          </section>

          <section id="primer-russell">
            <Heading n="02" eyebrow="Russell I">
              Una teoría referencial ontológicamente generosa
            </Heading>

            <div className="ac14-switcher ac21-switcher ac23-switcher ac28-switcher">
              {russellStages.map(item=>(
                <button
                  type="button"
                  key={item.id}
                  className={stageId===item.id?'active':''}
                  onClick={()=>setStageId(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="ac28-stage">
              <span>{stage.label}</span>
              <h3>{stage.title}</h3>
              <p>{stage.body}</p>
              <code>{stage.formula}</code>
            </div>

            <p className="ac9-prose">
              En la fase temprana estudiada, Russell no restringe la realidad a lo
              empírico inmediato. La lectura deja entrar relaciones, universales,
              clases y también correlatos de expresiones como la montaña de oro,
              los dioses homéricos o las quimeras.
            </p>
          </section>

          <section id="giro">
            <Heading n="03" eyebrow="Robustus sensus realitatis">
              El “robusto sentido de la realidad”
            </Heading>

            <p className="ac9-prose">
              Hacker describe un cambio rápido en Russell: la ontología que había
              crecido junto con la teoría referencial comienza a ser reducida. La
              teoría de las descripciones de 1905 permite explicar expresiones
              aparentemente referenciales sin admitir una entidad correspondiente
              para cada una.
            </p>

            <div className="ac28-before-after">
              <article>
                <span>ANTES</span>
                <strong>expresión → entidad</strong>
                <p>La gramática parece fijar el compromiso ontológico.</p>
              </article>
              <b>→</b>
              <article className="active">
                <span>DESPUÉS</span>
                <strong>expresión → análisis</strong>
                <p>La estructura lógica decide qué compromisos sobreviven.</p>
              </article>
            </div>
          </section>

          <section id="descripciones">
            <Heading n="04" eyebrow="Theory of descriptions · 1905">
              Una descripción definida no es un nombre propio
            </Heading>

            <p className="ac9-prose">
              La teoría de las descripciones cambia la concepción del análisis.
              Una frase que gramaticalmente parece nombrar un objeto puede ser
              eliminada mediante una reconstrucción lógica de la proposición completa.
            </p>

            <div className="ac28-description">
              <span>DESCRIPCIÓN DEFINIDA</span>
              <strong>“el actual rey de Francia”</strong>
              <b>↓ análisis</b>
              <div>
                <em>1</em><p>existe algo que es rey de Francia</p>
                <em>2</em><p>existe exactamente uno</p>
                <em>3</em><p>ese individuo es calvo</p>
              </div>
            </div>

            <aside className="ac23-paradox ac28-paradox">
              <span>RESULTADO</span>
              <strong>No hace falta un objeto misterioso llamado “el actual rey de Francia”.</strong>
              <p>
                La aparente referencia desaparece cuando se explicita la estructura
                cuantificacional de la proposición.
              </p>
            </aside>
          </section>

          <section id="francia">
            <Heading n="05" eyebrow="Rex Franciae">
              “El rey de Francia es calvo”
            </Heading>

            <div className="ac14-switcher ac21-switcher ac23-switcher ac28-switcher">
              {franceViews.map(item=>(
                <button
                  type="button"
                  key={item.id}
                  className={franceId===item.id?'active':''}
                  onClick={()=>setFranceId(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="ac28-france">
              <span>{france.label}</span>
              <h3>{france.title}</h3>
              <p>{france.body}</p>
            </div>

            <div className="ac28-logic-strip">
              <span>∃x</span>
              <b>+</b>
              <span>unicidad</span>
              <b>+</b>
              <span>calvicie</span>
              <b>→</b>
              <strong>forma lógica explícita</strong>
            </div>
          </section>

          <section id="formas">
            <Heading n="06" eyebrow="Grammatica ≠ logica">
              La superficie lingüística puede engañar
            </Heading>

            <div className="ac28-forms">
              <article>
                <span>FORMA GRAMATICAL</span>
                <strong>sujeto + predicado</strong>
                <p>
                  Hace parecer que “el rey de Francia” funciona como un nombre que
                  designa una entidad.
                </p>
              </article>
              <b>≠</b>
              <article className="active">
                <span>FORMA LÓGICA</span>
                <strong>cuantificación + identidad + predicación</strong>
                <p>
                  El análisis revela una estructura distinta de la que sugiere la
                  oración superficial.
                </p>
              </article>
            </div>

            <aside className="ac9-thesis ac21-thesis ac23-thesis ac28-thesis">
              <span>CONSECUENCIA FILOSÓFICA</span>
              <strong>
                Analizar ya no significa solamente descomponer entidades: significa
                también reformular una oración para exhibir su estructura lógica.
              </strong>
            </aside>
          </section>

          <section id="proposicion">
            <Heading n="07" eyebrow="Propositio · oratio">
              La proposición no se identifica con la oración
            </Heading>

            <p className="ac9-prose">
              La sesión distingue la expresión lingüística de aquello que porta
              verdad o falsedad. En esta etapa, Russell y Moore conciben las
              proposiciones como objetos no lingüísticos y mentalmente independientes,
              mientras las oraciones son los vehículos con los que las expresamos.
            </p>

            <div className="ac28-proposition">
              <article>
                <span>ORACIÓN</span>
                <strong>expresión lingüística</strong>
                <p>Palabras, gramática y forma superficial.</p>
              </article>
              <b>→ expresa →</b>
              <article className="active">
                <span>PROPOSICIÓN</span>
                <strong>portadora de verdad o falsedad</strong>
                <p>Estructura que el análisis intenta hacer visible.</p>
              </article>
            </div>

            <p className="ac9-prose">
              Esto explica por qué puede existir una brecha entre cómo está escrita
              una oración y la forma lógica de la proposición que expresa.
            </p>
          </section>

          <section id="parafrasis">
            <Heading n="08" eyebrow="Paraphrasis">
              Del análisis de cosas al análisis de formulaciones
            </Heading>

            <p className="ac9-prose">
              La teoría de las descripciones abre la posibilidad de tratar el análisis
              como una operación de paráfrasis: una formulación superficial se reemplaza
              por otra que hace explícitos sus compromisos lógicos.
            </p>

            <div className="ac28-paraphrase">
              <span>ORACIÓN ORDINARIA</span>
              <b>→</b>
              <span>PARÁFRASIS</span>
              <b>→</b>
              <span>FORMA LÓGICA</span>
              <b>→</b>
              <strong>COMPROMISO ONTOLÓGICO MÁS PRECISO</strong>
            </div>

            <aside className="ac9-note ac21-note ac23-note ac28-note">
              <span>TRANSICIÓN</span>
              <strong>
                Aquí el análisis comienza a acercarse al lenguaje, aunque Russell
                todavía busca mediante él la estructura objetiva de la realidad.
              </strong>
            </aside>
          </section>

          <section id="bivalencia">
            <Heading n="09" eyebrow="Verum · falsum">
              El problema de verdad y falsedad
            </Heading>

            <p className="ac9-prose">
              El ejemplo del rey de Francia aparece precisamente porque una lectura
              puramente gramatical parece empujar a una dificultad: si no existe tal
              rey, ¿qué valor de verdad tiene la oración? Russell evita introducir un
              tercer valor reconstruyendo la proposición como una estructura compleja.
            </p>

            <div className="ac28-truth">
              <article><span>EXISTENCIA</span><strong>¿hay un rey de Francia?</strong></article>
              <article><span>UNICIDAD</span><strong>¿hay exactamente uno?</strong></article>
              <article><span>PREDICACIÓN</span><strong>¿ese individuo es calvo?</strong></article>
            </div>

            <p className="ac9-prose">
              Si falla el componente existencial, la reconstrucción completa no obliga
              a admitir un referente inexistente para conservar la evaluación lógica.
            </p>
          </section>

          <section id="nombres">
            <Heading n="10" eyebrow="Nomina · descriptiones">
              Nombre ordinario y descripción
            </Heading>

            <p className="ac9-prose">
              La exposición de clase radicaliza la idea russelliana: muchos nombres
              ordinarios funcionan, al ser analizados, como abreviaturas o descripciones
              culturalmente estabilizadas. Lo que parece un nombre transparente puede
              esconder información descriptiva.
            </p>

            <div className="ac28-names">
              <article>
                <span>LENGUAJE ORDINARIO</span>
                <strong>“silla”, “Luna”, nombres de personas</strong>
                <p>Etiquetas aprendidas dentro de prácticas culturales y lingüísticas.</p>
              </article>
              <b>→ análisis →</b>
              <article className="active">
                <span>CONTENIDO DESCRIPTIVO</span>
                <strong>rasgos, localización, propiedades</strong>
                <p>Lo que puede explicitarse cuando se deshace la etiqueta.</p>
              </article>
            </div>

            <aside className="ac23-paradox ac28-paradox">
              <span>IDEA DE CLASE</span>
              <strong>El lenguaje puede ocultar la estructura de aquello que pensamos y observamos.</strong>
              <p>
                De ahí el interés por reconstruir expresiones en una notación lógica
                más controlada.
              </p>
            </aside>
          </section>

          <section id="cierre">
            <Heading n="11" eyebrow="Continuatio">
              Punto de corte del material entregado
            </Heading>

            <div className="ac21-ending ac23-ending ac28-ending">
              <span>CIERRE DOCUMENTAL</span>
              <strong>Russell · teoría de las descripciones · forma lógica</strong>
              <p>
                El fragmento proporcionado termina mientras la discusión todavía continúa.
                Por eso no se añade una tarea ni un cierre que no estén documentados.
              </p>
            </div>

            <div className="ac21-actions">
              <Link to="/semestre/5/filosofia-analitica/reporte/hacker">
                Abrir sistema total de Hacker →
              </Link>
              <Link to="/semestre/5/filosofia-analitica">
                Volver a Filosofía Analítica
              </Link>
            </div>

            <div className="ac21-no-task">
              <span>TAREA</span>
              <strong>No aparece una tarea explícita en el fragmento entregado.</strong>
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
