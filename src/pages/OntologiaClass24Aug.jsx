import { Link } from 'react-router'

const sections = [
  ['01', 'retoma', 'Retoma de Spinoza'],
  ['02', 'estructura', 'Sustancia, atributos y modos'],
  ['03', 'tradicion', 'Tradición ontológica'],
  ['04', 'inmanencia', 'Dios, naturaleza y causalidad'],
  ['05', 'necesidad', 'Necesidad y libertad'],
  ['06', 'afectos', 'Afectos, felicidad y conocimiento'],
  ['07', 'dialogos', 'Diálogos con otros autores'],
  ['08', 'arquitectura', 'Arquitectura completa'],
  ['09', 'tarea', 'Tarea · Leibniz'],
]

const goTo = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

const pointGroups = {
  retoma: [
    {
      n: '01',
      title: 'Retoma de la clase anterior',
      body: (
        <>
          <p>
            La sesión comienza retomando el material introductorio sobre
            <strong> Baruch Spinoza</strong> que había quedado pendiente. El profesor
            recuerda que este material tiene una función de entrada: ofrecer una
            visión accesible del autor antes de entrar a la estructura más exigente
            de la <em>Ética demostrada según el orden geométrico</em>.
          </p>
          <p>
            También se menciona como lectura complementaria
            <em> Spinoza: filosofía práctica</em>. A partir de ahí la atención se
            desplaza hacia la forma misma de la <em>Ética</em>: definiciones,
            axiomas, proposiciones y demostraciones. Lo importante no es sólo que
            aparezcan en ese orden, sino que cada elemento remite a otros anteriores.
          </p>
          <div className="ontology24-mini-chain">
            <span>definiciones</span><b>→</b><span>axiomas</span><b>→</b>
            <span>proposiciones</span><b>→</b><span>demostraciones</span>
          </div>
          <p>
            Desde el comienzo, por tanto, Spinoza aparece como un filósofo que no
            presenta ideas aisladas, sino un sistema de dependencias. Entender una
            proposición exige reconstruir aquello de lo que depende.
          </p>
        </>
      ),
    },
  ],
  estructura: [
    {
      n: '02',
      title: 'Tres conceptos ontológicos fundamentales',
      body: (
        <>
          <p>
            El profesor señala que la entrada más clara a la ontología de Spinoza
            consiste en dominar tres conceptos: <strong>sustancia</strong>,
            <strong> atributo</strong> y <strong>modo</strong>. Con ellos se intenta
            responder la pregunta clásica de la ontología:
            <em> ¿qué existe y cuál es la estructura de la realidad?</em>
          </p>
          <p>
            Estos tres conceptos no forman una lista arbitraria. Constituyen niveles
            distintos de una misma arquitectura: la sustancia es la realidad
            fundamental; los atributos expresan lo que esa sustancia es; y los modos
            son las maneras finitas o determinadas en que esa realidad se expresa.
          </p>
        </>
      ),
    },
    {
      n: '03',
      title: 'La sustancia',
      body: (
        <>
          <p>
            El profesor vuelve primero a Descartes. Allí se hablaba de
            <em> res cogitans</em>, <em>res extensa</em> y <em>res infinita</em>.
            Sin embargo, si se toma con rigor la definición de sustancia como
            “aquello que es en sí y se concibe por sí”, aparece una dificultad:
            pensamiento y extensión parecen depender, en último término, de Dios.
          </p>
          <p>
            Spinoza radicaliza esta tensión. En vez de mantener tres sustancias,
            sostiene que en sentido estricto sólo puede existir
            <strong> una única sustancia</strong>. Esta posición recibe el nombre de
            <strong> monismo</strong>. No hay dos regiones ontológicamente
            independientes —una espiritual y otra material—, sino una sola realidad
            fundamental.
          </p>
        </>
      ),
    },
    {
      n: '04',
      title: 'Dios y naturaleza',
      body: (
        <>
          <p>
            La única sustancia es identificada por Spinoza con
            <strong> Dios</strong> y, al mismo tiempo, con
            <strong> la naturaleza</strong>. Esto exige abandonar la imagen de un
            Dios colocado fuera del mundo, separado de él y actuando desde una región
            trascendente.
          </p>
          <p>
            La tesis que organiza esta parte de la clase es que
            <strong> Dios es inmanente</strong>. La realidad no se divide en un mundo
            divino y otro natural: todo cuanto existe está en la sustancia y se sigue
            de ella.
          </p>
          <div className="ontology24-callout">
            <span>Clave de lectura</span>
            <strong>Deus sive Natura · Dios, o sea, la Naturaleza.</strong>
          </div>
        </>
      ),
    },
    {
      n: '05',
      title: 'Spinoza contra el dualismo',
      body: (
        <>
          <p>
            Esta tesis permite comprender la distancia entre Spinoza y las filosofías
            que separan dos órdenes de realidad. La clase compara su posición con
            estructuras dualistas como <em>mundo sensible / mundo inteligible</em>,
            o con formulaciones religiosas del tipo
            <em> tierra / cielo</em> y <em>mundo temporal / mundo trascendente</em>.
          </p>
          <p>
            Spinoza rompe con esa duplicación: no hay dos realidades fundamentales,
            sino una sola sustancia. En este contexto aparece la conocida fórmula de
            Nietzsche según la cual el cristianismo sería “platonismo para el pueblo”,
            precisamente por reproducir una división entre dos órdenes de realidad.
          </p>
        </>
      ),
    },
    {
      n: '09',
      title: 'Los atributos',
      body: (
        <>
          <p>
            La sustancia posee <strong>infinitos atributos</strong>. Un atributo
            expresa la esencia de la sustancia desde una determinada perspectiva.
            El ser humano, sin embargo, conoce directamente sólo dos:
            <strong> pensamiento</strong> y <strong>extensión</strong>.
          </p>
          <p>
            La clave es no confundirlos con sustancias separadas. Pensamiento y
            extensión pertenecen a una misma realidad fundamental. En Spinoza, por
            tanto, ya no son dos sustancias como en Descartes, sino dos atributos de
            la única sustancia.
          </p>
        </>
      ),
    },
    {
      n: '10',
      title: 'Los modos',
      body: (
        <>
          <p>
            El tercer concepto es el <strong>modo</strong>: aquello que es en otra
            cosa y debe concebirse por medio de esa otra cosa. El modo no es
            autosuficiente; depende ontológica y conceptualmente de la sustancia.
          </p>
          <p>
            Bajo el atributo de la extensión comprendemos los cuerpos; bajo el
            atributo del pensamiento comprendemos las ideas. Los cuerpos y las ideas
            son modos, es decir, determinaciones de la única realidad sustancial.
          </p>
        </>
      ),
    },
    {
      n: '11',
      title: 'La estructura completa de lo real',
      body: (
        <>
          <p>
            La pregunta “¿qué existe?” recibe entonces una respuesta jerarquizada:
            existe la sustancia, existen sus atributos y existen los modos que se
            siguen de esos atributos. El punto central no es una simple enumeración,
            sino la relación de dependencia entre esos niveles.
          </p>
          <div className="ontology24-schema">
            <strong>SUSTANCIA</strong>
            <i>↓</i>
            <span>infinitos atributos</span>
            <i>↓</i>
            <div><b>PENSAMIENTO</b><b>EXTENSIÓN</b></div>
            <i>↓</i>
            <span>ideas · cuerpos · modos</span>
          </div>
        </>
      ),
    },
  ],
  tradicion: [
    {
      n: '06',
      title: 'Parménides como antecedente',
      body: (
        <>
          <p>
            Para mostrar que Spinoza participa de una tradición ontológica más larga,
            el profesor vuelve a Parménides. La comparación se centra especialmente
            en la <strong>eternidad</strong>: el ser parmenídeo no nace ni perece, y
            la sustancia spinozista tampoco.
          </p>
          <p>
            La conexión sirve para recuperar una preocupación persistente de la
            ontología: pensar aquello que permanece, que no depende de otra cosa y
            que constituye el fundamento de lo real.
          </p>
        </>
      ),
    },
    {
      n: '07',
      title: 'Meliso y la infinitud',
      body: (
        <>
          <p>
            Dentro de la tradición eleática, Meliso introduce con fuerza la idea de
            un ser <strong>infinito</strong>. Esta tesis permite construir una
            genealogía conceptual que conduce hasta Spinoza.
          </p>
          <div className="ontology24-flow">
            <div><b>Parménides</b><small>ser eterno</small></div><i>→</i>
            <div><b>Meliso</b><small>ser infinito</small></div><i>→</i>
            <div><b>Spinoza</b><small>sustancia eterna e infinita</small></div>
          </div>
        </>
      ),
    },
    {
      n: '08',
      title: 'El argumento ontológico',
      body: (
        <>
          <p>
            La discusión lleva a una pregunta clásica: ¿puede seguirse la existencia
            de algo a partir de su esencia? El profesor recuerda el argumento
            ontológico de <strong>San Anselmo</strong>, retomado más tarde por
            <strong> Descartes</strong>.
          </p>
          <p>
            En Spinoza reaparece la tesis de que la sustancia no puede concebirse
            como no existente. Su existencia no se añade como un accidente externo:
            pertenece necesariamente a lo que la sustancia es.
          </p>
        </>
      ),
    },
    {
      n: '12',
      title: 'Aristóteles y la historia del concepto de sustancia',
      body: (
        <>
          <p>
            El profesor introduce después a Aristóteles y recuerda el problema del
            libro VII de la <em>Metafísica</em>: preguntar por el ser conduce en gran
            medida a preguntar por la sustancia.
          </p>
          <p>
            La diferencia con Spinoza es decisiva. En Aristóteles tienen importancia
            las sustancias concretas; en Spinoza, en sentido estricto, sólo hay una
            sustancia infinita. Los individuos concretos son modos.
          </p>
        </>
      ),
    },
    {
      n: '13',
      title: 'Sustancia y permanencia',
      body: (
        <>
          <p>
            Para hacer intuitiva la noción de sustancia se retoma también la causa
            material aristotélica: ¿qué permanece a través de los cambios?
            El cuerpo humano nace, se transforma, envejece y muere; sin embargo, sus
            componentes materiales participan después en otros procesos.
          </p>
          <p>
            Lo filosóficamente importante es la idea de una realidad que no se agota
            en cada transformación particular. La sustancia apunta precisamente a
            aquello que no desaparece con cada cambio.
          </p>
        </>
      ),
    },
    {
      n: '14',
      title: 'Los modos están sometidos al cambio',
      body: (
        <>
          <p>
            Los modos particulares están sometidos a lo que, en vocabulario
            aristotélico, puede llamarse <strong>generación y corrupción</strong>:
            nacen, cambian y desaparecen.
          </p>
          <p>
            La sustancia, en cambio, no nace ni muere. Es eterna e infinita.
            Esta diferencia impide identificar sin más a Dios con un objeto
            particular: un objeto es finito y mutable; la sustancia no.
          </p>
        </>
      ),
    },
  ],
  inmanencia: [
    {
      n: '15',
      title: 'Dios como causa inmanente',
      body: (
        <>
          <p>
            La clase se detiene en una proposición central de la Parte I:
            <strong> Dios es causa inmanente, pero no transitiva, de todas las cosas</strong>.
            Se identifica como la proposición 18.
          </p>
          <p>
            Una causa transitiva produciría un efecto separado de sí. La causalidad
            inmanente significa lo contrario: todo se sigue de Dios y permanece
            dentro del orden de Dios. No hay un efecto expulsado fuera de la
            sustancia.
          </p>
        </>
      ),
    },
    {
      n: '16',
      title: 'Dios no es cada objeto particular',
      body: (
        <>
          <p>
            La objeción inmediata sería: si todo está en Dios, ¿una mesa también es
            Dios? El profesor responde que hay que distinguir entre la sustancia
            infinita y sus modos finitos.
          </p>
          <p>
            Una mesa, un cuerpo o cualquier objeto concreto es limitado, mutable y
            finito. Por eso no es la sustancia considerada en su infinitud, sino un
            modo de esa sustancia.
          </p>
        </>
      ),
    },
    {
      n: '17',
      title: 'El problema del mal',
      body: (
        <>
          <p>
            La inmanencia abre otro problema: si todo se sigue de Dios, ¿también el
            mal? La explicación presentada en clase es que el mal no funciona como
            una entidad metafísica absoluta.
          </p>
          <p>
            Algo puede ser malo para mí o para un organismo determinado sin que
            exista una voluntad universal que haya querido producirlo. Un accidente
            puede explicarse mediante una cadena causal física sin necesidad de
            atribuir una intención malévola.
          </p>
        </>
      ),
    },
    {
      n: '18',
      title: 'Del orden geométrico a la necesidad',
      body: (
        <>
          <p>
            El método geométrico adquiere aquí una función filosófica decisiva.
            Definiciones y axiomas no son un simple recurso estilístico: permiten
            mostrar que las proposiciones se siguen de manera necesaria.
          </p>
          <p>
            La analogía es deductiva: si las premisas son verdaderas y la inferencia
            es válida, la conclusión no puede ser de otra manera. El sistema
            ontológico queda así conectado con la noción de necesidad.
          </p>
        </>
      ),
    },
    {
      n: '19',
      title: 'Necesidad y contingencia',
      body: (
        <>
          <p>
            El profesor pide distinguir lo necesario de lo contingente.
            <strong> Necesario</strong> es aquello que es así y no puede ser de otra
            manera. Lo contingente, en cambio, podría ser distinto.
          </p>
          <p>
            Spinoza radicaliza la primera opción: todo cuanto ocurre pertenece a un
            orden causal. La realidad no está formada por hechos absolutamente
            desconectados o contingentes.
          </p>
        </>
      ),
    },
    {
      n: '20',
      title: 'No existe otro orden posible de la realidad',
      body: (
        <>
          <p>
            La necesidad spinozista no significa sólo que cada cosa tenga una causa.
            Significa también que el orden de la naturaleza no procede de una
            elección arbitraria de Dios entre múltiples mundos posibles.
          </p>
          <p>
            La realidad se sigue de la naturaleza de Dios. Sustancia, atributos,
            modos y orden causal forman una única estructura necesaria.
          </p>
        </>
      ),
    },
  ],
  necesidad: [
    {
      n: '21',
      title: 'El gran problema: ¿dónde queda la libertad?',
      body: (
        <>
          <p>
            Aquí aparece la dificultad central de la sesión. Si todo ocurre
            necesariamente y todo está determinado causalmente, ¿cómo puede hablarse
            de ética, decisión y responsabilidad?
          </p>
          <p>
            La pregunta obliga a redefinir la libertad. Spinoza no puede entenderla
            como una excepción mágica al orden causal porque eso destruiría la
            coherencia de su ontología.
          </p>
        </>
      ),
    },
    {
      n: '22',
      title: 'El ser humano cree ser libre',
      body: (
        <>
          <p>
            La clase presenta una tesis central: el ser humano cree ser libre porque
            conoce sus deseos y decisiones inmediatas, pero desconoce las causas que
            lo determinan.
          </p>
          <p>
            Decimos “lo hice porque quise”, pero Spinoza pregunta qué produjo ese
            querer. El deseo puede depender del cuerpo, la historia personal,
            experiencias anteriores, afectos, condiciones sociales y otras causas
            que no tenemos presentes.
          </p>
        </>
      ),
    },
    {
      n: '23',
      title: 'Spinoza y la anticipación del inconsciente',
      body: (
        <>
          <p>
            El profesor conecta esta idea con Freud. No se afirma que Spinoza posea
            ya la teoría psicoanalítica del inconsciente, sino que aparece una
            intuición semejante: no conocemos plenamente aquello que nos mueve.
          </p>
          <p>
            Deseos, decisiones y acciones pueden depender de procesos que no se
            presentan de manera transparente a la conciencia.
          </p>
        </>
      ),
    },
    {
      n: '24',
      title: '“Vemos lo mejor y hacemos lo peor”',
      body: (
        <>
          <p>
            La experiencia ética se vuelve concreta: podemos saber racionalmente que
            algo no nos conviene y, aun así, hacerlo. El conocimiento intelectual no
            garantiza por sí mismo la acción.
          </p>
          <p>
            La clase relaciona esta tensión con una formulación semejante de San
            Pablo: existe una distancia entre lo que se quiere hacer y lo que
            efectivamente se termina haciendo.
          </p>
        </>
      ),
    },
    {
      n: '25',
      title: 'Esclavitud de las pasiones',
      body: (
        <>
          <p>
            Cuando actuamos sin comprender las causas que nos mueven quedamos
            sometidos a las pasiones. La paradoja es fuerte: una persona puede
            sentirse libre precisamente en el momento en que está siendo gobernada
            por determinaciones que desconoce.
          </p>
          <div className="ontology24-dual">
            <article><span>IGNORANCIA</span><b>pasiones → servidumbre</b></article>
            <article><span>CONOCIMIENTO</span><b>causas → mayor autonomía</b></article>
          </div>
        </>
      ),
    },
    {
      n: '26',
      title: 'Qué significa ser libre para Spinoza',
      body: (
        <>
          <p>
            La libertad no consiste en actuar sin ninguna causa. Consiste en
            <strong> conocer las causas que nos determinan</strong>. Cuanto mejor
            comprendemos nuestros deseos, afectos, historia y condicionamientos,
            mayor capacidad tenemos para actuar con conocimiento.
          </p>
          <p>
            La libertad, por tanto, no aparece fuera de la necesidad, sino dentro de
            ella.
          </p>
        </>
      ),
    },
    {
      n: '27',
      title: 'La libertad como conocimiento de la necesidad',
      body: (
        <>
          <p>
            Éste es uno de los puntos más importantes de toda la clase:
            <strong> la libertad surge del conocimiento de la necesidad</strong>.
            No escapamos a la causalidad; comprendemos mejor cómo opera.
          </p>
          <p>
            Esa comprensión permite relacionarnos racionalmente con nuestras propias
            determinaciones en vez de padecerlas ciegamente.
          </p>
        </>
      ),
    },
    {
      n: '28',
      title: 'El ejemplo del psicoanálisis',
      body: (
        <>
          <p>
            El psicoanálisis funciona como ejemplo pedagógico. Una persona puede
            repetir conductas sin saber por qué. El análisis intenta volver
            conscientes causas que operaban de manera no reconocida.
          </p>
          <p>
            El resultado no es convertirse en un ser sin causas, sino comprender
            mejor aquello que determinaba la conducta y abrir una posibilidad más
            consciente de acción.
          </p>
        </>
      ),
    },
    {
      n: '29',
      title: 'Conócete a ti mismo',
      body: (
        <>
          <p>
            La máxima antigua adquiere aquí un sentido spinozista. Conocerse es
            investigar por qué se desea, por qué se reacciona de cierta manera, qué
            afectos dominan y qué causas sostienen determinadas acciones.
          </p>
          <p>
            Por eso la filosofía de Spinoza no se limita a describir qué existe:
            pretende enseñar una forma más consciente de vivir.
          </p>
        </>
      ),
    },
  ],
  afectos: [
    {
      n: '30',
      title: 'El objetivo humano: la felicidad',
      body: (
        <>
          <p>
            La clase introduce el <em>Tratado de la reforma del entendimiento</em>
            para preguntar qué buscan normalmente los seres humanos. La respuesta
            general es la felicidad.
          </p>
          <p>
            Spinoza examina entonces aquello en lo que solemos depositarla:
            placeres, riquezas y honores.
          </p>
        </>
      ),
    },
    {
      n: '31',
      title: 'Placeres, riquezas y honores',
      body: (
        <>
          <p>
            Estos bienes pueden producir satisfacción, pero también dependencia,
            ansiedad, violencia y sufrimiento. Los honores se entienden como
            prestigio, reconocimiento, fama o posición social.
          </p>
          <p>
            El ejemplo del narcotráfico muestra la paradoja: puede ofrecer dinero,
            placer y reconocimiento dentro de un grupo, pero a la vez generar miedo,
            violencia, enfrentamientos y muerte.
          </p>
        </>
      ),
    },
    {
      n: '32',
      title: 'La inestabilidad de esos bienes',
      body: (
        <>
          <p>
            El problema no es que nunca proporcionen placer, sino que su capacidad
            para producir felicidad es inestable. Son bienes externos, variables y
            dependientes de circunstancias que no controlamos completamente.
          </p>
          <p>
            La pregunta se desplaza entonces hacia una forma de felicidad menos
            vulnerable a esos cambios.
          </p>
        </>
      ),
    },
    {
      n: '33',
      title: 'La intuición intelectual',
      body: (
        <>
          <p>
            La clase introduce la noción de <strong>intuición intelectual</strong>
            como una forma de conocimiento capaz de comprender la realidad en un
            nivel más profundo.
          </p>
          <p>
            Su objeto culminante es Dios, pero en Spinoza conocer a Dios significa
            conocer la sustancia infinita y el orden de la naturaleza.
          </p>
        </>
      ),
    },
    {
      n: '34',
      title: '“Un hombre ebrio de Dios”',
      body: (
        <>
          <p>
            La expresión destaca la centralidad de Dios en el sistema. La filosofía
            de Spinoza comienza en la Parte I con Dios y vuelve a Dios cuando aborda
            la forma más alta de conocimiento y felicidad.
          </p>
        </>
      ),
    },
    {
      n: '35',
      title: 'Conocer a Dios significa comprender la naturaleza',
      body: (
        <>
          <p>
            Como Dios es inmanente, su conocimiento no exige abandonar este mundo.
            Comprender la naturaleza, sus relaciones y sus causas es comprender la
            manera en que se expresa la sustancia.
          </p>
          <p>
            De este modo, la contemplación racional del mundo se vuelve también una
            vía de conocimiento de Dios.
          </p>
        </>
      ),
    },
    {
      n: '36',
      title: 'Spinoza y Aristóteles: contemplación y felicidad',
      body: (
        <>
          <p>
            Un alumno relaciona esta propuesta con la vida contemplativa de
            Aristóteles. El profesor acepta la posibilidad de establecer semejanzas,
            pero insiste en una regla metodológica: primero hay que reconstruir el
            sistema de Spinoza por sí mismo.
          </p>
          <p>
            Las comparaciones son útiles cuando ayudan a precisar diferencias, no
            cuando sustituyen la lectura del autor.
          </p>
        </>
      ),
    },
    {
      n: '42',
      title: 'La Parte IV: servidumbre humana',
      body: (
        <>
          <p>
            Aunque Ontología II se concentra en la Parte I, el profesor adelanta el
            problema de la Parte IV: la <strong>servidumbre humana</strong>.
            Allí se estudia cómo las pasiones pueden dominarnos.
          </p>
          <p>
            El problema “sé qué sería mejor, pero hago otra cosa” encuentra allí su
            desarrollo sistemático.
          </p>
        </>
      ),
    },
    {
      n: '43',
      title: 'Razón y pasión',
      body: (
        <>
          <p>
            La razón puede reconocer qué conviene, pero eso no basta para transformar
            la conducta. Hace falta comprender el funcionamiento de deseos,
            emociones, afectos y pasiones.
          </p>
          <p>
            Por ello Spinoza desarrolla una teoría de los afectos y no sólo una
            teoría abstracta de la razón.
          </p>
        </>
      ),
    },
    {
      n: '44',
      title: 'Los afectos fundamentales',
      body: (
        <>
          <p>
            La clase destaca tres afectos básicos:
            <strong> deseo, alegría y tristeza</strong>. A partir de ellos se pueden
            ordenar y comprender otros como amor, odio, ira, envidia, esperanza y
            temor.
          </p>
          <div className="ontology24-triad">
            <div><span>desiderium</span><b>DESEO</b></div>
            <div><span>laetitia</span><b>ALEGRÍA</b></div>
            <div><span>tristitia</span><b>TRISTEZA</b></div>
          </div>
        </>
      ),
    },
    {
      n: '45',
      title: 'Spinoza y los estoicos',
      body: (
        <>
          <p>
            El profesor establece una relación con el estoicismo por la preocupación
            práctica de conocer las pasiones y evitar que gobiernen ciegamente la
            vida.
          </p>
          <p>
            La semejanza no elimina la diferencia: Spinoza fundamenta esta práctica
            en su propio sistema metafísico y causal.
          </p>
        </>
      ),
    },
    {
      n: '46',
      title: 'Conocer nuestras debilidades',
      body: (
        <>
          <p>
            La finalidad práctica exige reconocer qué nos mueve, cuáles son nuestras
            debilidades, qué fortalezas poseemos y qué afectos suelen dominarnos.
          </p>
          <p>
            La formulación del profesor resume el punto con claridad:
            <strong> ser libre implica conocer las determinaciones</strong>.
          </p>
        </>
      ),
    },
  ],
  dialogos: [
    {
      n: '37',
      title: 'Freud y el sentimiento oceánico',
      body: (
        <>
          <p>
            Freud reaparece mediante la noción de “sentimiento oceánico”: una
            experiencia de unidad, disolución de límites individuales y pertenencia
            a una totalidad mayor.
          </p>
          <p>
            La referencia permite contrastar una ontología de la inmanencia con una
            explicación psicológica de la experiencia religiosa.
          </p>
        </>
      ),
    },
    {
      n: '38',
      title: 'Feuerbach y Dios como proyección',
      body: (
        <>
          <p>
            Feuerbach aparece con la tesis de que la teología es, en último término,
            antropología. El ser humano proyectaría en Dios aquello que idealiza:
            infinitud, eternidad, perfección y omnipotencia.
          </p>
          <p>
            La referencia sirve para situar a Spinoza dentro de una historia más
            amplia de críticas filosóficas de la religión.
          </p>
        </>
      ),
    },
    {
      n: '39',
      title: 'Trascendencia frente a inmanencia',
      body: (
        <>
          <p>
            La distinción se vuelve explícita:
            <strong> trascendencia</strong> sitúa a Dios más allá del mundo;
            <strong> inmanencia</strong> lo sitúa en el propio orden de la realidad.
          </p>
          <p>
            Spinoza pertenece claramente al segundo modelo y por ello entra en
            conflicto con concepciones dualistas.
          </p>
        </>
      ),
    },
    {
      n: '40',
      title: 'El problema de la inmortalidad del alma',
      body: (
        <>
          <p>
            La clase vuelve a una pregunta clásica: ¿existe otra vida? Se recuerda
            el <em>Fedón</em> de Platón como uno de los textos centrales sobre la
            inmortalidad del alma.
          </p>
          <p>
            Esta referencia permite contrastar la inmanencia spinozista con
            concepciones en las que el alma continúa en otro orden de realidad.
          </p>
        </>
      ),
    },
    {
      n: '41',
      title: 'Kant y los límites del conocimiento',
      body: (
        <>
          <p>
            Kant aparece brevemente para mostrar una respuesta distinta a las
            preguntas metafísicas. La filosofía crítica distingue entre conocimiento
            a priori y a posteriori y establece límites respecto de aquello que puede
            demostrarse teóricamente.
          </p>
          <p>
            Dios, inmortalidad y otra vida recibirán así un tratamiento diferente al
            racionalismo de Spinoza.
          </p>
        </>
      ),
    },
    {
      n: '47',
      title: 'El caso de la mala fe',
      body: (
        <>
          <p>
            Durante una pregunta se plantea el caso de quien ya sabe algo sobre sí
            mismo, pero intenta comportarse como si no lo supiera. El profesor remite
            a Sartre y a <em>El existencialismo es un humanismo</em>.
          </p>
          <p>
            La noción de <strong>mala fe</strong> se utiliza aquí para pensar una
            evasión de lo que uno ya reconoce, problema distinto de la ignorancia
            causal spinozista.
          </p>
        </>
      ),
    },
    {
      n: '48',
      title: 'Dos formas de falta de libertad',
      body: (
        <>
          <p>
            La comparación permite distinguir dos estructuras:
          </p>
          <div className="ontology24-dual">
            <article><span>SPINOZA</span><b>ignorancia → pasión → servidumbre</b></article>
            <article><span>SARTRE</span><b>conocimiento → evasión → mala fe</b></article>
          </div>
          <p>
            En ambos casos está en juego la relación del individuo consigo mismo,
            pero los fundamentos filosóficos son diferentes.
          </p>
        </>
      ),
    },
  ],
  arquitectura: [
    {
      n: '49',
      title: 'El sistema completo visto desde Ontología',
      body: (
        <>
          <p>
            El profesor insiste en que la Parte I de la <em>Ética</em> es plenamente
            pertinente para Ontología porque antes de hablar de libertad o felicidad
            Spinoza establece cómo está constituida la realidad.
          </p>
          <div className="ontology24-architecture">
            {['ONTOLOGÍA','SUSTANCIA · ATRIBUTOS · MODOS','NECESIDAD','SER HUMANO DETERMINADO','ÉTICA','CONOCIMIENTO','LIBERTAD','FELICIDAD'].map((x,i) => (
              <span key={x}>{x}{i < 7 && <b>↓</b>}</span>
            ))}
          </div>
          <p>
            La ética nace de la ontología: sólo después de comprender un universo
            necesario puede plantearse qué significa ser libre dentro de él.
          </p>
        </>
      ),
    },
    {
      n: '50',
      title: 'Síntesis conceptual de la sesión',
      body: (
        <>
          <p>
            Spinoza sostiene una única sustancia, eterna e infinita, identificada con
            Dios o la naturaleza. Esa sustancia se expresa mediante infinitos
            atributos, de los cuales conocemos pensamiento y extensión; los entes
            particulares son modos.
          </p>
          <p>
            Todo cuanto ocurre se sigue de un orden causal necesario. Por eso la
            libertad humana no puede significar ausencia de causas. La libertad
            consiste en comprender cada vez mejor las causas que nos determinan y,
            mediante ese conocimiento, pasar de la servidumbre de las pasiones a una
            forma más consciente de acción.
          </p>
          <div className="ontology24-callout">
            <span>Fórmula de cierre</span>
            <strong>
              Una sustancia → necesidad causal → ser humano determinado →
              conocimiento de las causas → libertad.
            </strong>
          </div>
        </>
      ),
    },
  ],
}

function PointList({ group }) {
  return (
    <div className="ontology24-long-points">
      {pointGroups[group].map((point) => (
        <section key={point.n} className="ontology24-long-point">
          <div className="ontology24-long-point-number">{point.n}</div>
          <div>
            <h3>{point.title}</h3>
            {point.body}
          </div>
        </section>
      ))}
    </div>
  )
}

export default function OntologiaClass24Aug() {
  return (
    <main className="ontology24-page">
      <nav className="ontology-class-v2-nav">
        <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
        <Link to="/" className="ontology-class-v2-brand">Φ · Philosophia</Link>
        <span>XXIV · VIII · MMXXVI</span>
      </nav>

      <header className="ontology24-hero">
        <p>Ontología II · Tercera clase</p>
        <h1>Spinoza<em>sustancia · necesidad · libertad</em></h1>
        <p className="ontology24-lead">
          La clase reconstruye el movimiento completo del sistema: de la pregunta por
          la sustancia a la inmanencia de Dios, de ahí a la necesidad causal y,
          finalmente, al problema de cómo puede ser libre un ser humano que también
          pertenece a ese orden necesario.
        </p>
        <div className="ontology24-axis">
          <span>sustancia</span><b>→</b><span>atributos</span><b>→</b><span>modos</span>
          <b>→</b><span>necesidad</span><b>→</b><span>afectos</span>
          <b>→</b><span>conocimiento</span><b>→</b><span>libertad</span>
        </div>
      </header>

      <div className="ontology24-layout">
        <aside className="ontology24-index">
          <p>Index lectionis · 50 puncta</p>
          {sections.map(([n,id,label]) => (
            <button key={id} type="button" onClick={() => goTo(id)}>
              <span>{n}</span>{label}
            </button>
          ))}
        </aside>

        <article className="ontology24-article">
          <section id="retoma">
            <span className="ontology24-number">I</span>
            <p className="ontology24-eyebrow">Initium</p>
            <h2>Retoma de Spinoza y del orden geométrico</h2>
            <PointList group="retoma" />
          </section>

          <section id="estructura">
            <span className="ontology24-number">II</span>
            <p className="ontology24-eyebrow">Substantia · attributa · modi</p>
            <h2>Qué existe y cómo se organiza la realidad</h2>
            <PointList group="estructura" />
          </section>

          <section id="tradicion">
            <span className="ontology24-number">III</span>
            <p className="ontology24-eyebrow">Traditio ontologica</p>
            <h2>La sustancia dentro de una historia del ser</h2>
            <PointList group="tradicion" />
          </section>

          <section id="inmanencia">
            <span className="ontology24-number">IV</span>
            <p className="ontology24-eyebrow">Deus sive Natura</p>
            <h2>Inmanencia, causalidad y necesidad</h2>
            <PointList group="inmanencia" />
          </section>

          <section id="necesidad">
            <span className="ontology24-number">V</span>
            <p className="ontology24-eyebrow">Necessitas · libertas</p>
            <h2>Cómo puede ser libre un ser determinado</h2>
            <PointList group="necesidad" />
          </section>

          <section id="afectos">
            <span className="ontology24-number">VI</span>
            <p className="ontology24-eyebrow">Vita practica</p>
            <h2>Felicidad, afectos y conocimiento de sí</h2>
            <PointList group="afectos" />
          </section>

          <section id="dialogos">
            <span className="ontology24-number">VII</span>
            <p className="ontology24-eyebrow">Dialogi</p>
            <h2>Freud, Feuerbach, Kant, Platón y Sartre</h2>
            <PointList group="dialogos" />
          </section>

          <section id="arquitectura">
            <span className="ontology24-number">VIII</span>
            <p className="ontology24-eyebrow">Architectura systematis</p>
            <h2>De la ontología a la ética</h2>
            <PointList group="arquitectura" />
          </section>

          <section id="tarea" className="ontology24-homework">
            <span className="ontology24-number">IX</span>
            <p className="ontology24-eyebrow">Lectio ad diem XXVI</p>
            <h2>Tarea para la próxima clase · Leibniz</h2>

            <p className="ontology24-homework-lead">
              La sesión cierra prácticamente el bloque dedicado a Spinoza y prepara el
              paso al siguiente racionalista: <strong>Gottfried Wilhelm Leibniz</strong>.
              La indicación final del profesor fue estudiar a Leibniz para la
              <strong> próxima clase, miércoles 26 de agosto de 2026</strong>.
            </p>

            <div className="ontology24-books">
              <article>
                <span>I</span>
                <div>
                  <b>Discurso de metafísica</b>
                  <small>G. W. Leibniz</small>
                  <p>
                    Texto de entrada para comprender la noción leibniziana de
                    sustancia individual, perfección, causalidad y orden del mundo.
                  </p>
                </div>
              </article>

              <article>
                <span>II</span>
                <div>
                  <b>Monadología</b>
                  <small>G. W. Leibniz</small>
                  <p>
                    Lectura central para entrar en la teoría de las mónadas y en la
                    arquitectura metafísica que sucederá al monismo de Spinoza.
                  </p>
                </div>
              </article>
            </div>

            <div className="ontology24-callout">
              <span>Consigna</span>
              <strong>
                Estudiar a Leibniz a partir del Discurso de metafísica y la
                Monadología para la clase del 26 de agosto.
              </strong>
            </div>

            <p className="ontology24-task-note">
              En estas notas no quedó fijado un número de páginas específico.
            </p>
          </section>
        </article>
      </div>

      <footer className="ontology-program-footer">
        <Link to="/semestre/5/ontologia-ii">← Ontología II</Link>
        <span>☙ &nbsp; Deus sive Natura &nbsp; ❧</span>
        <span>24 de agosto · MMXXVI</span>
      </footer>
    </main>
  )
}
