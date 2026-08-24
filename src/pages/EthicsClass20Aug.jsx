import { Link } from 'react-router'

const sections = [
  ['00', 'responsabilidad', 'La pregunta rectora'],
  ['01', 'justicia', 'Daño, justicia y reparación'],
  ['02', 'redes', 'Responsabilidad en redes complejas'],
  ['03', 'sacrificio', 'Sacrificio y responsabilidad antigua'],
  ['04', 'mitos', 'Ifigenia, Isaac y Abel'],
  ['05', 'patroclo', 'Patroclo y la violencia heroica'],
  ['06', 'nostoi', 'Victoria, destino y deuda'],
  ['07', 'examen', 'La vida examinada'],
  ['08', 'conciencia', 'Del sacrificio al examen interior'],
  ['09', 'tension', 'Responsabilidad individual / estructural'],
  ['10', 'lectura', 'Lectura pendiente de identificar'],
]

const goToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Head({ number, eyebrow, children }) {
  return <>
    <span className="ethclass-number">{number}</span>
    <p className="ethclass-eyebrow">{eyebrow}</p>
    <h2>{children}</h2>
  </>
}

export default function EthicsClass20Aug() {
  return (
    <main className="ethclass-page eth20-page">
      <div className="ethclass-meander" aria-hidden="true" />

      <nav className="ethclass-nav">
        <Link to="/semestre/5/etica">← Ética</Link>
        <Link to="/" className="ethclass-brand"><span>Φ</span> Philosophia</Link>
        <span>XX · VIII · MMXXVI</span>
      </nav>

      <header className="ethclass-hero eth20-hero">
        <div className="ethclass-columns" aria-hidden="true">
          <span /><span /><span /><span />
        </div>
        <div className="ethclass-ghost" aria-hidden="true">ΣΥΝΕΙΔΗΣΙΣ</div>

        <div className="ethclass-hero-inner">
          <p className="ethclass-kicker">εὐθύνη · συνείδησις · κάθαρσις · ἐξέτασις</p>
          <div className="ethclass-medallion">II</div>
          <h1>Conciencia de sí<em>responsabilidad y vida examinada</em></h1>
          <p className="ethclass-lead">
            La segunda sesión sigue una pregunta única a través de problemas
            contemporáneos, religión griega, épica y filosofía: ¿qué significa
            reconocer una acción como propia, asumir sus consecuencias y
            corregir la propia vida?
          </p>
          <div className="ethclass-thesis">
            <span>Tesis de la sesión</span>
            <strong>
              El sujeto ético aparece cuando la acción deja de ser sólo algo
              que ocurre y se vuelve algo que puedo examinar, reconocer como
              mío, reparar y transformar.
            </strong>
          </div>
          <div className="eth20-hero-axis">
            <span>daño</span><b>→</b><span>acción</span><b>→</b>
            <span>consecuencia</span><b>→</b><span>examen</span><b>→</b>
            <span>responsabilidad</span><b>→</b><span>reparación</span>
          </div>
        </div>
      </header>

      <div className="ethclass-layout">
        <aside className="ethclass-index">
          <p>Index lectionis</p>
          {sections.map(([number, id, label]) => (
            <button key={id} type="button" onClick={() => goToSection(id)}>
              <span>{number}</span>{label}
            </button>
          ))}
        </aside>

        <article className="ethclass-article">
          <section id="responsabilidad">
            <Head number="00" eyebrow="Quaestio rectora">¿Qué significa hacerse responsable?</Head>
            <p>
              La sesión comienza con experiencias de daño, traición y pérdida
              de confianza, y termina en Sócrates y el examen de la propia
              vida. El hilo que une todo el recorrido es la responsabilidad:
              quién actuó, qué produjo la acción y qué debe hacerse después.
            </p>

            <div className="eth20-responsibility-map">
              <div className="eth20-responsibility-center">
                <span>ΕΥΘΥΝΗ</span><strong>RESPONSABILIDAD</strong>
              </div>
              <article className="r1"><span>DAÑO</span><strong>¿a quién dañé?</strong></article>
              <article className="r2"><span>ACCIÓN</span><strong>¿qué hice?</strong></article>
              <article className="r3"><span>CONSECUENCIA</span><strong>¿qué produjo?</strong></article>
              <article className="r4"><span>CONCIENCIA DE SÍ</span><strong>¿lo reconozco como mío?</strong></article>
              <article className="r5"><span>REPARACIÓN</span><strong>¿qué puedo corregir?</strong></article>
            </div>

            <div className="ethclass-callout">
              <span>Problema</span>
              <strong>
                La responsabilidad no termina al identificar al autor de una
                acción: también pregunta por las consecuencias que siguen
                existiendo y por las posibilidades reales de reparación.
              </strong>
            </div>
          </section>

          <section id="justicia">
            <Head number="01" eyebrow="Iustitia et reparatio">La justicia no se agota en la sentencia</Head>
            <p>
              La conversación sobre abuso, corrupción, narcotráfico e
              impunidad desplaza la justicia desde el simple castigo hacia la
              reconstrucción de responsabilidades, redes, beneficios y daños.
            </p>

            <div className="eth20-flow five">
              <article><span>01</span><strong>Delito</strong><p>se produce un daño</p></article><b>→</b>
              <article><span>02</span><strong>Investigación</strong><p>se reconstruye lo ocurrido</p></article><b>→</b>
              <article><span>03</span><strong>Responsables</strong><p>personas y redes</p></article><b>→</b>
              <article><span>04</span><strong>Sentencia</strong><p>respuesta jurídica</p></article><b>→</b>
              <article><span>05</span><strong>Reparación</strong><p>daños y beneficios ilícitos</p></article>
            </div>

            <aside className="ethclass-note">
              <strong>Imagen de la clase</strong>
              <p>
                La “carpeta” que vuelve a colocarse debajo de otras expresa
                que un proceso puede retrasarse sin que desaparezca la cuestión
                moral y jurídica pendiente.
              </p>
            </aside>
          </section>

          <section id="redes">
            <Head number="02" eyebrow="Actio in retibus">Intención, acción y consecuencias en redes complejas</Head>
            <p>
              En la vida contemporánea, una acción entra en sistemas que el
              individuo no controla por completo. La contaminación sirve para
              mostrar que no basta con preguntar qué quise hacer; también hay
              que examinar qué hice realmente y qué consecuencias produjo.
            </p>

            <div className="eth20-flow three">
              <article><span>I</span><strong>INTENCIÓN</strong><p>lo que quiero hacer</p></article><b>→</b>
              <article><span>II</span><strong>ACCIÓN</strong><p>lo que efectivamente hago</p></article><b>→</b>
              <article><span>III</span><strong>CONSECUENCIAS</strong><p>efectos visibles e indirectos</p></article>
            </div>

            <div className="eth20-scale">
              <div><span>RESPONSABILIDAD INDIVIDUAL</span><strong>hábitos · decisiones · reparación posible</strong></div>
              <div className="beam"><i /><b>?</b><i /></div>
              <div><span>RESPONSABILIDAD ESTRUCTURAL</span><strong>infraestructura · industria · instituciones</strong></div>
            </div>

            <div className="eth20-cases">
              <article><strong>Baños secos</strong><p>Modificar hábitos puede reducir daños, pero depende de condiciones materiales.</p></article>
              <article><strong>Veganismo</strong><p>Una decisión personal puede ser coherente sin volver al individuo responsable de toda la industria.</p></article>
            </div>
          </section>

          <section id="sacrificio">
            <Head number="03" eyebrow="Cultus et culpa">La lógica antigua del sacrificio</Head>
            <p>
              El gran bloque histórico comienza con una forma de conciencia
              religiosa extremadamente exigente. La falta altera la relación
              con lo divino y exige reconocimiento, purificación y reparación.
            </p>

            <div className="eth20-vertical">
              <div><span>FALTA</span><strong>he ofendido</strong></div><b>↓</b>
              <div><span>RECONOCIMIENTO</span><strong>la falta es mía</strong></div><b>↓</b>
              <div><span>PURIFICACIÓN</span><strong>debo restablecer el orden</strong></div><b>↓</b>
              <div><span>SACRIFICIO</span><strong>la reparación implica renuncia</strong></div>
            </div>

            <div className="ethclass-synthesis">
              <span>Clave histórica</span>
              <strong>
                Lo importante no es justificar el sacrificio, sino reconstruir
                una mentalidad en la que la responsabilidad podía extenderse a
                acciones, deseos, omisiones y posibles ofensas a los dioses.
              </strong>
            </div>
          </section>

          <section id="mitos">
            <Head number="04" eyebrow="Probatio fidei">Ifigenia, Isaac y la incertidumbre del sacrificio</Head>
            <p>
              Agamenón e Ifigenia y Abraham e Isaac comparten una estructura
              narrativa: la fidelidad a lo divino se prueba mediante la
              disposición a entregar aquello que más se ama. La comparación no
              borra las diferencias entre las tradiciones.
            </p>

            <div className="eth20-compare">
              <article><span>TRADICIÓN GRIEGA</span><strong>Agamenón · Ifigenia</strong><p>padre / rey · expedición · Artemisa</p></article>
              <div><span>PRUEBA</span><b>aquello amado</b><small>¿qué estoy dispuesto a entregar?</small></div>
              <article><span>RELATO BÍBLICO</span><strong>Abraham · Isaac</strong><p>fidelidad · prueba · sacrificio detenido</p></article>
            </div>

            <div className="eth20-cain">
              <div><span>CAÍN</span><strong>ofrenda no aceptada</strong></div>
              <b>↔</b>
              <div><span>ABEL</span><strong>ofrenda aceptada</strong></div>
              <p>
                El texto de Génesis 4 no explica la aceptación mediante el
                comportamiento del humo; esa imagen pertenece a tradiciones
                interpretativas posteriores.
              </p>
            </div>

            <div className="ethclass-callout">
              <span>Objeción moderna</span><strong>¿Y si el sacrificio fue inútil?</strong>
            </div>
          </section>

          <section id="patroclo">
            <Head number="05" eyebrow="Ilias XXIII">El funeral de Patroclo y la violencia heroica</Head>
            <p>
              Tras la muerte de Patroclo, Aquiles organiza un funeral de gran
              escala. La escena permite comprender simultáneamente honor,
              duelo, obligación ritual, prestigio y violencia.
            </p>

            <div className="eth20-patroclus">
              <div className="core"><span>PATROCLO</span><strong>muerte · duelo</strong></div>
              <article><span>RITO</span><strong>pira funeraria</strong></article>
              <article><span>SACRIFICIO</span><strong>animales · cautivos</strong></article>
              <article><span>HONOR</span><strong>vínculo con el muerto</strong></article>
              <article><span>JUEGOS</span><strong>competición funeraria</strong></article>
            </div>

            <aside className="ethclass-note">
              <strong>Corrección de la transcripción</strong>
              <p>
                La referencia de clase corresponde a doce jóvenes troyanos
                cautivos, además de animales; no a hijos de comandantes griegos.
              </p>
            </aside>
          </section>

          <section id="nostoi">
            <Head number="06" eyebrow="Nostoi">Ganar la guerra no cancela la deuda moral</Head>
            <p>
              Los regresos de los héroes muestran que la victoria militar no
              equivale a felicidad. Impiedad, exceso, injusticia y destino
              continúan produciendo consecuencias después de Troya.
            </p>

            <div className="eth20-victory">
              <div><span>GUERRA</span><strong>victoria</strong></div>
              <b>≠</b>
              <div><span>VIDA</span><strong>felicidad</strong></div>
            </div>

            <div className="eth20-odysseus">
              <article><strong>10</strong><span>años de guerra</span></article><b>+</b>
              <article><strong>10</strong><span>años de regreso</span></article><b>=</b>
              <article className="total"><strong>20</strong><span>años fuera de Ítaca</span></article>
            </div>

            <div className="ethclass-synthesis">
              <span>Problema</span><strong>destino · acción · culpa · responsabilidad · sufrimiento</strong>
            </div>
          </section>

          <section id="examen">
            <Head number="07" eyebrow="Bios exetastos">De interpretar signos a examinar la propia vida</Head>
            <p>
              Oráculos y sueños exigen interpretación. Poco a poco, la mirada
              interpretativa también se vuelve hacia la propia conducta: qué
              hice, a quién dañé, qué hice bien y qué debería corregir.
            </p>

            <div className="eth20-flow five">
              <article><span>01</span><strong>ORÁCULO</strong><p>interpretar la palabra divina</p></article><b>→</b>
              <article><span>02</span><strong>SUEÑO</strong><p>interpretar signos</p></article><b>→</b>
              <article><span>03</span><strong>PURIFICACIÓN</strong><p>revisar la falta</p></article><b>→</b>
              <article><span>04</span><strong>EXAMEN</strong><p>revisar la propia vida</p></article><b>→</b>
              <article><span>05</span><strong>SÓCRATES</strong><p>vida examinada</p></article>
            </div>

            <div className="eth20-night">
              <header><span>EXAMEN VESPERTINO</span><strong>Antes de dormir</strong></header>
              <div>
                <p>¿Qué hice hoy?</p><p>¿A quién dañé?</p><p>¿Qué hice correctamente?</p>
                <p>¿Qué debí hacer de otra manera?</p><p>¿Qué debería reparar mañana?</p>
              </div>
            </div>

            <aside className="ethclass-note">
              <strong>Dos fórmulas griegas</strong>
              <p>
                «Conócete a ti mismo» y la fórmula socrática de la vida
                examinada condensan el giro por el que yo mismo puedo volverme
                objeto de mi propio examen.
              </p>
            </aside>
          </section>

          <section id="conciencia">
            <Head number="08" eyebrow="Metamorphosis ethica">Del sacrificio exterior al examen interior</Head>

            <div className="eth20-transform">
              <div><span>RELIGIÓN ANTIGUA</span><strong>he ofendido al dios</strong><p>reconocer → purificar → sacrificar → restablecer</p></div>
              <b>⟶</b>
              <div><span>FILOSOFÍA</span><strong>he actuado</strong><p>examinar → comprender → asumir → corregir</p></div>
            </div>

            <div className="ethclass-callout">
              <span>Nacimiento del sujeto moral</span>
              <strong>
                Puedo reconocer mis actos como propios, revisar sus motivos,
                asumir consecuencias y modificar mi manera de vivir.
              </strong>
            </div>
          </section>

          <section id="tension">
            <Head number="09" eyebrow="Limites responsabilitatis">¿Cuánto puedo exigirme legítimamente?</Head>
            <p>
              La sesión termina abriendo una tensión que no queda resuelta. La
              ética antigua puede exigir al individuo una responsabilidad casi
              total; la contemporánea reconoce estructuras que ningún sujeto
              controla por sí solo.
            </p>

            <div className="eth20-balance">
              <article><span>EXCESO DE CULPA</span><strong>“todo depende de mí”</strong><p>culpabilizarse por procesos imposibles de controlar</p></article>
              <div><b>RESPONSABILIDAD</b><span>posibilidad real de actuar</span></div>
              <article><span>EXCESO DE EXCUSA</span><strong>“nada depende de mí”</strong><p>usar la estructura para eludir cualquier obligación personal</p></article>
            </div>

            <div className="ethclass-synthesis">
              <span>Pregunta abierta</span>
              <strong>
                ¿Dónde termina mi responsabilidad individual y dónde comienza
                la responsabilidad colectiva o estructural?
              </strong>
            </div>
          </section>

          <section id="lectura">
            <Head number="10" eyebrow="Lectio futura">Se asignó una lectura, pero el título aún no puede identificarse</Head>
            <p>
              Al final de la sesión se asigna un texto o libro que se trabajará
              aproximadamente durante dos semanas. La indicación importante es
              que no se espera leerlo completo para la siguiente clase.
            </p>

            <div className="eth20-pending">
              <span>ESTADO</span><strong>Pendiente de identificar</strong>
              <p>
                El autor y el título no se distinguen con seguridad en la
                grabación. Por eso esta clase no agrega todavía una tarea al
                tablero: sería preferible completar el dato antes que inventar
                una referencia.
              </p>
            </div>
          </section>
        </article>
      </div>

      <footer className="ethclass-footer">
        <Link to="/semestre/5/etica">← Ética</Link>
        <span>εὐθύνη · συνείδησις · ἐξέτασις</span>
        <span>20 · VIII · 2026</span>
      </footer>

      <div className="ethclass-meander" aria-hidden="true" />
    </main>
  )
}
