import { useState } from 'react'
import { Link } from 'react-router'
import AnimatedConceptSchema from '../components/philosophy/schema/AnimatedConceptSchema'
import '../components/OntologyArchiveClass.css'
import './OntologiaClass17AugArchive.css'
import './HegelPhenomenologyPrefaceStudy.css'

const movements = [
  {
    n: 'I',
    title: 'Del resultado al sistema',
    short: 'La verdad filosófica no es el resultado aislado, sino el resultado unido al devenir que lo produjo.',
    route: 'resultado aislado → devenir → verdad concreta → sistema científico',
  },
  {
    n: 'II',
    title: 'De la intuición al concepto',
    short: 'Sentimiento, entusiasmo e intuición inmediata no sustituyen la determinación y necesidad del concepto.',
    route: 'necesidad espiritual → inmediatez → crítica → labor conceptual',
  },
  {
    n: 'III',
    title: 'De la unidad vacía al desarrollo',
    short: 'La unidad verdadera debe producir y recoger sus propias diferencias en lugar de imponerles un esquema exterior.',
    route: 'principio abstracto → diferencia → despliegue → totalidad concreta',
  },
  {
    n: 'IV',
    title: 'De sustancia a sujeto',
    short: 'Lo verdadero no es sólo fundamento inmóvil: es negatividad, mediación, automovimiento y retorno a sí.',
    route: 'sustancia → negatividad → mediación → sujeto → espíritu',
  },
  {
    n: 'V',
    title: 'De conciencia natural a ciencia',
    short: 'La Fenomenología expone el devenir necesario por el cual la conciencia llega al elemento de la ciencia.',
    route: 'saber inmediato → experiencia → transformación → ciencia',
  },
  {
    n: 'VI',
    title: 'Formación histórica del individuo',
    short: 'El individuo se forma reapropiando el trabajo histórico del espíritu; no comienza desde cero.',
    route: 'patrimonio histórico → apropiación → Bildung → saber',
  },
  {
    n: 'VII',
    title: 'De verdadero/falso fijos a experiencia',
    short: 'La desigualdad entre saber y objeto mueve la experiencia; lo falso puede devenir momento de una verdad nueva.',
    route: 'desigualdad → negación → transformación → nueva figura',
  },
  {
    n: 'VIII',
    title: 'Del modelo matemático al concepto',
    short: 'La filosofía exige que la forma y necesidad del contenido nazcan del contenido mismo.',
    route: 'demostración exterior → crítica → desarrollo inmanente → concepto',
  },
  {
    n: 'IX',
    title: 'Del razonamiento a lo especulativo',
    short: 'La proposición especulativa rompe el esquema de sujeto fijo y predicado externo.',
    route: 'sujeto fijo → predicado esencial → retorno sobre la relación → dialéctica',
  },
  {
    n: 'X',
    title: 'Del genio a la labor del concepto',
    short: 'Ni sentimiento, sentido común ni genialidad sustituyen la formación filosófica y el trabajo conceptual.',
    route: 'inmediatez privada → disciplina → concepto → saber comunicable',
  },
  {
    n: 'XI',
    title: 'Del autor al espíritu de la época',
    short: 'La obra filosófica pertenece a un proceso histórico más amplio que la individualidad de su autor.',
    route: 'individuo → recepción → tiempo histórico → universalidad',
  },
]

const glossary = [
  ['Absoluto', 'Proceso y resultado que retorna a sí mediante mediación; no unidad inmóvil.'],
  ['Automovimiento', 'El contenido produce su diferencia, la atraviesa y retorna a sí sin recibir desde fuera la regla de su desarrollo.'],
  ['Bildung', 'Formación mediante la apropiación y transformación del patrimonio histórico del espíritu.'],
  ['Concepto', 'Movimiento y estructura inmanente; no una definición estática.'],
  ['Experiencia', 'Transformación conjunta de saber y objeto cuando su desigualdad se hace patente.'],
  ['Mediación', 'Paso por la diferencia y retorno a sí; no un obstáculo exterior al absoluto.'],
  ['Negatividad', 'Potencia de diferencia, separación, contradicción y transformación.'],
  ['Sujeto', 'Negatividad, automovimiento, mediación y retorno a sí en el ser otro.'],
  ['Aufheben', 'Superar una figura conservándola como momento del proceso, no simplemente eliminarla.'],
  ['Verdad', 'Proceso, totalidad desarrollada y sistema; no proposición separada de su génesis.'],
]

const atlasSchema = {
  layout: 'flow',
  direction: 'vertical',
  flowGap: 52,
  minHeight: 1080,
  fitPadding: 58,
  sizeHint: 'tall',
  nodes: [
    { id: 'result', label: 'resultado', caption: 'aislado = insuficiente', shapeRole: 'concept', emphasis: true, tone: 'accent' },
    { id: 'system', label: 'verdad como sistema', caption: 'resultado + devenir', shapeRole: 'structure' },
    { id: 'substance', label: 'sustancia', caption: 'fundamento', shapeRole: 'concept' },
    { id: 'negative', label: 'negatividad', caption: 'diferencia · ser otro', shapeRole: 'mediation' },
    { id: 'subject', label: 'sujeto', caption: 'automovimiento · retorno a sí', shapeRole: 'concept' },
    { id: 'experience', label: 'experiencia', caption: 'transformación de saber y objeto', shapeRole: 'structure' },
    { id: 'formation', label: 'formación', caption: 'Bildung · apropiación histórica', shapeRole: 'mediation' },
    { id: 'speculative', label: 'pensamiento especulativo', caption: 'proposición · dialéctica', shapeRole: 'concept' },
    { id: 'science', label: 'ciencia', caption: 'labor del concepto', shapeRole: 'result', tone: 'accent' },
  ],
  edges: [
    { from: 'result', to: 'system', label: 'debe reincorporar', relationKind: 'derives' },
    { from: 'system', to: 'substance', label: 'reformula la', relationKind: 'derives' },
    { from: 'substance', to: 'negative', label: 'se mueve por', relationKind: 'derives' },
    { from: 'negative', to: 'subject', label: 'hace posible', relationKind: 'derives' },
    { from: 'subject', to: 'experience', label: 'se despliega como', relationKind: 'derives' },
    { from: 'experience', to: 'formation', label: 'requiere', relationKind: 'derives' },
    { from: 'formation', to: 'speculative', label: 'culmina metodológicamente en', relationKind: 'derives' },
    { from: 'speculative', to: 'science', label: 'adquiere forma de', relationKind: 'derives' },
  ],
  animation: { mode: 'sequence', nodeDuration: .27, edgeDuration: .29 },
}

export default function HegelPhenomenologyPrefaceStudy() {
  const [active, setActive] = useState(3)
  const current = movements[active]
  const cover = `${import.meta.env.BASE_URL}images/ontologia/open/hegel/fenomenologia-1807.jpg`

  return (
    <main className="oa-page oaf-page hegel-preface-page">
      <div className="oa-backdrop" aria-hidden="true" />

      <div className="oa-brochure oaf-brochure hegel-preface-brochure">
        <nav className="oa-nav">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <Link to="/" className="oa-brand">Φ · Philosophia</Link>
          <span>HEGEL · UMBRAL IV</span>
        </nav>

        <header className="oa-cover oaf-cover">
          <div className="oa-cover-copy">
            <span className="oa-kicker">Archivum ontologicum · studium II · phaenomenologia spiritus</span>

            <h1>
              Hegel
              <em>Prólogo de la Fenomenología del espíritu</em>
            </h1>

            <p className="oa-subtitle">
              veritas · substantia · subiectum · negativitas · mediatio
            </p>

            <p className="oaf-lead">
              Dossier programático construido a partir del Prólogo ya documentado
              en el vault. No registra una clase nueva: prepara el siguiente umbral
              del curso mediante la arquitectura conceptual del texto.
            </p>

            <div className="oa-question">
              <small>QUAESTIO</small>
              <strong>
                ¿Qué tendría que ser la filosofía para que su verdad dependa del
                desarrollo necesario de la cosa misma y no de resultados,
                intuiciones o principios impuestos desde fuera?
              </strong>
            </div>

            <div className="hegel-meta">
              <div><span>Obra</span><strong>Fenomenología del espíritu</strong></div>
              <div><span>Edición de trabajo</span><strong>Prólogo · PDF pp. 13–54</strong></div>
              <div><span>Estado</span><strong>documentado por fases</strong></div>
            </div>
          </div>

          <figure className="oa-cover-object">
            <div className="oa-cover-frame">
              <span className="oa-tape oa-tape-a" aria-hidden="true" />
              <span className="oa-tape oa-tape-b" aria-hidden="true" />
              <img src={cover} alt="Portada de la Fenomenología del espíritu de Hegel, edición de 1807" />
            </div>
            <figcaption>
              <span>IMAGO XXIV · PHÄNOMENOLOGIE DES GEISTES</span>
              <strong>Portada de la primera edición</strong>
              <small>Bamberg / Würzburg · 1807.</small>
              <small className="oa-image-rights">Dominio público</small>
              <a
                className="oa-image-source"
                href="https://commons.wikimedia.org/wiki/File:Ph%C3%A4nomenologie_des_Geistes.jpg"
                target="_blank"
                rel="noreferrer"
              >
                fuente de imagen ↗
              </a>
            </figcaption>
          </figure>
        </header>

        <section className="hegel-documentary">
          <div>
            <small>DOCUMENTUM</small>
            <h2>Qué es —y qué no es— esta pieza</h2>
          </div>
          <div>
            <p>
              El programa de Ontología II sitúa a Hegel después del problema
              poskantiano de la cosa en sí, con el trayecto <strong>ser puro · nada pura · devenir</strong>.
              Sin embargo, esos contenidos todavía no están registrados como una clase impartida.
            </p>
            <p>
              Este dossier usa material real ya trabajado del <strong>Prólogo de la Fenomenología</strong>.
              Su función es preparar el umbral hegeliano sin atribuir al profesor una sesión que no existe en el archivo.
            </p>
          </div>
        </section>

        <section className="oaf-prologue">
          <div className="oaf-prologue-copy">
            <small>INTRODUCTIO</small>
            <h2>La tesis metodológica del Prólogo</h2>
            <div className="oaf-questions">
              <p>La verdad no es un resultado aislado.</p>
              <p>La sustancia debe comprenderse también como sujeto.</p>
              <p>El método es el automovimiento del contenido.</p>
            </div>
            <p>
              La filosofía no puede reducirse a una colección de tesis verdaderas.
              Su verdad exige conexión, necesidad, desarrollo y totalidad.
            </p>
          </div>

          <div className="oaf-armarium">
            <small>ARMARIUM VERBORUM</small>
            <h2>Núcleo conceptual</h2>
            <div>
              <article><span>Latín</span><strong>substantia</strong><p>Fundamento que resulta insuficiente si se piensa como identidad inmóvil.</p></article>
              <article><span>Latín</span><strong>subiectum</strong><p>Automovimiento, negatividad, mediación y retorno a sí.</p></article>
              <article><span>Latín</span><strong>negativitas</strong><p>Potencia interna de diferencia y transformación.</p></article>
              <article><span>Latín</span><strong>mediatio</strong><p>Movimiento por el que la identidad atraviesa la diferencia y retorna a sí.</p></article>
            </div>
          </div>
        </section>

        <section className="oa-wine oaf-atlas hegel-atlas">
          <div className="oa-wine-title"><span>SCHEMA · ATLAS</span><h2>atlas</h2></div>
          <p>
            El esquema no sustituye los once movimientos del Prólogo: muestra
            la arquitectura que los atraviesa.
          </p>
          <div className="oa-schema-card"><AnimatedConceptSchema schema={atlasSchema} /></div>
        </section>

        <section className="hegel-movements">
          <header>
            <small>COLLECTIO · XI MOTUS</small>
            <h2>Once movimientos argumentales</h2>
            <p>
              La división organiza el Prólogo ya documentado; no pretende convertir
              el texto en una fórmula mecánica de “tesis / antítesis / síntesis”.
            </p>
          </header>

          <div className="hegel-movement-layout">
            <div className="hegel-movement-tabs">
              {movements.map((item, index) => (
                <button
                  key={item.n}
                  type="button"
                  className={index === active ? 'active' : ''}
                  onClick={() => setActive(index)}
                >
                  <span>{item.n}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>

            <article className="hegel-movement-card">
              <span>MOTUS {current.n}</span>
              <h3>{current.title}</h3>
              <p>{current.short}</p>
              <div>{current.route}</div>
            </article>
          </div>
        </section>

        <section className="hegel-subject">
          <div className="hegel-subject-title">
            <small>AXIS CENTRALIS</small>
            <h2>Sustancia → sujeto</h2>
          </div>

          <div className="hegel-subject-chain">
            <article><span>01</span><strong>sustancia</strong><p>base · universal · ser en sí</p></article>
            <b>→</b>
            <article><span>02</span><strong>negatividad</strong><p>diferencia · separación · ser otro</p></article>
            <b>→</b>
            <article><span>03</span><strong>mediación</strong><p>atravesar la diferencia</p></article>
            <b>→</b>
            <article><span>04</span><strong>retorno</strong><p>igualdad consigo en el ser otro</p></article>
            <b>→</b>
            <article className="active"><span>05</span><strong>sujeto</strong><p>automovimiento · espíritu</p></article>
          </div>

          <blockquote>
            “Lo verdadero es el todo” no significa suma estática: el todo es la
            esencia que se completa mediante su desarrollo.
          </blockquote>
        </section>

        <section className="hegel-glossary">
          <header>
            <small>ARMARIUM · PROVISIONALE</small>
            <h2>Glosario de trabajo</h2>
            <p>
              Las definiciones valen para el Prólogo y permanecen abiertas:
              no se congelan como significado definitivo para toda la obra.
            </p>
          </header>

          <div>
            {glossary.map(([term, definition]) => (
              <article key={term}>
                <span>{term}</span>
                <p>{definition}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="hegel-warning">
          <div>
            <small>REGULA LECTIONIS</small>
            <h2>Lo que el Prólogo prohíbe hacer al leer a Hegel</h2>
          </div>
          <ul>
            <li>reducir la obra a una lista de tesis;</li>
            <li>quedarse con el resultado final sin su devenir;</li>
            <li>aplicar mecánicamente “tesis / antítesis / síntesis”;</li>
            <li>separar conceptos del movimiento que los produce;</li>
            <li>tratar verdadero y falso como bloques inmóviles.</li>
          </ul>
        </section>

        <section className="hegel-next">
          <div>
            <small>UMBRAL DEL CURSO</small>
            <h2>Lo siguiente en Ontología II</h2>
            <p>
              El programa anuncia para Hegel: <strong>ser puro · nada pura · devenir</strong>.
              Eso pertenece a la <em>Ciencia de la lógica</em> y todavía no debe
              confundirse con el Prólogo aquí documentado.
            </p>
          </div>

          <Link to="/estudios/ontologia-ii/hegel-ciencia-logica-ser-nada-devenir">
            Continuar con ser · nada · devenir ↗
          </Link>
        </section>

        <footer className="oa-footer">
          <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
          <span>☙ substantia · subiectum · negativitas · conceptus ❧</span>
          <span>HEGEL · UMBRAL IV</span>
        </footer>
      </div>
    </main>
  )
}
