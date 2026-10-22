// Instantánea pública de metadatos bibliográficos del vault; actualización puntual 20-10-2026.
// No contiene apuntes ni inventario personal de ejemplares.
export const books = [
  {
    "id": "Bloch - Sujeto-objeto",
    "autor": "Bloch",
    "titulo": "Sujeto-objeto: El pensamiento de Hegel",
    "categoria": "ontología",
    "estado": "documentada",
    "lectura": "Ontología II · capítulo XIX, «Marx y la dialéctica idealista», PDF pp. 380–387; lectura personal sin confirmar",
    "edicion": "Fondo de Cultura Económica, segunda edición en español, 1983"
  },
  {
    "id": "Fromm - Marx y su concepto del hombre",
    "autor": "Fromm",
    "titulo": "Marx y su concepto del hombre",
    "categoria": "ontología",
    "estado": "documentada",
    "lectura": "Ontología II · «Crítica a la dialéctica y en general a la filosofía de Hegel», texto de Marx incluido en el volumen, PDF pp. 97–112; avance sin confirmar",
    "edicion": "Fondo de Cultura Económica, primera edición española, 1962; traducción de Julieta Campos",
    "url": "https://www.fondodeculturaeconomica.com/Ficha/9786071665218/F"
  },
  {
    "id": "Marx y Engels - La ideología alemana",
    "autor": "Marx y Engels",
    "titulo": "La ideología alemana",
    "categoria": "ontología",
    "estado": "documentada",
    "lectura": "Ontología II · once «Tesis sobre Feuerbach» de Karl Marx, apéndice del volumen, PDF pp. 500–503; no lectura integral acreditada",
    "edicion": "Ediciones Akal, 2014; traducción de Wenceslao Roces; ISBN 978-84-460-3996-9"
  },
  {
    "id": "Bobbio - La teoría de las formas de gobierno en la historia del pensamiento político",
    "autor": "Bobbio",
    "titulo": "La teoría de las formas de gobierno en la historia del pensamiento político",
    "categoria": "política",
    "estado": "documentada",
    "lectura": "Lectura asociada a Filosofía Política I, tercer semestre; avance personal sin confirmar",
    "edicion": "Fondo de Cultura Económica, 2.ª edición (2001), 4.ª reimpresión (2006); trad. José F. Fernández Santillán; ISBN 968-16-6467-1",
    "ideas": [
      {"lema":"Tipologías políticas","detalle":"Bobbio distingue el uso descriptivo, axiológico y el histórico de las clasificaciones de formas de gobierno (introducción)."},
      {"lema":"Gobierno de uno, pocos o muchos","detalle":"Estudia la comparación de formas políticas y sus degeneraciones en Heródoto, Platón y Aristóteles."},
      {"lema":"Gobierno mixto y estabilidad","detalle":"En Polibio, examina los ciclos constitucionales y la composición equilibrada de distintas formas de gobierno."}
    ]
  },
  {
    "id": "Freud - El malestar en la cultura",
    "autor": "Freud",
    "titulo": "El malestar en la cultura",
    "categoria": "crítica",
    "estado": "documentada",
    "lectura": "Lectura para hoy, 22-10-2026 · pendiente de confirmar avance",
    "edicion": "PDF facilitado · 90 páginas · trad. Luis López Ballesteros · Biblioteca Libre OMEGALFA · maquetación 2010 (no año editorial confirmado)",
    "url": "https://omegalfa.es/downloadfile.php?file=libros/el.malestar.de.la.cultura.pdf",
    "ideas": [
      {"lema":"I · El yo y el sentimiento oceánico (PDF pp. 2–12)","detalle":"Freud examina la experiencia de unidad con el mundo, la delimitación del yo y la interpretación de la necesidad religiosa."},
      {"lema":"II · Felicidad y fuentes del sufrimiento (PDF pp. 13–26)","detalle":"El principio del placer persigue felicidad, pero cuerpo, naturaleza y convivencia la limitan; se comparan varias vías para enfrentar el malestar."},
      {"lema":"III · La cultura no garantiza felicidad (PDF pp. 26–40)","detalle":"La cultura protege y regula la vida común, mientras sus exigencias, renuncias y avances técnicos no bastan para resolver la aspiración individual a ser feliz."},
      {"lema":"IV · Amor y necesidad (PDF pp. 40–47)","detalle":"Trabajo, Eros y Ananké articulan comunidad y familia, a la vez que producen tensiones entre vínculos individuales y exigencias culturales."},
      {"lema":"V · La agresividad como problema social (PDF pp. 47–57)","detalle":"La dificultad del mandato de amar al prójimo lleva a Freud a examinar la agresividad como obstáculo a la cohesión cultural."},
      {"lema":"VI · Eros y pulsión destructiva (PDF pp. 57–63)","detalle":"El antagonismo entre tendencias de unión y de destrucción atraviesa la evolución de la cultura."},
      {"lema":"VII · El superyó y la culpa (PDF pp. 64–75)","detalle":"La agresividad se interioriza: el superyó vigila al yo y la renuncia a las pulsiones puede intensificar el sentimiento de culpabilidad."},
      {"lema":"VIII · El costo del progreso (PDF pp. 76–90)","detalle":"La conclusión sitúa el incremento de la culpa y la pérdida de felicidad como costo del desarrollo cultural."}
    ]
  },
  {
    "id": "Popper - La lógica de la investigación científica",
    "autor": "Popper",
    "titulo": "La lógica de la investigación científica",
    "categoria": "epistemología",
    "estado": "recomendada",
    "lectura": "Lectura personal sin confirmar; recomendación temática sobre falsabilidad del 21-10-2026",
    "edicion": "Obra original de 1934; la edición concreta del PDF compartido está pendiente de cotejar",
    "url": "https://raularagon.com.ar/biblioteca/libros/Popper%20Karl%20-%20La%20Logica%20de%20la%20Investigacion%20Cientifica.pdf",
    "ideas": [
      {"lema": "I · Inducción y demarcación", "detalle": "Ruta de lectura: cap. I, §§1–6. Cómo contrastar teorías universales y distinguir su cientificidad mediante falsabilidad."},
      {"lema": "II · Modus tollens", "detalle": "Ruta de lectura: cap. III, §18. El contraste deductivo entre una predicción y un enunciado básico incompatible."},
      {"lema": "III · Falsabilidad y falsación", "detalle": "Ruta de lectura: cap. IV, §§19–24. No es igual que una teoría pueda refutarse que haberla refutado."},
      {"lema": "IV · Base empírica", "detalle": "Ruta de lectura: cap. V. Los enunciados básicos intervienen en la contrastación; su aceptación también exige reglas metodológicas."},
      {"lema": "V · Corroboración", "detalle": "Ruta de lectura: cap. X. Resistir pruebas severas no constituye verificación definitiva de la verdad de una teoría."}
    ]
  },
  {
    "id": "Rendón - La lucha por el reconocimiento en el fragmento de 1803-1804 de Hegel",
    "autor": "Rendón",
    "titulo": "La lucha por el reconocimiento en el fragmento de 1803/1804, de Hegel",
    "categoria": "ontología",
    "estado": "recomendada",
    "lectura": "Pendiente de confirmación personal · ensayo íntegro (17 páginas) analizado para dossier académico",
    "edicion": "Areté, 14(2), 271–287 (2002) · DOI 10.18800/arete.200202.007",
    "url": "https://revistas.pucp.edu.pe/index.php/arete/es/article/view/1698",
    "ideas": [
      {
        "lema": "01 · Jena y el espíritu (pp. 271–273)",
        "detalle": "La conciencia media singular y universal, teoría y práctica; la vida del espíritu exige concebir la relación entre conciencias."
      },
      {
        "lema": "02 · Totalidad ética (pp. 272–273)",
        "detalle": "El espíritu llega a ser efectivo en las costumbres e instituciones de un pueblo; no equivale a mera suma de individuos."
      },
      {
        "lema": "03 · Lucha y contradicción (pp. 273–274)",
        "detalle": "La lucha no proporciona por sí misma reconocimiento; su contradicción reclama la superación de la singularidad excluyente."
      },
      {
        "lema": "04 · Familia y formación (pp. 274–276)",
        "detalle": "La educación constituye un sí mismo autónomo y enfrenta el mundo real del niño con el mundo ideal recibido de los padres."
      },
      {
        "lema": "05 · Reconocimiento extrafamiliar (pp. 276–277)",
        "detalle": "El reconocimiento doméstico es inicial, pero la conciencia necesita conocerse a sí misma en otra totalidad más allá de la familia."
      },
      {
        "lema": "06 · Poner y reconocer (pp. 277–279)",
        "detalle": "La proximidad con Fichte esclarece la voluntad de ponerse como totalidad ante otra conciencia y ser reconocido por ella."
      },
      {
        "lema": "07 · La ofensa (pp. 279–280)",
        "detalle": "La lesión de la vida o posesión se vive como ofensa al todo; el conflicto pretende demostrar una identidad ante los demás."
      },
      {
        "lema": "08 · Lenguaje en ese estadio (pp. 280–281)",
        "detalle": "En la eticidad natural, palabras y promesas aún no bastan; el lenguaje socialmente reconocido adquiere eficacia en el pueblo."
      },
      {
        "lema": "09 · Vida, muerte y libertad (pp. 282–283)",
        "detalle": "El riesgo de morir aparece como prueba extrema de autoafirmación, antes de la versión madura de señor y siervo."
      },
      {
        "lema": "10 · Doble aporía (pp. 283–284)",
        "detalle": "Para preservarme arriesgo mi propia vida y para ser reconocido puedo destruir a quien debe reconocerme."
      },
      {
        "lema": "11 · Reflexión y autosuperación (pp. 284–285)",
        "detalle": "La conciencia reconoce la contradicción y abandona su pretensión de ser una totalidad absoluta y excluyente."
      },
      {
        "lema": "12 · Reconocimiento ético (pp. 285–287)",
        "detalle": "La universalidad comunitaria conserva singularidades mediadas por otras; reconocer no significa hacer desaparecer al individuo."
      }
    ]
  },
  {
    "id": "Dilthey - Hegel y el idealismo",
    "autor": "Dilthey",
    "titulo": "Hegel y el idealismo",
    "categoria": "ontología",
    "estado": "recomendada",
    "lectura": "Pendiente; síntesis de introducción, índice y fragmento, no lectura íntegra",
    "edicion": "Fondo de Cultura Económica, 1944 · trad. y epílogo de Eugenio Ímaz",
    "url": "https://archive.org/details/dilthey-wilhelm.-hegel-y-el-idealismo-1944_202011",
    "ideas": [
      {
        "lema": "I · Escribir la historia del pensamiento",
        "detalle": "La reconstrucción de los manuscritos juveniles permite leer el origen de los problemas que desembocarán en el sistema hegeliano."
      },
      {
        "lema": "II · Historia exterior e interior",
        "detalle": "La biografía y la formación conceptual están vinculadas, pero sus etapas no coinciden necesariamente año por año."
      },
      {
        "lema": "III · Historia y pueblos",
        "detalle": "El interés temprano por costumbres, religiones y formas políticas conduce a una comprensión histórica de la vida colectiva."
      },
      {
        "lema": "IV · Religión y filosofía",
        "detalle": "En Tubinga, la formación teológica confronta razón ilustrada, dogma y moralidad: un trasfondo de la filosofía naciente."
      },
      {
        "lema": "V · Grecia e Ilustración",
        "detalle": "El joven Hegel piensa arte y religión en relación con la vida de las naciones y la tradición de la Antigüedad."
      },
      {
        "lema": "VI · Espíritu en desarrollo",
        "detalle": "La obra dedica un bloque al universo como autodesenvolvimiento del espíritu; su argumento completo requiere lectura cotejada."
      },
      {
        "lema": "VII · Kant y la metafísica",
        "detalle": "Dilthey evalúa críticamente la transición del idealismo crítico a la metafísica hegeliana; es interpretación suya, no cita de Hegel."
      },
      {
        "lema": "VIII · Filosofía en contexto",
        "detalle": "El índice vincula a Hegel con su época y con Schleiermacher; las relaciones doctrinales concretas siguen sujetas a cotejo."
      },
      {
        "lema": "IX · Proceso histórico",
        "detalle": "En un fragmento publicado, Dilthey relaciona transformaciones de Francia y Alemania con una metafísica del proceso y del cambio."
      }
    ]
  },
  {
    "id": "Nava - Tecnociencia, entorno y sujeto tecnocientífico",
    "autor": "Nava Amezcua",
    "titulo": "Tecnociencia, entorno y sujeto tecnocientífico",
    "categoria": "analítica",
    "estado": "recomendada",
    "lectura": "Sin confirmar; artículo registrado como recomendación de Filosofía Analítica",
    "edicion": "Eikasía Revista de Filosofía, 134 (2026), 21–30",
    "url": "https://www.revistadefilosofia.org/index.php/ERF/article/view/1281",
    "studyUrl": "/semestre/5/filosofia-analitica/lectura/nava-tecnociencia"
  },
  {
    "id": "Adorno - Minima Moralia",
    "autor": "Adorno",
    "titulo": "Minima Moralia",
    "categoria": "crítica",
    "estado": "recomendada",
    "lectura": "Pendiente"
  },
  {
    "id": "Cicerón - Las paradojas de los estoicos",
    "autor": "Cicerón",
    "titulo": "Las paradojas de los estoicos",
    "categoria": "ética",
    "estado": "recomendada",
    "lectura": "Pendiente; no consta lectura del ejemplar",
    "edicion": "UNAM, 2000 · traducción de Julio Pimentel Álvarez (escaneo por cotejar)",
    "url": "https://archive.org/details/ciceron-paradoxa-stoicorum-las-paradojas-de-los-estoicos-ed.-julio-pimentel-alvarez_202601/page/VIII/mode/2up",
    "ideas": [
      {"lema":"I · La virtud es el único bien","detalle":"La prosperidad, el placer o el prestigio no garantizan rectitud moral."},
      {"lema":"II · La virtud basta para la felicidad","detalle":"La vida buena no se identifica sin más con la fortuna o el éxito."},
      {"lema":"III · Faltas y acciones rectas son iguales","detalle":"Distingue la corrección moral del agente de los grados de daño o de castigo."},
      {"lema":"IV · Los necios están locos","detalle":"Crítica al juicio ético extraviado; no es un diagnóstico médico."},
      {"lema":"V · Solo el sabio es libre","detalle":"No hay libertad interior cuando los deseos dominan la deliberación."},
      {"lema":"VI · Solo el sabio es rico","detalle":"La acumulación ilimitada no equivale a suficiencia ni a virtud."}
    ]
  },
  {
    "id": "Foucault - Vigilar y castigar",
    "autor": "Foucault",
    "titulo": "Vigilar y castigar: Nacimiento de la prisión",
    "categoria": "crítica",
    "estado": "recomendada",
    "lectura": "Pendiente; no se ha documentado lectura",
    "edicion": "Obra original de 1975; edición del ejemplar digital por identificar",
    "url": "https://archive.org/details/FoucaultVigilarYCastigar"
  },
  {
    "id": "Illouz - Intimidades congeladas",
    "autor": "Illouz",
    "titulo": "Intimidades congeladas",
    "categoria": "crítica",
    "estado": "recomendada",
    "lectura": "Pendiente"
  },
  {
    "id": "Illouz - El consumo de la utopía romántica",
    "autor": "Illouz",
    "titulo": "El consumo de la utopía romántica",
    "categoria": "crítica",
    "estado": "recomendada",
    "lectura": "Pendiente",
    "edicion": "Katz Editores, 2009",
    "url": "https://archive.org/details/illouz-eva.-el-consumo-de-la-utopia-romantica-2009"
  },
  {
    "id": "Lukács - Historia y conciencia de clase",
    "autor": "Lukács",
    "titulo": "Historia y conciencia de clase",
    "categoria": "crítica",
    "estado": "documentada",
    "lectura": "Fragmento documentado"
  },
  {
    "id": "Lukács - Marx, ontología del ser social",
    "autor": "Lukács",
    "titulo": "Marx, ontología del ser social",
    "categoria": "crítica",
    "estado": "recomendada",
    "lectura": "Fases 1–6 documentadas sobre la fuente disponible · comparación parcial",
    "edicion": "Akal, 2007",
    "url": "https://archive.org/details/lukacs-gyorgy-marx-ontologia-del-ser-social-akal-ediciones-sa-2007",
    "studyUrl": "/estudios/teoria-critica/lukacs-ontologia-ser-social"
  },
  {
    "id": "Marx - El capital - Tomo I - Scaron 2008",
    "autor": "Marx",
    "titulo": "El capital - Tomo I - Scaron 2008",
    "categoria": "crítica",
    "estado": "documentada"
  },
  {
    "id": "Marx - Manuscritos económico-filosóficos de 1844",
    "autor": "Marx",
    "titulo": "Manuscritos económico-filosóficos de 1844",
    "categoria": "crítica",
    "estado": "documentada"
  },
  {
    "id": "Reale y Antiseri - Escuela de Frankfurt",
    "autor": "Reale y Antiseri",
    "titulo": "Escuela de Frankfurt",
    "categoria": "crítica",
    "estado": "documentada"
  },
  {
    "id": "Aristóteles - Metafísica - Libro IV",
    "autor": "Aristóteles",
    "titulo": "Metafísica - Libro IV",
    "categoria": "ontología",
    "estado": "documentada"
  },
  {
    "id": "Aristóteles - Metafísica - Libro VII",
    "autor": "Aristóteles",
    "titulo": "Metafísica - Libro VII",
    "categoria": "ontología",
    "estado": "documentada"
  },
  {
      "id": "Platón - Cármides",
      "autor": "Platón",
      "titulo": "Cármides",
      "categoria": "ética",
      "estado": "documentada",
      "lectura": "153a–157d comentados; no lectura íntegra",
      "edicion": "W. R. M. Lamb (trad.), 1927",
      "url": "https://atlas.perseus.tufts.edu/library/passage/urn%3Acts%3AgreekLit%3Atlg0059.tlg018.perseus-eng2%3A153-157/"
  },
  {
      "id": "Platón - Leyes",
      "autor": "Platón",
      "titulo": "Leyes",
      "categoria": "ética",
      "estado": "referenciada",
      "lectura": "IV, 720a–e localizado, no lectura acreditada",
      "edicion": "Leyes, libro IV",
      "url": "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0166%3Abook%3D4"
  },
  {
      "id": "Platón - Banquete",
      "autor": "Platón",
      "titulo": "Banquete",
      "categoria": "ética",
      "estado": "mencionada",
      "lectura": "Comparación con Alcibíades; no lectura acreditada",
      "edicion": "215a–222b",
      "url": "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.04.0090%3Atext%3Dintro%3Asection%3D1"
  },
  {
      "id": "Platón - República",
      "autor": "Platón",
      "titulo": "República",
      "categoria": "ética",
      "estado": "contexto",
      "lectura": "Verificación externa: libro V, 451d–457b; no lectura de clase",
      "edicion": "Shorey (trad.), 1935–1937",
      "url": "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0168%3Abook%3D5"
  },
  {
      "id": "Hipócrates - Sobre la dieta",
      "autor": "Hipócrates",
      "titulo": "Sobre la dieta",
      "categoria": "ética",
      "estado": "mencionada",
      "lectura": "Referencia oral; cuatro libros no leídos en clase",
      "edicion": "Tratados hipocráticos III, Gredos, 1997",
      "url": "https://books.google.com/books/about/Tratados_hipocr%C3%A1ticos.html?id=6gBsswEACAAJ"
  },
  {
    "id": "Luciano - El banquete o los lapitas",
    "autor": "Luciano de Samósata",
    "titulo": "El banquete o los lapitas",
    "categoria": "ética",
    "estado": "documentada",
    "lectura": "§§27–48 leídos en clase",
    "edicion": "Trad. Andrés Espinosa Alarcón · texto bilingüe",
    "url": "https://archive.org/details/luciano-17-u-el-banquete-o-los-lapitas/page/n18/mode/1up"
  },
  {
    "id": "Aristóteles - Ética Nicomáquea",
    "autor": "Aristóteles",
    "titulo": "Ética Nicomáquea",
    "categoria": "ética",
    "estado": "documentada"
  },
  {
    "id": "Croce - Lo vivo y lo muerto de la filosofía de Hegel",
    "autor": "Croce",
    "titulo": "Lo vivo y lo muerto de la filosofía de Hegel",
    "categoria": "ontología",
    "estado": "documentada"
  },
  {
    "id": "Descartes - Discurso del método",
    "autor": "Descartes",
    "titulo": "Discurso del método",
    "categoria": "ontología",
    "estado": "documentada"
  },
  {
    "id": "Descartes - Meditaciones metafísicas",
    "autor": "Descartes",
    "titulo": "Meditaciones metafísicas",
    "categoria": "ontología",
    "estado": "documentada"
  },
  {
    "id": "Hartmann - La filosofía del idealismo alemán - Tomo I",
    "autor": "Hartmann",
    "titulo": "La filosofía del idealismo alemán - Tomo I",
    "categoria": "ontología",
    "estado": "documentada"
  },
  {
    "id": "Hegel - Ciencia de la lógica",
    "autor": "Hegel",
    "titulo": "Ciencia de la lógica",
    "categoria": "ontología",
    "estado": "documentada"
  },
  {
    "id": "Hegel - Fenomenología del espíritu",
    "autor": "Hegel",
    "titulo": "Fenomenología del espíritu",
    "categoria": "ontología",
    "estado": "documentada"
  },
  {
    "id": "Henrich - Hegel en su contexto",
    "autor": "Henrich",
    "titulo": "Hegel en su contexto",
    "categoria": "ontología",
    "estado": "documentada"
  },
  {
    "id": "Kant - Crítica de la razón pura - Ribas",
    "autor": "Kant",
    "titulo": "Crítica de la razón pura - Ribas",
    "categoria": "ontología",
    "estado": "documentada"
  },
  {
    "id": "Leibniz - Discurso de metafísica",
    "autor": "Leibniz",
    "titulo": "Discurso de metafísica",
    "categoria": "ontología",
    "estado": "documentada"
  },
  {
    "id": "Leibniz - Monadología",
    "autor": "Leibniz",
    "titulo": "Monadología",
    "categoria": "ontología",
    "estado": "documentada"
  },
  {
    "id": "Parménides - Poema - Fragmento B8",
    "autor": "Parménides",
    "titulo": "Poema - Fragmento B8",
    "categoria": "ontología",
    "estado": "documentada"
  },
  {
    "id": "Platón - Parménides",
    "autor": "Platón",
    "titulo": "Parménides",
    "categoria": "ontología",
    "estado": "documentada"
  },
  {
    "id": "Platón - Sofista",
    "autor": "Platón",
    "titulo": "Sofista",
    "categoria": "ontología",
    "estado": "documentada"
  },
  {
    "id": "Spinoza - Ética demostrada según el orden geométrico - Vidal Peña",
    "autor": "Spinoza",
    "titulo": "Ética demostrada según el orden geométrico - Vidal Peña",
    "categoria": "ontología",
    "estado": "documentada"
  },
  {
    "id": "Tomás de Aquino - Del ente y de la esencia",
    "autor": "Tomás de Aquino",
    "titulo": "Del ente y de la esencia",
    "categoria": "ontología",
    "estado": "documentada"
  },
  {
    "id": "Frege - Sobre sentido y referencia",
    "autor": "Frege",
    "titulo": "Sobre sentido y referencia",
    "categoria": "analítica",
    "estado": "documentada"
  },
  {
    "id": "Føllesdal - Filosofía analítica - qué es y por qué involucrarse",
    "autor": "Føllesdal",
    "titulo": "Filosofía analítica - qué es y por qué involucrarse",
    "categoria": "analítica",
    "estado": "documentada"
  },
  {
    "id": "Glock - Qué es la filosofía analítica - Capítulo II",
    "autor": "Glock",
    "titulo": "Qué es la filosofía analítica - Capítulo II",
    "categoria": "analítica",
    "estado": "documentada",
    "lectura": "pp. 40–51 documentadas; quedan pendientes pp. 52–86",
    "studyUrl": "/semestre/5/filosofia-analitica/lectura/glock-capitulo-2"
  },
  {
    "id": "Hacker - El surgimiento de la filosofía analítica del siglo XX",
    "autor": "Hacker",
    "titulo": "El surgimiento de la filosofía analítica del siglo XX",
    "categoria": "analítica",
    "estado": "documentada"
  },
  {
    "id": "Moore - The Refutation of Idealism",
    "autor": "Moore",
    "titulo": "The Refutation of Idealism",
    "categoria": "analítica",
    "estado": "documentada"
  },
  {
    "id": "Peirce - La fijación de la creencia",
    "autor": "Peirce",
    "titulo": "La fijación de la creencia",
    "categoria": "analítica",
    "estado": "documentada"
  },
  {
    "id": "Quine - Dos dogmas del empirismo",
    "autor": "Quine",
    "titulo": "Dos dogmas del empirismo",
    "categoria": "analítica",
    "estado": "documentada"
  },
  {
    "id": "Strawson - Sobre el referir",
    "autor": "Strawson",
    "titulo": "Sobre el referir",
    "categoria": "analítica",
    "estado": "documentada"
  },
  {
    "id": "Wittgenstein - Investigaciones filosóficas",
    "autor": "Wittgenstein",
    "titulo": "Investigaciones filosóficas",
    "categoria": "analítica",
    "estado": "documentada"
  },
  {
    "id": "Wittgenstein - Tractatus logico-philosophicus",
    "autor": "Wittgenstein",
    "titulo": "Tractatus logico-philosophicus",
    "categoria": "analítica",
    "estado": "documentada"
  },
  {
    "id": "Audi - Fundacionismo contemporáneo",
    "autor": "Audi",
    "titulo": "Fundacionismo contemporáneo",
    "categoria": "epistemología",
    "estado": "documentada"
  },
  {
    "id": "BonJour - Puede el conocimiento empírico tener un fundamento",
    "autor": "BonJour",
    "titulo": "Puede el conocimiento empírico tener un fundamento",
    "categoria": "epistemología",
    "estado": "documentada"
  },
  {
    "id": "BonJour - Teoría coherentista del conocimiento empírico",
    "autor": "BonJour",
    "titulo": "Teoría coherentista del conocimiento empírico",
    "categoria": "epistemología",
    "estado": "documentada"
  },
  {
    "id": "Code - Hacia una epistemología de la responsabilidad",
    "autor": "Code",
    "titulo": "Hacia una epistemología de la responsabilidad",
    "categoria": "epistemología",
    "estado": "documentada"
  },
  {
    "id": "Eraña - Sobre la viabilidad de una epistemología empírica y normativa",
    "autor": "Eraña",
    "titulo": "Sobre la viabilidad de una epistemología empírica y normativa",
    "categoria": "epistemología",
    "estado": "documentada"
  },
  {
    "id": "Fumerton - Una crítica al coherentismo",
    "autor": "Fumerton",
    "titulo": "Una crítica al coherentismo",
    "categoria": "epistemología",
    "estado": "documentada"
  },
  {
    "id": "Goldman - Qué es una creencia justificada",
    "autor": "Goldman",
    "titulo": "Qué es una creencia justificada",
    "categoria": "epistemología",
    "estado": "documentada"
  },
  {
    "id": "Hartnack - La teoría del conocimiento de Kant",
    "autor": "Hartnack",
    "titulo": "La teoría del conocimiento de Kant",
    "categoria": "epistemología",
    "estado": "documentada"
  },
  {
    "id": "Kornblith - Internismo y externismo - breve introducción histórica",
    "autor": "Kornblith",
    "titulo": "Internismo y externismo - breve introducción histórica",
    "categoria": "epistemología",
    "estado": "documentada"
  },
  {
    "id": "Zagzebski - La naturaleza y los componentes de las virtudes intelectuales",
    "autor": "Zagzebski",
    "titulo": "La naturaleza y los componentes de las virtudes intelectuales",
    "categoria": "epistemología",
    "estado": "documentada"
  },
  {
    "id": "Mondolfo - La conciencia moral de Homero a Demócrito y Epicuro",
    "autor": "Mondolfo",
    "titulo": "La conciencia moral de Homero a Demócrito y Epicuro",
    "categoria": "ética",
    "estado": "documentada"
  },
  {
    "id": "Moore - Principia Ethica",
    "autor": "Moore",
    "titulo": "Principia Ethica",
    "categoria": "ética",
    "estado": "documentada"
  },
  {
    "id": "Ortega y Gasset - El tema de nuestro tiempo",
    "autor": "Ortega y Gasset",
    "titulo": "El tema de nuestro tiempo",
    "categoria": "ética",
    "estado": "documentada"
  },
  {
    "id": "Ortega y Gasset - Meditaciones del Quijote",
    "autor": "Ortega y Gasset",
    "titulo": "Meditaciones del Quijote",
    "categoria": "ética",
    "estado": "documentada"
  },
  {
    "id": "Rawls - Justicia como equidad",
    "autor": "Rawls",
    "titulo": "Justicia como equidad",
    "categoria": "ética",
    "estado": "documentada"
  },
  {
    "id": "Agazzi - Filosofía de la naturaleza - Ciencia y cosmología",
    "autor": "Agazzi",
    "titulo": "Filosofía de la naturaleza - Ciencia y cosmología",
    "categoria": "investigación",
    "estado": "documentada"
  },
  {
    "id": "Arana - Materia, universo, vida",
    "autor": "Arana",
    "titulo": "Materia, universo, vida",
    "categoria": "investigación",
    "estado": "documentada"
  },
  {
    "id": "Barceló - Introducción a la Investigación Filosófica",
    "autor": "Barceló",
    "titulo": "Introducción a la Investigación Filosófica",
    "categoria": "investigación",
    "estado": "documentada"
  },
  {
    "id": "Lévy - Becoming Virtual",
    "autor": "Lévy",
    "titulo": "Becoming Virtual",
    "categoria": "investigación",
    "estado": "documentada"
  },
  {
    "id": "Pelayo - La verdad como perspectiva en Ortega y Gasset",
    "autor": "Pelayo",
    "titulo": "La verdad como perspectiva en Ortega y Gasset",
    "categoria": "investigación",
    "estado": "documentada"
  },
  {
    "id": "Pelayo - Realismo virtual constructivista",
    "autor": "Pelayo",
    "titulo": "Realismo virtual constructivista",
    "categoria": "investigación",
    "estado": "documentada"
  },
  {
    "id": "Rodríguez - Aspectos epistemológicos de la cosmología contemporánea",
    "autor": "Rodríguez",
    "titulo": "Aspectos epistemológicos de la cosmología contemporánea",
    "categoria": "investigación",
    "estado": "documentada"
  },
  {
    "id": "Russ - Los métodos en filosofía - capítulos 1-3",
    "autor": "Russ",
    "titulo": "Los métodos en filosofía - capítulos 1-3",
    "categoria": "investigación",
    "estado": "documentada"
  },
  {
    "id": "Santos - Introducción a las epistemologías del Sur",
    "autor": "Santos",
    "titulo": "Introducción a las epistemologías del Sur",
    "categoria": "investigación",
    "estado": "documentada"
  },
  {
    "id": "Santos - Los caminos hacia las epistemologías del Sur",
    "autor": "Santos",
    "titulo": "Los caminos hacia las epistemologías del Sur",
    "categoria": "investigación",
    "estado": "documentada"
  },
  {
    "id": "Wainerman y Sautu - La trastienda de la investigación",
    "autor": "Wainerman y Sautu",
    "titulo": "La trastienda de la investigación",
    "categoria": "investigación",
    "estado": "documentada"
  }
]
export const authors = [
  "Adorno, Theodor W.",
  "Agazzi, Evandro",
  "Antiseri, Dario",
  "Antístenes",
  "Arana, Juan",
  "Aristóteles",
  "Audi, Robert",
  "Barceló Aspeitia, Axel Arturo",
  "Bardili, Christoph Gottfried",
  "Beck, Jakob Sigismund",
  "Bentham, Jeremy",
  "Berkeley, George",
  "Bloch, Ernst",
  "Bobbio, Norberto",
  "Bolzano, Bernhard",
  "Boole, George",
  "BonJour, Laurence",
  "Carnap, Rudolf",
  "Cicerón, Marco Tulio",
  "Code, Lorraine",
  "Cohen, Hermann",
  "Comte, Auguste",
  "Croce, Benedetto",
  "Demócrito",
  "Descartes, René",
  "Dilthey, Wilhelm",
  "Diógenes de Sinope",
  "Dummett, Michael",
  "Engels, Friedrich",
  "Eraña, Ángeles",
  "Esquilo",
  "Fichte, Johann Gottlieb",
  "Foucault, Michel",
  "Føllesdal, Dagfinn",
  "Frege, Gottlob",
  "Freud, Sigmund",
  "Fromm, Erich",
  "Fumerton, Richard",
  "Glock, Hans-Johann",
  "Gödel, Kurt",
  "Goldman, Alvin I.",
  "Hacker, Peter M. S.",
  "Hartmann, Nicolai",
  "Hartnack, Justus",
  "Hegel, G. W. F.",
  "Heidegger, Martin",
  "Henrich, Dieter",
  "Hesíodo",
  "Hipócrates",
  "Homero",
  "Horkheimer, Max",
  "Hume, David",
  "Husserl, Edmund",
  "Illouz, Eva",
  "Jacobi, Friedrich Heinrich",
  "Kant, Immanuel",
  "Kornblith, Hilary",
  "Kuhn, Thomas",
  "Leibniz, G. W.",
  "Lévy, Pierre",
  "Locke, John",
  "Luciano de Samósata",
  "Lukács, Georg",
  "Maimon, Salomon",
  "Marx, Karl",
  "Mondolfo, Rodolfo",
  "Moore, G. E.",
  "Nava Amezcua, Alonso",
  "Nietzsche, Friedrich",
  "Ortega y Gasset, José",
  "Parménides",
  "Peirce, Charles Sanders",
  "Platón",
  "Popper, Karl",
  "Quine, W. V. O.",
  "Rawls, John",
  "Reale, Giovanni",
  "Reinhold, Karl Leonhard",
  "Rendón, Carlos",
  "Rodríguez Pelayo, Cristian Alejandro",
  "Rodríguez, Víctor",
  "Rorty, Richard",
  "Russ, Jacqueline",
  "Russell, Bertrand",
  "Safo",
  "Santos, Boaventura de Sousa",
  "Sautu, Ruth",
  "Schelling, Friedrich Wilhelm Joseph",
  "Schlick, Moritz",
  "Schulze, Gottlob Ernst",
  "Sócrates",
  "Spinoza, Baruch",
  "Strawson, P. F.",
  "Tarski, Alfred",
  "Tomás de Aquino",
  "Wainerman, Catalina",
  "Waismann, Friedrich",
  "Wittgenstein, Ludwig",
  "Zagzebski, Linda"
]
export const categories = ["crítica","ontología","analítica","epistemología","ética","política","investigación"]
