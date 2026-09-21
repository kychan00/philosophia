import { Link } from 'react-router'
import PhilosophyLogicClassCard from '../components/PhilosophyLogicClassCard'
const marks = [
  ['⊢', '11%', '8%'],
  ['¬', '20%', '84%'],
  ['∴', '48%', '6%'],
  ['∀x', '60%', '87%'],
  ['↔', '79%', '9%'],
  ['□', '86%', '78%'],
]

export default function PhilosophyLogic() {
  return (
    <main className="analytic-page">
      <div className="analytic-paper" aria-hidden="true" />

      <div className="analytic-marks" aria-hidden="true">
        {marks.map(([char, top, left]) => (
          <span
            key={`${char}-${top}`}
            style={{ '--top': top, '--left': left }}
          >
            {char}
          </span>
        ))}
      </div>

      <nav className="analytic-nav">
        <Link to="/semestre/4">← Cuarto semestre</Link>

        <Link to="/" className="analytic-brand">
          <span>Φ</span>
          Philosophia
        </Link>

        <span>IV · 2026-A</span>
      </nav>

      <header className="analytic-hero">
        <div className="analytic-formula" aria-hidden="true">
          ⊢ φ
        </div>

        <div className="analytic-hero-inner">
          <p className="analytic-kicker">
            Logica · Forma · Consequentia
          </p>

          <div className="analytic-seal">⊢</div>

          <h1>
            Filosofía de
            <em>la lógica</em>
          </h1>

          <p className="analytic-intro">
            Archivo del curso de cuarto semestre. Las veintitrés sesiones se
            conservarán como páginas independientes, con sus conceptos,
            problemas filosóficos, lecturas y tareas cuando correspondan.
          </p>

          <div
            className="analytic-question logic-evaluation"
            data-logic-evaluation-summary
          >
            <span>Evaluación del curso</span>
            <strong>
              Exámenes 60% · participación y asistencia 10 pts
            </strong>

            <div className="logic-evaluation-grid">
              <div>
                <span>Examen I</span>
                <b>30%</b>
              </div>
              <div>
                <span>Examen II</span>
                <b>30%</b>
              </div>
              <div>
                <span>Participación / asistencia</span>
                <b>10 pts</b>
              </div>
              <div>
                <span>Trabajo final</span>
                <b>Entrega con el final</b>
                <small>Peso no indicado en la sesión</small>
              </div>
            </div>
          </div>
        </div>
      </header>

            <section
        className="logic-class-archive"
        data-philosophy-logic-class-archive
      >
        <div className="logic-class-archive__heading">
          <span>I</span>
          <div>
            <p>Archivum lectionum</p>
            <h2>Clases</h2>
          </div>
        </div>

        <div className="logic-class-archive__list">
          <PhilosophyLogicClassCard
            number="01"
            date="19 · I · 2026"
            eyebrow="Primera sesión · Lógica III"
            title="Introducción, demarcación y verdad lógica"
            description="Qué significa hacer filosofía de la lógica, qué distingue a un sistema lógico de un sistema meramente formal, de dónde podría provenir la necesidad y por qué la verdad lógica plantea un problema filosófico."
            tags={[
              'demarcación',
              'validez',
              'necesidad',
              'verdad',
              'pluralidad lógica',
            ]}
            to="/semestre/4/filosofia-de-la-logica/clase/19-enero"
          />

          <PhilosophyLogicClassCard
            number="02"
            date="21 · I · 2026"
            eyebrow="Segunda sesión · Lógica III"
            title="Lógica moderna, metalógica y lógicas no clásicas"
            description="1879 como punto de quiebre, niveles de sistemas formales, sintaxis, semántica y metalógica, propiedades de los sistemas, pluralidad de lógicas y el problema filosófico de los valores de verdad."
            tags={[
              'Frege · 1879',
              'sistemas',
              'metalógica',
              'lógicas no clásicas',
              'valores de verdad',
            ]}
            to="/semestre/4/filosofia-de-la-logica/clase/21-enero"
          />

          <PhilosophyLogicClassCard
            number="03"
            date="26 · I · 2026"
            eyebrow="Tercera sesión · Lógica III"
            title="Pluralidad de lógicas, demarcación y logicismo"
            description="La pluralidad de sistemas obliga a preguntar qué cuenta como lógica: interpretación, generalidad formal, lenguaje natural, metalógica y el recorrido Frege–Russell–Gödel como problema de fundamentación."
            tags={[
              'demarcación',
              'interpretabilidad',
              'logicismo',
              'Russell',
              'Gödel',
            ]}
            to="/semestre/4/filosofia-de-la-logica/clase/26-enero"
          />

          <PhilosophyLogicClassCard
            number="04"
            date="04 · II · 2026"
            eyebrow="Cuarta sesión · Lógica III"
            title="Sistemas formales, neutralidad tópica y lenguaje"
            description="Neutralidad tópica, sistemas interpretados y no interpretados, Leibniz y Frege, lenguaje como puente representacional, traducción, sintaxis, semántica y el paso hacia la proposición."
            tags={[
              'neutralidad tópica',
              'lenguaje',
              'Leibniz',
              'Frege',
              'proposición',
            ]}
            to="/semestre/4/filosofia-de-la-logica/clase/04-febrero"
          />

          <PhilosophyLogicClassCard
            number="05"
            date="09 · II · 2026"
            eyebrow="Quinta sesión · Lógica III"
            title="Oración, enunciado, proposición y verdad"
            description="Del lenguaje reglado al fragmento proposicional: forma y función, contenido enunciativo, potencial de veracidad, bivalencia, validez, analítico/sintético, semánticas y condiciones de falsedad."
            tags={[
              'proposición',
              'verdad',
              'bivalencia',
              'analítico / sintético',
              'validez',
            ]}
            to="/semestre/4/filosofia-de-la-logica/clase/09-febrero"
          />

          <PhilosophyLogicClassCard
            number="06"
            date="11 · II · 2026"
            eyebrow="Sexta sesión · Lógica III"
            title="Sistemas axiomático-deductivos, axiomas y reglas de inferencia"
            description="Arquitectura de sistemas deductivos, sentido clásico y contemporáneo de axioma, reglas deductivas, aridad, derivaciones, probabilidad, Peano, formalidad, neutralidad tópica y agenda metalógica."
            tags={[
              'axiomas',
              'reglas de inferencia',
              'derivación',
              'Peano',
              'metalógica',
            ]}
            to="/semestre/4/filosofia-de-la-logica/clase/11-febrero"
          />

          <PhilosophyLogicClassCard
            number="07"
            date="16 · II · 2026"
            eyebrow="Séptima sesión · Lógica III"
            title="Demarcación, completitud y sistema de Frege"
            description="Neutralidad tópica, símbolos no interpretados, niveles de lenguaje, FBF, tautología y teorema, completitud, sistema proposicional atribuido a Frege e inferencias frente a equivalencias."
            tags={[
              'demarcación',
              'FBF',
              'tautología',
              'completitud',
              'Frege',
            ]}
            to="/semestre/4/filosofia-de-la-logica/clase/16-febrero"
          />

          <PhilosophyLogicClassCard
            number="08"
            date="18 · II · 2026"
            eyebrow="Octava sesión · Lógica III"
            title="Validez, metalógica y límites del logicismo"
            description="La máquina axiomático-deductiva, validez formal y semántica, FBF/verdad lógica/teorema, consistencia, completitud, decidibilidad, Frege–Russell–Gödel, algoritmos e integración de extensiones."
            tags={[
              'validez',
              'consistencia',
              'completitud',
              'decidibilidad',
              'logicismo',
            ]}
            to="/semestre/4/filosofia-de-la-logica/clase/18-febrero"
          />

          <PhilosophyLogicClassCard
            number="09"
            date="02 · III · 2026"
            eyebrow="Novena sesión · Lógica III"
            title="Validez, argumento e inferencia"
            description="Validez sintáctica y semántica, anatomía del argumento, inferencia como proceso, deducción, inducción, abducción y analogía, doble evaluación, verdad frente a validez y límites de la formalización."
            tags={[
              'validez',
              'argumento',
              'inferencia',
              'deducción',
              'formalización',
            ]}
            to="/semestre/4/filosofia-de-la-logica/clase/02-marzo"
          />

          <PhilosophyLogicClassCard
            number="10"
            date="09 · III · 2026"
            eyebrow="Décima sesión · Lógica III"
            title="Formalización, Aristóteles y teoría funcional de Frege"
            description="Lenguaje natural y formalización, silogística aristotélica, formas categóricas A/E/I/O, límites del esquema sujeto–predicado y giro fregeano hacia función, argumento, variables y saturación."
            tags={['Aristóteles','Frege','formalización','función / argumento','saturación']}
            to="/semestre/4/filosofia-de-la-logica/clase/09-marzo"
          />

          <PhilosophyLogicClassCard
            number="11"
            date="11 · III · 2026"
            eyebrow="Undécima sesión · Lógica III"
            title="Frege, funciones y cuantificadores"
            description="Dominio, codominio e imagen, saturación, funciones monádicas y poliádicas, operadores proposicionales, cuantificadores de primer y segundo nivel, operadores objetuales y estructura interna del enunciado."
            tags={['Frege','funciones','aridad','cuantificadores','operadores']}
            to="/semestre/4/filosofia-de-la-logica/clase/11-marzo"
          />

          <PhilosophyLogicClassCard
            number="12"
            date="18 · III · 2026"
            eyebrow="Duodécima sesión · Lógica III"
            title="Frege, validez, necesidad y platonismo"
            description="Los cuatro sentidos lógicos del verbo ser, límites de la silogística, verdad frente a validez, dependencia necesaria, preguntas filosóficas sobre la lógica y el platonismo como primera respuesta."
            tags={['Frege','validez','necesidad','platonismo','verbo ser']}
            to="/semestre/4/filosofia-de-la-logica/clase/18-marzo"
          />

          <PhilosophyLogicClassCard
            number="13"
            date="23 · III · 2026"
            eyebrow="Decimotercera sesión · Lógica III"
            title="Necesidad lógica, Platón y Aristóteles"
            description="Necesidad y forma inferencial, platonismo, tercer mundo y grados cognoscitivos, intelectualismo aristotélico, abstracción, idealización, logos y comparación entre necesidad trascendente e inmanente."
            tags={['necesidad','Platón','Aristóteles','abstracción','logos']}
            to="/semestre/4/filosofia-de-la-logica/clase/23-marzo"
          />

          <PhilosophyLogicClassCard
            number="14"
            date="13 · IV · 2026"
            eyebrow="Decimocuarta sesión · Lógica III"
            title="Leibniz, analiticidad y entrada a Kant"
            description="Verdades de razón y de hecho, mónada, identidad, no contradicción, principio de analiticidad, idealismo, criterios de verdad, logicismo, lenguaje formal universal y el problema kantiano de las proposiciones sintéticas a priori."
            tags={['Leibniz','Kant','analiticidad','a priori','sintético a priori']}
            to="/semestre/4/filosofia-de-la-logica/clase/13-abril"
          />

          <PhilosophyLogicClassCard
            number="15"
            date="15 · IV · 2026"
            eyebrow="Decimoquinta sesión · Lógica III"
            title="Kant, conocimiento y proposiciones sintéticas a priori"
            description="Forma y materia del conocimiento, revolución copernicana, analítico/sintético, a priori/a posteriori, intuición y entendimiento, espacio y tiempo, categorías y sentido trascendental de la necesidad."
            tags={['Kant','sintético a priori','espacio / tiempo','categorías','trascendental']}
            to="/semestre/4/filosofia-de-la-logica/clase/15-abril"
          />

          <PhilosophyLogicClassCard
            number="16"
            date="20 · IV · 2026"
            eyebrow="Decimosexta sesión · Lógica III"
            title="Quine, holismo epistemológico y problema de la verdad"
            description="Holismo, red de creencias, experiencia fenoménica, coherencia, pragmatismo, revisabilidad de lógica y matemáticas, necesidad relativa al sistema y apertura del bloque sobre teorías de la verdad."
            tags={['Quine','holismo','pragmatismo','necesidad','verdad']}
            to="/semestre/4/filosofia-de-la-logica/clase/20-abril"
          />

          <PhilosophyLogicClassCard
            number="17"
            date="22 · IV · 2026"
            eyebrow="Decimoséptima sesión · Lógica III"
            title="Teorías de la verdad y teoría de la redundancia"
            description="Concepto y criterio de verdad, verdad trascendente e inmanente, correspondencia y coherencia, proyectos filosóficos, clasificaciones de teorías y teoría de la redundancia con oración, juicio, contexto y referencia."
            tags={['verdad','correspondencia','coherencia','redundancia','referencia']}
            to="/semestre/4/filosofia-de-la-logica/clase/22-abril"
          />

          <PhilosophyLogicClassCard
            number="18"
            date="27 · IV · 2026"
            eyebrow="Decimoctava sesión · Lógica III"
            title="Redundancia, juicio y valor de verdad"
            description="Desarrollo de la teoría de la redundancia: eliminación de “es verdadero”, oración, contenido judicable, juicio, contexto, valor veritativo, problema referencial, deflacionismo, inflacionismo y teorías pro-oracionales."
            tags={['redundancia','juicio','valor de verdad','deflacionismo','pro-oracionales']}
            to="/semestre/4/filosofia-de-la-logica/clase/27-abril"
          />

          <PhilosophyLogicClassCard
            number="19"
            date="29 · IV · 2026"
            eyebrow="Decimonovena sesión · Lógica III"
            title="Objeciones a la redundancia y teorías pragmáticas"
            description="Límites de T(P) ≡ P, predicado de verdad en contextos cuantificados, futuros indeterminados, raíz escéptica del pragmatismo, utilidad, coherencia, correspondencia, ciencia y contraste con fenomenología."
            tags={['redundancia','pragmatismo','escepticismo','utilidad','ciencia']}
            to="/semestre/4/filosofia-de-la-logica/clase/29-abril"
          />

          <PhilosophyLogicClassCard
            number="20"
            date="04 · V · 2026"
            eyebrow="Vigésima sesión · Lógica III"
            title="Pragmatismo, naturalismo quineano y objeciones"
            description="Hechos y proposiciones, creencias provisionales, sistema de creencias, ciencia como control, naturalismo quineano, paradigma kuhniano, verificabilidad, confirmación holista y objeciones a utilidad, consenso, coherencia y verificación."
            tags={['pragmatismo','Quine','Kuhn','verificabilidad','objeciones']}
            to="/semestre/4/filosofia-de-la-logica/clase/04-mayo"
          />

          <PhilosophyLogicClassCard
            number="21"
            date="06 · V · 2026"
            eyebrow="Vigesimoprimera sesión · Lógica III"
            title="Fenomenología, evidencia y verdad"
            description="Mediación entre empirismo y racionalismo, teoría evidencial, Husserl, “a las cosas mismas”, Kant, expectativa y cumplimiento, percepción, autodonación, grados de plenitud y Heidegger como crítica mediante aletheia."
            tags={['fenomenología','Husserl','evidencia','Heidegger','aletheia']}
            to="/semestre/4/filosofia-de-la-logica/clase/06-mayo"
          />

          <PhilosophyLogicClassCard
            number="22"
            date="11 · V · 2026"
            eyebrow="Vigesimosegunda sesión · Lógica III"
            title="Correspondencia, atomismo lógico y críticas"
            description="Verdad como adecuación, giro de representación mental a lenguaje, estados de cosas y hechos, Frege, Russell, primer Wittgenstein, atomismo lógico, verificación, isomorfismo, teoría pictórica y crítica del segundo Wittgenstein."
            tags={['correspondencia','atomismo lógico','Russell','Wittgenstein','verificación']}
            to="/semestre/4/filosofia-de-la-logica/clase/11-mayo"
          />

          <PhilosophyLogicClassCard
            number="23"
            date="18 · V · 2026"
            eyebrow="Vigesimotercera sesión · Lógica III"
            title="Tarski, verdad semántica y lógicas no clásicas"
            description="Esquema T, lenguaje objeto y metalenguaje, verdad-en-L, referencia y satisfacción, crítica realista/antirrealista de Dummett, bivalencia y entrada a lógicas modal, de relevancia, multivalentes, intuicionistas y difusas."
            tags={['Tarski','Dummett','semántica','bivalencia','lógicas no clásicas']}
            to="/semestre/4/filosofia-de-la-logica/clase/18-mayo"
          />
        </div>
      </section>

      <section className="analytic-course-map">
        <div className="analytic-section-heading">
          <span>II</span>
          <div>
            <p>Ordo archivii</p>
            <h2>Estructura preparada</h2>
          </div>
        </div>

        <div className="analytic-stages">
          <div><span>01</span><strong>Menú</strong></div>
          <div><span>02</span><strong>Clases</strong></div>
          <div><span>03</span><strong>Conceptos</strong></div>
          <div><span>04</span><strong>Repaso</strong></div>
        </div>
      </section>

      <footer className="analytic-footer">
        <Link to="/semestre/4">← Cuarto semestre</Link>
        <span>⊢ &nbsp; Φ &nbsp; ∴</span>
        <span>Logica · MMXXVI</span>
      </footer>
    
      

</main>
  )
}
