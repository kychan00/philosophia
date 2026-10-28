import { Link } from 'react-router'
import './MethodsClass26Oct.css'

const academicRoute = '/semestre/5/metodos-de-investigacion'
const themes = [
  {
    tag: '01 / MÉTODOS',
    title: 'Cuantitativo, cualitativo y mixto',
    source: 'Comparación desarrollada en clase a partir de material proyectado y explicación docente',
    content: [
      'Cuantitativo: se presentó como investigación orientada a medición numérica, hipótesis, contrastación y generalización. El profesor utilizó analogías de lógica deductiva, tablas de verdad y muestras epidemiológicas.',
      'Cualitativo: se contrastó como investigación interpretativa y contextual para comprender experiencias, significados y puntos de vista. Se mencionaron entrevistas abiertas, grupos focales, observación y análisis de textos.',
      'Mixto: el propósito explicado fue articular los recursos numéricos y comprensivos en una investigación más integral.',
    ],
    simple: 'Cuantitativo pregunta «¿cuánto y con qué relación?». Cualitativo pregunta «¿cómo se vive y qué significa?». Mixto procura integrar ambas preguntas.',
    critical: 'La cifra «20 o 40 %» fue un ejemplo oral, no una regla estadística universal. La generalización depende del diseño, muestra y población; la causalidad no se desprende automáticamente de cualquier encuesta.',
  },
  {
    tag: '02 / EXPERIENCIA',
    title: 'La fenomenología y la vivencia',
    source: 'Contenido del video educativo y aclaraciones del docente',
    content: [
      'El eje fue comprender el significado que un acontecimiento tiene para quien lo atraviesa; no contabilizar únicamente cuántas veces ocurrió.',
      'En el ejemplo del uso del celular, el fenómeno de interés no es el aparato como objeto físico, sino la vivencia de estar pendiente de él durante una comida, una actividad familiar o una interacción social.',
      'La entrevista profunda y la escucha sin categorías prefijadas buscan relatos detallados; el profesor insistió en la disciplina del investigador para evitar imponer sus propias explicaciones.',
    ],
    simple: 'Un teléfono puede contarse y pesarse. Pero para estudiar fenomenológicamente una «adicción al celular» se pregunta qué representa el uso de ese teléfono en la vida de alguien.',
    critical: 'El material de clase emplea «adicción» como ejemplo coloquial: no constituye diagnóstico ni prueba de dependencia clínica.',
  },
  {
    tag: '03 / FUENTES',
    title: 'Brentano, Husserl, Heidegger y Schütz',
    source: 'Recorrido historiográfico presentado por el video, comentado en clase',
    content: [
      'Brentano: se recomendó Psicología desde el punto de vista empírico, atendiendo a la orientación intencional de la vida psíquica. El libro se conserva como recomendación, no como lectura obligatoria.',
      'Husserl: se asoció con la elaboración del método fenomenológico y la reducción, orientada al examen riguroso de la vivencia.',
      'Heidegger: se distinguió una orientación hermenéutica que no separa la comprensión de la existencia situada en el mundo y con otros.',
      'Alfred Schütz: fue identificado como sociólogo que lleva la fenomenología al mundo de la vida cotidiana y social; en los apuntes figura como «Schules», grafía incierta restituida por el contexto.',
    ],
    simple: 'Brentano ayuda a pensar que nuestra conciencia se dirige hacia algo. Husserl estudia cómo se presenta; Heidegger subraya el mundo desde el que interpretamos; Schütz se ocupa de la vida social.',
    critical: 'Esta secuencia es una guía histórica simplificada, no identidad doctrinal entre los cuatro autores ni atribución literal de sus sistemas.',
  },
  {
    tag: '04 / MÉTODO',
    title: 'Epojé, descripción y estructura',
    source: 'Video y explicación del profesor; pasajes de las tres etapas parcialmente ininteligibles',
    content: [
      'La epojé se explicó como ejercicio de poner entre paréntesis juicios y creencias previas para atender a cómo se manifiesta el fenómeno.',
      'Se buscó una estructura compartida por experiencias distintas del mismo tipo, sin anticipar el resultado desde una teoría cerrada.',
      'El video aludió a tres etapas y se oyó una fase «estructural», seguida de contrastes con temas y teorías; los nombres y el orden completos no son recuperables con certeza en el material facilitado.',
      'El muestreo cualitativo se describió como elección intencional de participantes relacionados con el fenómeno, no simple sorteo.',
    ],
    simple: 'Antes de explicar por qué alguien mira su celular, pregunte cómo experimenta esa necesidad. Reúna descripciones, busque patrones y recién después contraste interpretaciones.',
    critical: 'No confundir la epojé con borrar material expresado por el participante ni afirmar una esencia universal a partir de muy pocos relatos.',
  },
  {
    tag: '05 / EPISTEMOLOGÍA',
    title: '¿Se puede confiar en el relato de otra persona?',
    source: 'Intervención del estudiante y diálogo con el profesor',
    content: [
      'Se introdujo la dificultad de inferir creencias a partir de conductas o afirmaciones, remitiendo a Luis Villoro y su obra Creer, saber, conocer.',
      'La objeción fue que alguien puede declarar una creencia y actuar de manera contraria, o incluso no expresar con exactitud su experiencia. Se planteó cómo una investigación fenomenológica conserva rigor ante esa opacidad.',
      'La respuesta docente giró hacia la estructura de las experiencias y de las intenciones situadas, con los ejemplos del miedo a una cueva y los motivos de uso del celular.',
      'La cuestión queda abierta: lo relatado es material de interpretación, pero no una ventana infalible a un estado mental inaccesible desde fuera.',
    ],
    simple: 'No basta que alguien diga «creo esto» para demostrarlo. La investigación debe escuchar lo que dice, describir cómo vive algo y reconocer los límites de sus inferencias.',
    critical: 'Los ejemplos de oso/cueva y el comentario sobre Villoro fueron ilustraciones de la discusión, no verificación literal de pasajes específicos del libro.',
  },
  {
    tag: '06 / CONTRASTE',
    title: 'Dos orientaciones fenomenológicas',
    source: 'Video comentado: contraste entre Husserl y Heidegger',
    content: [
      'La vía trascendental atribuida a Husserl enfatizó la suspensión de presupuestos y la búsqueda de estructuras esenciales de experiencia.',
      'La vía hermenéutica atribuida a Heidegger enfatizó la interpretación situada y nuestra implicación en un mundo de relaciones.',
      'Una tensión explicativa de la clase fue «ir al fondo» de la vivencia frente a considerar también el horizonte contextual desde el cual se interpreta.',
    ],
    simple: 'Husserl: ¿cómo aparece el fenómeno a la conciencia? Heidegger: ¿cómo lo comprendemos desde nuestra existencia en un mundo compartido?',
    critical: 'Son contrastes pedagógicos del material y no definiciones exhaustivas; no afirmar como cita textual la frase «nacemos con una historia».',
  },
]
const guide = [
  ['Sócrates / Platón', 'Preguntar, poner a prueba una definición y aclarar el papel del diálogo; separar el examen socrático de desarrollos posteriores de Platón.'],
  ['Hegel', 'Presentar la contradicción y las mediaciones del desarrollo conceptual, sin reducir la obra a una fórmula mecánica de tres pasos.'],
  ['Marx', 'Exponer crítica material e histórica, praxis y transformación de relaciones sociales; distinguir a Marx de una mera inversión de Hegel.'],
]
export default function MethodsClass26Oct() {
  return <main className="met26">
    <div className="met26-wrap">
      <nav className="met26-nav" aria-label="Navegación de Métodos">
        <Link to={academicRoute}>← Métodos de Investigación</Link>
        <Link to="/tareas">Calendario de tareas ↗</Link>
      </nav>
      <header className="met26-hero">
        <span className="met26-eyebrow">ARCHIVUM LECTIONUM · FI104 · XXVI / X / MMXXVI</span>
        <h1>De los enfoques de investigación <em>a la experiencia vivida</em></h1>
        <p>Una sesión sobre investigación cuantitativa, cualitativa y mixta; fenomenología, intencionalidad y el desafío epistemológico de interpretar lo que otro relata.</p>
        <div className="met26-pills"><span>Métodos</span><span>Fenomenología</span><span>Exposición dialéctica</span></div>
      </header>
      <aside className="met26-integrity">
        <strong>Fidelidad documental</strong>
        <p>Se distinguen apuntes del estudiante, explicaciones del profesor y material audiovisual comentado. Los nombres y conceptos se normalizan cuando la identificación es inequívoca; los pasajes incompletos permanecen expresamente marcados. La exposición final es un compromiso de estudio del alumno, no una fecha docente definitivamente fijada.</p>
      </aside>
      <section aria-labelledby="met26-scheme" className="met26-visual">
        <div className="met26-sectionlabel">FIGURA 01 · ESQUEMA ORIGINAL</div>
        <h2 id="met26-scheme">Tres preguntas, tres diseños de investigación</h2>
        <figure>
          <img src={`${import.meta.env.BASE_URL}images/metodos/metodos-26-oct-metodologias.svg`} alt="Esquema original: cuantitativo conduce a medir, cualitativo a comprender vivencias y mixto a integrar ambos tipos de evidencias. En el centro se sitúa una pregunta de investigación."/>
          <figcaption>Ilustración vectorial propia de PHILOSOPHIA, elaborada a partir de la comparación docente. No es reproducción de una diapositiva original. El esquema no afirma que sólo exista un uso legítimo de cada método.</figcaption>
        </figure>
      </section>
      <section aria-labelledby="met26-reading">
        <div className="met26-sectionlabel">DESARROLLO · APARTADO POR APARTADO</div>
        <h2 id="met26-reading">La clase, apartado por apartado</h2>
        <div className="met26-entries">
        {themes.map((theme)=> <article className="met26-entry" key={theme.tag}>
          <span className="met26-entrynum">{theme.tag}</span>
          <h3>{theme.title}</h3>
          <p className="met26-source"><strong>Procedencia:</strong> {theme.source}</p>
          <ul>{theme.content.map(point=><li key={point}>{point}</li>)}</ul>
          <div className="met26-simple"><strong>En palabras simples</strong><p>{theme.simple}</p></div>
          <div className="met26-caution"><strong>Precisión de lectura:</strong> {theme.critical}</div>
        </article>)}
        </div>
      </section>
      <section className="met26-task" aria-labelledby="met26-task-heading">
        <div className="met26-sectionlabel">ACTIVIDAD · COMPROMISO PERSONAL</div>
        <h2 id="met26-task-heading">Su exposición: Sócrates y Platón, Hegel y Marx</h2>
        <p>Al inicio de la sesión se confirmó el tema general del método dialéctico y se habló de un posible ajuste en el orden de las participaciones. El estudiante manifestó que asumirá la exposición comparativa de las tres tradiciones.</p>
        <div className="met26-taskgrid">{guide.map(([name,why],i)=><div key={name}><b>0{i+1}</b><h3>{name}</h3><p>{why}</p></div>)}</div>
        <p className="met26-taskdate"><strong>Planificación personal: miércoles 4 de noviembre de 2026 (tentativo).</strong> No se confirmó el día de exposición. Se comentó que el lunes 2 no habrá clase; si se modifica el orden o el calendario, esta previsión deberá corregirse.</p>
        <p><strong>Sin indicación documental:</strong> duración, formato exigido, número de diapositivas, bibliografía obligatoria, rúbrica o entrega escrita. Estos tres enfoques de preparación son propuestas editoriales, no instrucciones atribuidas al profesor.</p>
        <p><a href={`${import.meta.env.BASE_URL}estudio/dialectica-comparada.html`}>Presentación principal · 33 láminas: Sócrates/Platón, Hegel y Marx ↗</a></p>
        <div className="met26-simple">
          <strong>Actualización de preparación posterior a la sesión</strong>
          <p>
            El estudiante ha decidido asumir también la exposición de fenomenología originalmente prevista para otra participante. Esta decisión es posterior a la clase y no se atribuye al profesor como una nueva consigna.
          </p>
          <p><Link to="/estudio/fenomenologia-metodo">Abrir sistematización · Fenomenología como método de investigación ↗</Link></p>
          <p><Link to="/estudio/fenomenologia-metodo/sistema-2d">Abrir sistema 2D para proyección ↗</Link></p>
        </div>
        <Link to="/tareas">Ver la tarea en el calendario ↗</Link>
      </section>
      <section className="met26-sources">
        <div className="met26-sectionlabel">FUENTES Y RELACIONES</div>
        <h2>Para seguir investigando</h2>
        <p>La clase recomendó <i>Psicología desde el punto de vista empírico</i> de Franz Brentano. El enlace editorial disponible es una muestra de 17 páginas, no el libro completo.</p>
        <p><a href="https://www.sigueme.es/docs/libros/psicologia-brentano-web.pdf">Ediciones Sígueme · Vista previa de Brentano ↗</a></p>
        <p><Link to="/semestre/5/metodos-de-investigacion/clase/21-octubre">Clase anterior · Noesis, noema y protocolo del miedo digital ↗</Link></p>
        <p><Link to="/biblioteca?obra=Brentano%20-%20Psicolog%C3%ADa%20desde%20el%20punto%20de%20vista%20emp%C3%ADrico">Ficha bibliográfica de Brentano ↗</Link></p>
      </section>
      <footer className="met26-footer"><Link to={academicRoute}>← Regresar a la materia</Link><span>PHILOSOPHIA · FI104 · 2026-B</span></footer>
    </div>
  </main>
}
