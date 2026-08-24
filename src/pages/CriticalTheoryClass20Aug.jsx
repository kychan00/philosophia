import { Link } from 'react-router'

const sections = [
  ['00','sentido','Qué significa “Teoría Crítica”'],
  ['01','distincion','Teoría tradicional / crítica'],
  ['02','genealogia','Genealogía intelectual'],
  ['03','hegel','Hegel'],
  ['04','marx','Marx'],
  ['05','lukacs','Lukács'],
  ['06','freud','Freud'],
  ['07','conceptos','La vida de los conceptos'],
  ['08','interdisciplina','Interdisciplinariedad'],
  ['09','fromm','Fromm y el Tercer Reich'],
  ['10','problema','Problema que emerge'],
]

const goToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Head({ n, eye, children }) {
  return <>
    <span className="ct-class-number">{n}</span>
    <p className="ct-class-eyebrow">{eye}</p>
    <h2>{children}</h2>
  </>
}

export default function CriticalTheoryClass20Aug() {
  return (
    <main className="ct-class-page ct20-page">
      <nav className="ct-class-nav">
        <Link to="/semestre/5/teoria-critica">← Teoría Crítica</Link>
        <Link to="/" className="ct-class-brand">Φ · Philosophia</Link>
        <span>XX · VIII · MMXXVI</span>
      </nav>

      <header className="ct-class-hero">
        <div className="ct-class-ghost" aria-hidden="true">KRITIK</div>
        <p>Teoría Crítica · Segunda clase · Fundamentos</p>
        <h1>Genealogía de <em>la crítica</em></h1>
        <p className="ct-class-lead">
          La sesión delimita qué significa “Teoría Crítica” y reconstruye la
          constelación que hace posible a Frankfurt: Hegel, Marx, Lukács y Freud,
          articulados en una investigación de sociedad, historia, cultura y subjetividad.
        </p>
        <div className="ct-class-axis">
          <span>Hegel</span><b>→</b><span>Marx</span><b>→</b><span>Lukács</span>
          <b>+</b><span>Freud</span><b>→</b><span>Frankfurt</span>
        </div>
      </header>

      <div className="ct-class-layout">
        <aside className="ct-class-index">
          <p>Index lectionis</p>
          {sections.map(([n,id,label]) => (
            <button key={id} type="button" onClick={() => goToSection(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="ct-class-article">
          <section id="sentido">
            <Head n="00" eye="Terminorum distinctio">No todo pensamiento crítico es Teoría Crítica</Head>
            <p>
              “Crítico” puede nombrar hoy corrientes muy distintas. La clase
              separa ese uso amplio de la tradición históricamente determinada
              que surge alrededor del Instituto para la Investigación Social.
            </p>
            <div className="ct20-two">
              <article><span>sentido genérico</span><strong>pensamiento “crítico”</strong>
                <p>Corrientes contemporáneas, pensamiento decolonial y otras críticas sociales o culturales.</p>
              </article>
              <b>≠</b>
              <article className="ct20-core"><span>sentido del curso</span><strong>Teoría Crítica</strong>
                <p>Escuela de Frankfurt y sus fundamentos filosóficos específicos.</p>
              </article>
            </div>
            <div className="ct-class-callout"><span>Regla</span><strong>
              Compartir una actitud crítica no equivale a compartir la genealogía,
              los problemas ni el método de Frankfurt.
            </strong></div>
          </section>

          <section id="distincion">
            <Head n="01" eye="Traditio contra critica">Dos maneras de concebir el conocimiento</Head>
            <p>
              La oposición no distingue sólo contenidos: cuestiona la relación
              entre quien conoce y la sociedad conocida.
            </p>
            <div className="ct20-theory">
              <article><span>TEORÍA TRADICIONAL</span>
                <div className="ct20-observer"><b>SUJETO</b><i>observa</i><b>OBJETO</b></div>
                <p>El investigador aparece como observador independiente.</p>
              </article>
              <article><span>TEORÍA CRÍTICA</span>
                <div className="ct20-society"><strong>SUJETO</strong><small>dentro de la SOCIEDAD</small></div>
                <p>El sujeto pertenece a la historia que intenta comprender.</p>
              </article>
            </div>
            <div className="ct-class-synthesis"><span>Problema</span><strong>
              El conocimiento social no puede fingir neutralidad absoluta respecto
              de las condiciones históricas que lo producen.
            </strong></div>
          </section>

          <section id="genealogia">
            <Head n="02" eye="Genealogia">La constelación que desemboca en Frankfurt</Head>
            <div className="ct20-chain">
              <div><span>01</span><strong>Hegel</strong><small>historicidad · dialéctica</small></div>
              <b>→</b>
              <div><span>02</span><strong>Marx</strong><small>sociedad · producción</small></div>
              <b>→</b>
              <div><span>03</span><strong>Lukács</strong><small>cosificación · totalidad</small></div>
            </div>
            <div className="ct20-merge">
              <div><span>MARX</span><strong>estructura social</strong></div>
              <b>+</b>
              <div><span>FREUD</span><strong>estructura psíquica</strong></div>
              <b>→</b>
              <div className="ct20-core"><span>INSTITUTO</span><strong>Escuela de Frankfurt</strong></div>
            </div>
          </section>

          <section id="hegel">
            <Head n="03" eye="Dialectica">Hegel: pensar históricamente</Head>
            <p>
              No puede comprenderse la Teoría Crítica sin pensamiento hegeliano:
              historicidad, dialéctica, contradicción, mediación, totalidad y
              transformación histórica.
            </p>
            <div className="ct20-orbit">
              {['historicidad','dialéctica','contradicción','mediación','totalidad','transformación']
                .map(x => <span key={x}>{x}</span>)}
              <strong>HEGEL</strong>
            </div>
            <aside className="ct-class-note"><strong>Lectura del programa</strong><p>
              El texto indicado oficialmente es el “Prólogo” de <em>Fenomenología del espíritu</em>, FCE.
            </p></aside>
          </section>

          <section id="marx">
            <Head n="04" eye="Critica societatis">Marx: condiciones sociales del pensamiento</Head>
            <div className="ct20-flow">
              <div><span>CONDICIONES MATERIALES</span><strong>producción · economía · clase</strong></div><b>→</b>
              <div><span>RELACIONES SOCIALES</span><strong>instituciones · dominación</strong></div><b>→</b>
              <div><span>CONCIENCIA</span><strong>ideas · categorías · representaciones</strong></div>
            </div>
            <div className="ct-class-callout"><span>Pregunta</span><strong>
              ¿Qué relaciones sociales hacen posible una determinada forma de pensar?
            </strong></div>
          </section>

          <section id="lukacs">
            <Head n="05" eye="Reificatio">Lukács: cuando las relaciones parecen cosas</Head>
            <div className="ct20-reify">
              <div><strong>RELACIÓN HUMANA</strong><small>histórica · social · producida</small></div>
              <b>→</b>
              <div className="ct20-core"><span>apariencia</span><strong>COSA</strong><small>natural · fija · independiente</small></div>
            </div>
          </section>

          <section id="freud">
            <Head n="06" eye="Psyche et societas">Freud: la dominación entra en el sujeto</Head>
            <p>
              Freud permite estudiar deseo, pulsión, represión, autoridad y
              obediencia. Frankfurt puede entonces preguntar por qué una persona
              llega a defender estructuras que la perjudican.
            </p>
            <div className="ct20-merge">
              <div><span>MARX</span><strong>economía · clase · instituciones</strong></div>
              <b>+</b>
              <div><span>FREUD</span><strong>deseo · represión · autoridad</strong></div>
              <b>→</b>
              <div className="ct20-core"><span>FRANKFURT</span><strong>dominación interiorizada</strong></div>
            </div>
          </section>

          <section id="conceptos">
            <Head n="07" eye="Vita conceptuum">Los conceptos tienen vida</Head>
            <p>
              Filosofar es trabajar con conceptos, pero los conceptos tienen
              historia: nacen en problemas, entran en conflicto y son
              transformados por nuevas constelaciones filosóficas.
            </p>
            <div className="ct20-flow">
              <div><span>PROBLEMA</span><strong>nace</strong></div><b>→</b>
              <div><span>TRADICIÓN</span><strong>adquiere sentido</strong></div><b>→</b>
              <div><span>HISTORIA</span><strong>se transforma</strong></div>
            </div>
            <div className="ct20-freedom">
              <span>LIBERTAD</span>
              <div><strong>Kant</strong><b>≠</b><strong>Hegel</strong><b>≠</b><strong>Marx</strong></div>
            </div>
            <aside className="ct-class-note"><strong>Adorno · Terminología filosófica</strong><p>
              La terminología filosófica exige reconstruir la historia y la función
              de un concepto, no memorizar una definición de diccionario.
            </p></aside>
          </section>

          <section id="interdisciplina">
            <Head n="08" eye="Institutum">La sociedad exige varias disciplinas</Head>
            <div className="ct20-disciplines">
              {['Filosofía','Sociología','Economía','Psicoanálisis','Historia','Cultura']
                .map(x => <span key={x}>{x}</span>)}
              <strong>INVESTIGACIÓN<br/>SOCIAL</strong>
            </div>
          </section>

          <section id="fromm">
            <Head n="09" eye="Investigatio empirica">Obreros y empleados en vísperas del Tercer Reich</Head>
            <p>
              El estudio asociado a Erich Fromm ejemplifica la articulación
              entre estructura social y estructura psíquica ante el crecimiento
              del fascismo.
            </p>
            <div className="ct20-matrix">
              <div><span>PLANO DECLARADO</span><span>PLANO PSÍQUICO</span></div>
              <div><strong>identidad obrera / socialista / democrática</strong>
                   <strong>autoritarismo / obediencia / jerarquía</strong></div>
              <p>¿Qué ocurre cuando la identidad política y la estructura de personalidad no coinciden?</p>
            </div>
          </section>

          <section id="problema">
            <Head n="10" eye="Quaestio maior">La paradoja que organizará el curso</Head>
            <div className="ct20-two">
              <article><span>MODERNIDAD</span><strong>razón · libertad · progreso</strong></article>
              <b>?</b>
              <article><span>HISTORIA REAL</span><strong>dominación · fascismo · barbarie</strong></article>
            </div>
            <div className="ct-class-callout"><span>Pregunta frankfurtiana</span><strong>
              ¿Cómo puede una sociedad que promete racionalidad, libertad y
              progreso producir nuevas formas de dominación?
            </strong></div>
          </section>
        </article>
      </div>

      <footer className="ct-class-footer">
        <Link to="/semestre/5/teoria-critica">← Teoría Crítica</Link>
        <span>Hegel · Marx · Lukács · Freud</span>
        <span>XX · VIII · MMXXVI</span>
      </footer>
    </main>
  )
}
