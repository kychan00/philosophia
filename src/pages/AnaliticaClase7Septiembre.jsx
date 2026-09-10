import './AnaliticaClase7Septiembre.css'

const Section = ({ n, title, children }) => (
  <section className="ac7-section">
    <div className="ac7-section-number">{String(n).padStart(2,'0')}</div>
    <div className="ac7-section-body">
      <h2>{title}</h2>
      {children}
    </div>
  </section>
)

export default function AnaliticaClase7Septiembre() {
  return (
    <main className="ac7-page">
      <header className="ac7-hero">
        <button className="ac7-back" type="button" onClick={() => { window.location.hash = '#/semestre/5/filosofia-analitica' }}>
          ← FILOSOFÍA ANALÍTICA
        </button>
        <div className="ac7-kicker">CLASE · LUNES 07 SEP 2026</div>
        <h1>Lenguaje, lógica y<br/><em>tradición analítica</em></h1>
        <p className="ac7-lead">Del giro lingüístico y Frege al segundo Wittgenstein, con la discusión de Hacker sobre por qué la filosofía analítica no puede reducirse simplemente a filosofía del lenguaje.</p>
        <div className="ac7-status"><span>LECTURA</span><strong>Hacker · aprox. p. 97</strong><span className="ac7-no-task">SIN TAREA EXPLÍCITA</span></div>
      </header>

      <nav className="ac7-chain">
        <span>CONTEXTO HISTÓRICO</span><b>→</b><span>GIRO LINGÜÍSTICO</span><b>→</b><span>LÓGICA FORMAL</span><b>→</b><span>FREGE</span><b>→</b><span>WITTGENSTEIN</span><b>→</b><span>HACKER / DUMMETT</span>
      </nav>

      <article className="ac7-content">
        <Section n={1} title="¿Qué hace histórica a la filosofía analítica?">
          <p>Peter Hacker destaca la <strong>argumentación racional</strong>, la preocupación por la <strong>lógica</strong> y el <strong>lenguaje</strong>. En clase se añade una cuarta condición: el <strong>contexto sociohistórico</strong>.</p>
          <div className="ac7-timeline">
            <div><small>XVII–XVIII</small><strong>Razón</strong><p>capacidades, límites y certeza</p></div>
            <div><small>XIX</small><strong>Historia</strong><p>conciencia y sentido histórico</p></div>
            <div><small>XX</small><strong>Lenguaje + lógica</strong><p>marco de la tradición analítica</p></div>
          </div>
          <aside className="ac7-note">Encontrar rasgos “analíticos” en Platón o Aristóteles no los convierte en filósofos analíticos. La clasificación requiere el contexto del siglo XX.</aside>
        </Section>

        <Section n={2} title="El giro lingüístico">
          <p>Si el sujeto no puede colocarse fuera del lenguaje, los problemas filosóficos tienen que atravesarlo. Aparece así una relación decisiva entre <strong>mente, lenguaje y pensamiento</strong>.</p>
          <div className="ac7-diagram"><span>SUJETO</span><i>→</i><strong>LENGUAJE</strong><i>→</i><span>MUNDO</span></div>
          <p>La cuestión ya no es sólo mente–cuerpo. También se pregunta por la relación <strong>mente–lenguaje</strong>: ¿el pensamiento existe primero y luego se traduce, o pensamiento y lenguaje son inseparables para el análisis filosófico?</p>
        </Section>

        <Section n={3} title="La lógica formal cambia el análisis">
          <p>La lógica moderna permite ir más allá de decidir si un argumento es válido o inválido. Hace posible <strong>descomponer formalmente el lenguaje</strong>, exhibir estructuras y estudiar condiciones de verdad.</p>
          <div className="ac7-formula">
            <code>∀x (Perro(x) → (Ladra(x) ∧ Muerde(x)))</code>
            <p>«Los perros ladran y muerden» → una estructura donde aparecen cuantificación, propiedades y conectivas.</p>
          </div>
          <div className="ac7-formula"><code>P → Q</code><p>La implicación es falsa únicamente cuando P es verdadera y Q es falsa.</p></div>
        </Section>

        <Section n={4} title="Wittgenstein: dos momentos del análisis">
          <div className="ac7-compare">
            <div><small>PRIMER WITTGENSTEIN</small><h3><em>Tractatus</em></h3><p>Lenguaje y realidad pueden corresponder porque comparten una <strong>forma lógica</strong>. La proposición figura un estado de cosas.</p><div className="ac7-mini">MUNDO ≈ FORMA LÓGICA ≈ LENGUAJE</div></div>
            <div><small>SEGUNDO WITTGENSTEIN</small><h3><em>Investigaciones</em></h3><p>El lenguaje es también <strong>práctica, actividad y comunicación</strong>. El significado depende de su uso dentro de juegos de lenguaje.</p><div className="ac7-mini">SIGNIFICADO = USO + REGLAS + COMUNIDAD</div></div>
          </div>
        </Section>

        <Section n={5} title="Filosofía como terapia: disolver falsos problemas">
          <p>Muchos problemas pueden nacer al confundir una función gramatical con una entidad ontológica. El análisis pregunta primero <strong>qué función cumple realmente una palabra</strong>.</p>
          <div className="ac7-cases">
            <div><blockquote>«No hay nada»</blockquote><p>“La nada” no tiene que convertirse en una cosa. Hacerlo sería una <strong>reificación</strong>.</p></div>
            <div><blockquote>«La manzana es roja»</blockquote><p>Del adjetivo “roja” no se sigue que exista una entidad independiente llamada <strong>“la rojez”</strong>.</p></div>
            <div><blockquote>«En invierno hace frío»</blockquote><p>“Invierno” no tiene por qué funcionar como un objeto simple del mismo modo que “mesa”.</p></div>
          </div>
        </Section>

        <Section n={6} title="Referencia, sentido y mundo">
          <p>La discusión sobre referentes conduce a Frege. Una expresión puede plantear problemas distintos si su referente es empírico, histórico, literario, mitológico o ideal.</p>
          <div className="ac7-reference-grid">
            <span>Hamlet <small>literario</small></span><span>Benito Juárez <small>histórico</small></span><span>Ares / Zeus <small>mitológico</small></span>
          </div>
          <div className="ac7-key"><span>FREGE</span><strong>sentido ≠ referencia</strong><p>La clase introduce además la distinción entre oración, enunciado y proposición y vuelve al eje sujeto — lenguaje — mundo.</p></div>
        </Section>

        <Section n={7} title="Del referente al uso">
          <p>Una concepción restrictiva entiende el lenguaje principalmente como descripción de hechos. El segundo Wittgenstein rompe esa reducción: el lenguaje sirve para <strong>describir, preguntar, saludar, ordenar, prometer, bromear, agradecer, narrar y jugar</strong>, entre muchos otros usos.</p>
          <div className="ac7-rule"><span>«silla»</span><b>no recibe su significado de una esencia trascendente</b><span>→</span><strong>se aprende y corrige dentro de una comunidad lingüística</strong></div>
        </Section>

        <Section n={8} title="Hacker contra una definición demasiado estrecha">
          <p>Decir que filosofía analítica es simplemente “filosofía que analiza” resulta demasiado amplio. Identificarla con <strong>filosofía del lenguaje</strong> resulta demasiado estrecho.</p>
          <div className="ac7-dummett">
            <small>MICHAEL DUMMETT</small>
            <blockquote>Las consideraciones filosóficas acerca del pensamiento sólo podrían obtenerse mediante una explicación filosófica del lenguaje.</blockquote>
            <p>La dificultad es determinar qué significa aquí “pensamiento” y si esta fórmula puede abarcar realmente toda la diversidad de la tradición analítica.</p>
          </div>
        </Section>

        <Section n={9} title="Frege no comienza como filósofo del lenguaje">
          <p>El proyecto central de Frege era el <strong>logicismo</strong>: buscar fundamentos lógicos rigurosos para las matemáticas. Sus preguntas sobre sentido, referencia, proposición y lenguaje aparecen porque su proyecto lógico exige aclararlas.</p>
          <div className="ac7-flow"><span>CRISIS EN FUNDAMENTOS</span><b>→</b><span>LOGICISMO</span><b>→</b><span>LENGUAJE FORMAL</span><b>→</b><span>SENTIDO / REFERENCIA</span></div>
          <aside className="ac7-note">Para Frege, el lenguaje natural puede ocultar la estructura lógica mediante ambigüedades, convenciones, historia y retórica. La formalización busca retirar ese “ruido”.</aside>
        </Section>

        <section className="ac7-conclusion">
          <span>CONCLUSIÓN PROVISIONAL</span>
          <h2>La tradición analítica no cabe en una sola fórmula.</h2>
          <ol>
            <li>Necesita una caracterización <strong>histórica</strong>, no sólo rasgos abstractos.</li>
            <li>Está ligada a lógica moderna, giro lingüístico, análisis conceptual y argumentación racional.</li>
            <li>Frege, Russell, los dos Wittgenstein, el positivismo lógico y el lenguaje ordinario representan <strong>etapas diferentes</strong>.</li>
            <li>No puede reducirse simplemente a <strong>filosofía del lenguaje</strong>.</li>
            <li>La definición de Dummett es importante, pero Hacker muestra sus dificultades.</li>
          </ol>
        </section>

        <section className="ac7-next">
          <div><span>CIERRE DE CLASE</span><h3>Lectura: aproximadamente página 97</h3><p>La siguiente sesión continuará con Frege y con la crítica a la definición de filosofía analítica.</p></div>
          <div className="ac7-task"><span>TAREA</span><strong>No se indicó una tarea explícita en la grabación.</strong><p>El cierre sólo registra continuidad de la discusión, pase de lista y fin de sesión.</p></div>
        </section>
      </article>
    </main>
  )
}
