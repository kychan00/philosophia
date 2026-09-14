import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import './EthicsClass03Sep.css'

const sections = [
  ['00', 'mapa', 'Mapa de la sesión'],
  ['01', 'justicia', 'Justicia y exigencia de derechos'],
  ['02', 'verguenza', 'Vergüenza, ideología e introyección'],
  ['03', 'profesion', 'Profesión como servicio'],
  ['04', 'escasez', 'Escasez, miedo y vulnerabilidad'],
  ['05', 'trabajo', 'Trabajo, salud y mortalidad'],
  ['06', 'democrito', 'Demócrito 86: arrogancia y escucha'],
  ['07', 'pluralidad', 'Pluralidad de interpretaciones'],
  ['08', 'error', 'Error, negatividad y aprendizaje'],
  ['09', 'contingencia', 'Peor caso y prudencia'],
  ['10', 'alteridad', 'Circunstancias, alteridad y comprensión'],
  ['11', 'cierre', 'Estructura del ejercicio moral'],
]

const justiceCases = [
  ['laboral', 'Conflicto laboral', 'exigir lo que corresponde',
    'La justicia distributiva aparece cuando el trabajador deja de sentir vergüenza por reclamar aquello que le corresponde y se niega a consentir una relación injusta.'],
  ['denuncia', 'Denuncia', 'responsabilidad que rebasa al individuo',
    'Denunciar una injusticia grave no sólo busca reparación personal: también puede impedir que el daño se repita contra otras personas.'],
  ['familia', 'Vínculo familiar', 'la justicia puede superar la lealtad',
    'El parentesco no elimina la responsabilidad moral. La clase imagina incluso el caso extremo de una madre que denuncia a su propio hijo por un crimen.'],
]

const professionCases = [
  ['law', 'Derecho', 'asesoría y acceso a la justicia',
    'La profesión jurídica no debería reducirse al cobro: el servicio social y la práctica profesional también pueden ser formas de devolución a la comunidad.'],
  ['engineering', 'Ingeniería', 'ayuda técnica sin interés económico',
    'Si una persona vulnerable necesita una solución sencilla, ayudar sin cobrar puede ser una forma concreta de responsabilidad profesional.'],
  ['medicine', 'Medicina', 'atender o canalizar responsablemente',
    'Una práctica ética puede implicar buscar alternativas reales para quien no puede pagar, en vez de reducir la relación médica a capacidad de compra.'],
]

const scarcityEffects = [
  ['01', 'Escasez', 'falta de recursos y horizonte estrecho'],
  ['02', 'Miedo', 'temor a perder ingreso, empleo o acceso'],
  ['03', 'Cesión', 'se tolera aquello que se percibe como inevitable'],
  ['04', 'Introyección', 'la dominación se vuelve una regla interior'],
  ['05', 'Dificultad para exigir', 'los derechos existen, pero cuesta reclamarlos'],
]

const democritusSteps = [
  ['01', 'Interpretación propia', 'creo tener buenas razones'],
  ['02', 'Escucha', 'atiendo seriamente la perspectiva ajena'],
  ['03', 'Comparación', 'examino argumentos y marcos conceptuales'],
  ['04', 'Revisión', 'reconozco límites, errores o aspectos no vistos'],
  ['05', 'Respuesta', 'defiendo o modifico mi posición con mejores razones'],
]

const goToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Heading({ n, eyebrow, children }) {
  return (
    <div className="ethsep1-heading">
      <span>{n}</span>
      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}

export default function EthicsClass03Sep() {
  const [justiceId, setJusticeId] = useState('laboral')
  const [professionId, setProfessionId] = useState('engineering')
  const [workView, setWorkView] = useState('life')
  const [democritusIndex, setDemocritusIndex] = useState(1)

  const justice = useMemo(
    () => justiceCases.find(([id]) => id === justiceId) || justiceCases[0],
    [justiceId],
  )

  const profession = useMemo(
    () => professionCases.find(([id]) => id === professionId) || professionCases[0],
    [professionId],
  )

  return (
    <main className="ethsep1-page ethsep3-page">
      <nav className="ethsep1-nav">
        <Link to="/semestre/5/etica">← Ética</Link>
        <Link to="/" className="ethsep1-brand">Φ · Philosophia</Link>
        <span>III · IX · MMXXVI</span>
      </nav>

      <header className="ethsep1-hero">
        <div className="ethsep1-meander" aria-hidden="true" />
        <div className="ethsep1-ghost" aria-hidden="true">ΔΙΚΗ</div>

        <div className="ethsep1-hero-inner">
          <div>
            <p className="ethsep1-kicker">FI194 · Sexta clase · 3 de septiembre</p>
            <h1>
              Justicia,
              <em>prudencia y escucha</em>
            </h1>
            <p className="ethsep1-lead">
              A partir de casos laborales, profesionales y cotidianos, la sesión
              examina qué significa no consentir la injusticia, cómo la escasez
              condiciona la acción y por qué escuchar, equivocarse y comprender
              al otro forman parte de una vida ética.
            </p>

            <div className="ethsep1-question">
              <span>PREGUNTA RECTORA</span>
              <strong>
                ¿Cómo cambia una decisión moral cuando atendemos no sólo a la
                regla, sino también a la vulnerabilidad, las consecuencias, el
                error y la perspectiva del otro?
              </strong>
            </div>
          </div>

          <aside className="ethsep1-axis">
            <span>MAPA</span>
            <div><b>JUSTICIA</b><small>no consentir lo injusto</small></div>
            <i>↓</i>
            <div><b>PRUDENCIA</b><small>pensar consecuencias</small></div>
            <i>↓</i>
            <div className="active"><b>ALTERIDAD</b><small>escuchar · comprender</small></div>
          </aside>
        </div>
      </header>

      <div className="ethsep1-layout">
        <aside className="ethsep1-index">
          <p>Index ethicus</p>
          {sections.map(([n, id, label]) => (
            <button type="button" key={id} onClick={() => goToSection(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="ethsep1-article">
          <section id="mapa">
            <Heading n="00" eyebrow="Argumentum">
              La ética se prueba cuando una máxima entra en una situación concreta
            </Heading>

            <div className="ethsep1-master">
              <span>sentencia</span><b>→</b>
              <span>caso</span><b>→</b>
              <span>conflicto</span><b>→</b>
              <span>consecuencias</span><b>→</b>
              <span>deliberación</span><b>→</b>
              <strong>decisión</strong>
            </div>

            <div className="ethsep1-focus">
              <span>HILO DE LA SESIÓN</span>
              <h3>De la máxima moral a la comprensión de circunstancias</h3>
              <p>
                Los ejemplos muestran que deliberar exige relacionar principios
                con vulnerabilidad, desigualdad, responsabilidad profesional,
                temporalidad de la vida, pluralidad interpretativa y aprendizaje
                del error.
              </p>
            </div>
          </section>

          <section id="justicia">
            <Heading n="01" eyebrow="Iustitia">
              Si quiero justicia, primero tengo que dejar de consentir lo injusto
            </Heading>
            <p>
              La discusión parte de un conflicto laboral. La vergüenza por exigir
              derechos puede hacer que el trabajador ceda precisamente allí donde
              el empleador no siente vergüenza por reducir, explotar o incumplir.
              La exigencia de justicia adquiere entonces una dimensión ética y
              política que rebasa el interés privado.
            </p>

            <div className="ethsep1-tradition-tabs">
              {justiceCases.map(([id, title, label]) => (
                <button
                  type="button"
                  key={id}
                  className={justice[0] === id ? 'active' : ''}
                  onClick={() => setJusticeId(id)}
                >
                  <span>{title}</span>
                  <strong>{label}</strong>
                </button>
              ))}
            </div>

            <article className="ethsep1-focus">
              <span>{justice[1]}</span>
              <h3>{justice[2]}</h3>
              <p>{justice[3]}</p>
            </article>

            <div className="ethsep1-note">
              <strong>Fórmula de la clase</strong>
              <p>
                No consentir la injusticia es una condición mínima para exigir
                justicia. La responsabilidad puede extenderse hacia quienes
                podrían padecer después el mismo daño.
              </p>
            </div>
          </section>

          <section id="verguenza">
            <Heading n="02" eyebrow="Pudor · ideologia">
              La dominación también puede instalarse dentro de nosotros
            </Heading>
            <p>
              La sesión explica que ciertos discursos sobre el trabajo hacen que
              el empleado termine creyendo que le debe algo al empleador porque
              éste “le da trabajo”. Esa relación puede interiorizarse hasta el
              punto de que el control ya no necesite ser completamente externo.
            </p>

            <div className="ethsep1-master centered">
              <span>discurso</span><b>→</b>
              <span>ideología</span><b>→</b>
              <span>introyección</span><b>→</b>
              <strong>autolimitación</strong>
            </div>

            <div className="ethsep1-warning">
              <span>PROBLEMA ÉTICO</span>
              <strong>
                La persona puede terminar sintiendo vergüenza por reclamar un
                derecho mientras quien produce la injusticia no siente vergüenza
                por ejecutarla.
              </strong>
            </div>
          </section>

          <section id="profesion">
            <Heading n="03" eyebrow="Officium professionale">
              Una profesión también puede pensarse como servicio
            </Heading>
            <p>
              A partir de abogados, ingenieros y médicos, la clase sostiene que
              la responsabilidad profesional no se agota en obtener utilidad.
              Puede haber situaciones donde el conocimiento especializado se
              convierte en una aportación libre de interés económico.
            </p>

            <div className="ethsep1-tradition-tabs">
              {professionCases.map(([id, title, label]) => (
                <button
                  type="button"
                  key={id}
                  className={profession[0] === id ? 'active' : ''}
                  onClick={() => setProfessionId(id)}
                >
                  <span>{title}</span>
                  <strong>{label}</strong>
                </button>
              ))}
            </div>

            <article className="ethsep1-focus">
              <span>{profession[1]}</span>
              <h3>{profession[2]}</h3>
              <p>{profession[3]}</p>
            </article>

            <div className="ethsep1-note">
              <strong>Mala práctica médica</strong>
              <p>
                El caso discutido en clase distingue entre error o negligencia y
                una conducta premeditada orientada a obtener beneficio económico:
                esta última se considera moralmente más grave.
              </p>
            </div>
          </section>

          <section id="escasez">
            <Heading n="04" eyebrow="Inopia · metus">
              La escasez reduce la capacidad práctica de exigir derechos
            </Heading>
            <p>
              La pobreza no aparece sólo como falta de dinero. También afecta el
              horizonte de decisión: el miedo a perder ingreso, atención médica,
              empleo o estabilidad puede volver mucho más difícil reclamar
              aquello que corresponde por derecho.
            </p>

            <div className="ethsep1-stoic">
              {scarcityEffects.map(([n, title, text]) => (
                <article key={n}>
                  <span>{n}</span>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="ethsep1-warning">
              <span>VULNERABILIDAD</span>
              <strong>
                Una persona puede seguir actuando desde la escasez incluso
                después de que su situación material haya cambiado.
              </strong>
            </div>
          </section>

          <section id="trabajo">
            <Heading n="05" eyebrow="Labor · tempus · mortalitas">
              Trabajar como si fuéramos a vivir eternamente
            </Heading>
            <p>
              La sentencia discutida cuestiona una vida consumida por el trabajo
              y la acumulación cuando el precio es la salud, el tiempo y los
              vínculos. El dinero puede compensar muchas cosas, pero no siempre
              puede devolver aquello que el desgaste destruyó.
            </p>

            <div className="ethsep1-toggle">
              <button
                type="button"
                className={workView === 'life' ? 'active' : ''}
                onClick={() => setWorkView('life')}
              >
                Vida y trabajo
              </button>
              <button
                type="button"
                className={workView === 'cost' ? 'active' : ''}
                onClick={() => setWorkView('cost')}
              >
                Costo
              </button>
            </div>

            <div className="ethsep1-obedience">
              {workView === 'life' ? (
                <>
                  <span>MORTALIDAD</span>
                  <h3>El tiempo de vida es limitado.</h3>
                  <p>
                    Pensar que no viviremos para siempre cambia el valor relativo
                    del salario, el prestigio, la salud, la familia y el descanso.
                  </p>
                </>
              ) : (
                <>
                  <span>DELIBERACIÓN</span>
                  <h3>¿Qué estoy dispuesto a desgastar?</h3>
                  <p>
                    Toda decisión profesional tiene costos en tiempo, cuerpo,
                    mente, oportunidades y relaciones. No existe una fórmula
                    única: hay que asumir consecuencias.
                  </p>
                </>
              )}
            </div>
          </section>

          <section id="democrito">
            <Heading n="06" eyebrow="Democritus · sententia LXXXVI">
              “Es arrogancia hablar de todo y no querer oír nada”
            </Heading>
            <p>
              El caso elaborado en clase sitúa la máxima en una discusión
              filosófica: estar convencido de una interpretación no autoriza a
              tratar al otro como si no pudiera enseñar nada. Escuchar no obliga
              a abandonar la posición propia; obliga a someterla a examen.
            </p>

            <div className="ethsep1-stoic">
              {democritusSteps.map(([n, title, text], index) => (
                <button
                  type="button"
                  key={n}
                  className={democritusIndex === index ? 'active' : ''}
                  onClick={() => setDemocritusIndex(index)}
                >
                  <span>{n}</span>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </button>
              ))}
            </div>

            <div className="ethsep1-focus">
              <span>{democritusSteps[democritusIndex][1]}</span>
              <h3>{democritusSteps[democritusIndex][2]}</h3>
              <p>
                La escucha permite reconocer al otro y también reconocer los
                límites del propio conocimiento.
              </p>
            </div>
          </section>

          <section id="pluralidad">
            <Heading n="07" eyebrow="Interpretatio">
              En filosofía no siempre existe una lectura definitiva
            </Heading>
            <p>
              El comentario del profesor sobre Hegel desplaza el problema desde
              “quién tiene la interpretación correcta” hacia los marcos
              conceptuales desde los cuales se argumenta. Dos lecturas pueden
              estar bien construidas y, aun así, ser irreconciliables.
            </p>

            <div className="ethsep1-master">
              <span>marco conceptual A</span><b>↘</b>
              <strong>texto</strong><b>↗</b>
              <span>marco conceptual B</span>
            </div>

            <div className="ethsep1-note">
              <strong>Tolerancia interpretativa</strong>
              <p>
                Una formulación más precisa identifica la perspectiva: “en la
                lectura de tal autor, este concepto se entiende así”. Eso permite
                comparar sin convertir una perspectiva en mirada absoluta.
              </p>
            </div>
          </section>

          <section id="error">
            <Heading n="08" eyebrow="Error · negatio">
              El error puede convertirse en fuente de aprendizaje
            </Heading>
            <p>
              La filosofía deja de ser una simple competencia cuando la pregunta
              ya no es solamente quién falló, sino por qué ocurrió el error y
              cómo se llegó a él. El análisis del fracaso revela supuestos,
              recorridos y aspectos que antes no se veían.
            </p>

            <div className="ethsep1-master centered">
              <span>error</span><b>→</b>
              <span>¿cómo?</span><b>+</b>
              <span>¿por qué?</span><b>→</b>
              <strong>aprendizaje</strong>
            </div>

            <div className="ethsep1-warning">
              <span>NEGATIVIDAD</span>
              <strong>
                Examinar aquello que salió mal permite aprender tanto del error
                propio como del error ajeno.
              </strong>
            </div>
          </section>

          <section id="contingencia">
            <Heading n="09" eyebrow="Prudentia">
              Pensar el peor caso posible puede ser una forma de prudencia
            </Heading>
            <p>
              En acciones humanas las mismas causas no producen necesariamente
              los mismos efectos. Por eso la deliberación debe incluir
              contingencias. Prepararse para escenarios adversos crea recursos
              sin impedir que finalmente ocurra el mejor resultado.
            </p>

            <div className="ethsep1-master">
              <span>decisión</span><b>→</b>
              <span>posibles efectos</span><b>→</b>
              <span>peor caso</span><b>→</b>
              <span>preparación</span><b>→</b>
              <strong>margen de acción</strong>
            </div>

            <div className="ethsep1-note">
              <strong>Ejemplo cotidiano</strong>
              <p>
                No salir con el dinero exacto del transporte: llevar un poco más
                funciona como un pequeño blindaje ante una contingencia.
              </p>
            </div>
          </section>

          <section id="alteridad">
            <Heading n="10" eyebrow="Alteritas · comprehensio">
              Comprender al otro exige preguntar por sus circunstancias
            </Heading>
            <p>
              Pobreza, violencia, historia personal y condiciones sociales
              producen sesgos y formas de actuar que pueden resultar
              incomprensibles desde fuera. Juzgar una acción sin preguntar cómo
              se llegó a ella borra parte de la humanidad del otro.
            </p>

            <div className="ethsep1-inversion">
              <article>
                <span>JUICIO RÁPIDO</span>
                <strong>“¿por qué hace eso?”</strong>
              </article>
              <b>→</b>
              <article className="danger">
                <span>COMPRENSIÓN</span>
                <strong>“¿qué historia y condiciones lo llevaron ahí?”</strong>
              </article>
            </div>

            <div className="ethsep1-thesis">
              <span>ALTERIDAD</span>
              <strong>
                El otro siempre conserva algo parcialmente desconocido. La
                respuesta ética no es asumir que ya lo comprendimos, sino
                acercarnos con mayor empatía, humanidad y atención a sus
                circunstancias.
              </strong>
            </div>
          </section>

          <section id="cierre">
            <Heading n="11" eyebrow="Exercitium">
              El ejercicio moral queda abierto para los casos pendientes
            </Heading>
            <p>
              Al cierre de la sesión el profesor recuerda la misma estructura
              de trabajo que se seguirá usando cada vez que aparezca un marco,
              una postura teórica, ética o moral clásica.
            </p>

            <div className="ethsep1-master centered">
              <span>1 · sentencia moral</span><b>→</b>
              <span>2 · desarrollo del caso</span><b>→</b>
              <strong>3 · aplicación de la sentencia</strong>
            </div>

            <div className="ethsep1-warning">
              <span>PENDIENTE</span>
              <strong>
                Completar los casos todavía no revisados usando sentencia,
                desarrollo del caso y aplicación de la sentencia.
              </strong>
            </div>
          </section>
        </article>
      </div>

      <footer className="ethicsx-footer">
        <Link to="/semestre/5/etica">← Ética</Link>
        <span>Δίκη · Φρόνησις · Ἀλλότης</span>
        <span>III · IX · MMXXVI</span>
      </footer>
    </main>
  )
}
