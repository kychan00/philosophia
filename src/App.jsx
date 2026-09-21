import { lazy, Suspense } from 'react'

import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router'

import ScrollToTop from './components/ScrollToTop'
import AcademicNotifications from './components/AcademicNotifications'

const AnaliticaClase7Septiembre = lazy(() => import('./pages/AnaliticaClase7Septiembre'))
const AnalyticClass09Sep = lazy(() => import('./pages/AnalyticClass09Sep'))
const AnalyticClass14Sep = lazy(() => import('./pages/AnalyticClass14Sep'))
const Home = lazy(() => import('./pages/Home'))
const CafeFilosofico = lazy(() => import('./pages/CafeFilosofico'))
const CafeCapitalismoEvent = lazy(() => import('./pages/CafeCapitalismoEvent'))
const CafeMeritocraciaEvent = lazy(() => import('./pages/CafeMeritocraciaEvent'))
const FourthSemester = lazy(() => import('./pages/FourthSemester'))
const PhilosophyLogic = lazy(() => import('./pages/PhilosophyLogic'))
const PhilosophyLogicClass01 = lazy(() => import('./pages/PhilosophyLogicClass01'))
const PhilosophyLogicClass02 = lazy(() => import('./pages/PhilosophyLogicClass02'))
const PhilosophyLogicClass03 = lazy(() => import('./pages/PhilosophyLogicClass03'))
const PhilosophyLogicClass04 = lazy(() => import('./pages/PhilosophyLogicClass04'))
const PhilosophyLogicClass05 = lazy(() => import('./pages/PhilosophyLogicClass05'))
const PhilosophyLogicClass06 = lazy(() => import('./pages/PhilosophyLogicClass06'))
const PhilosophyLogicClass07 = lazy(() => import('./pages/PhilosophyLogicClass07'))
const PhilosophyLogicClass08 = lazy(() => import('./pages/PhilosophyLogicClass08'))
const PhilosophyLogicClass09 = lazy(() => import('./pages/PhilosophyLogicClass09'))
const PhilosophyLogicClass10 = lazy(() => import('./pages/PhilosophyLogicClass10'))
const PhilosophyLogicClass11 = lazy(() => import('./pages/PhilosophyLogicClass11'))
const PhilosophyLogicClass12 = lazy(() => import('./pages/PhilosophyLogicClass12'))
const PhilosophyLogicClass13 = lazy(() => import('./pages/PhilosophyLogicClass13'))
const PhilosophyLogicClass14 = lazy(() => import('./pages/PhilosophyLogicClass14'))
const PhilosophyLogicClass15 = lazy(() => import('./pages/PhilosophyLogicClass15'))
const PhilosophyLogicClass16 = lazy(() => import('./pages/PhilosophyLogicClass16'))
const PhilosophyLogicClass17 = lazy(() => import('./pages/PhilosophyLogicClass17'))
const PhilosophyLogicClass18 = lazy(() => import('./pages/PhilosophyLogicClass18'))
const PhilosophyLogicClass19 = lazy(() => import('./pages/PhilosophyLogicClass19'))
const PhilosophyLogicClass20 = lazy(() => import('./pages/PhilosophyLogicClass20'))
const PhilosophyLogicClass21 = lazy(() => import('./pages/PhilosophyLogicClass21'))
const PhilosophyLogicClass22 = lazy(() => import('./pages/PhilosophyLogicClass22'))
const PhilosophyLogicClass23 = lazy(() => import('./pages/PhilosophyLogicClass23'))
const FifthSemester = lazy(() => import('./pages/FifthSemester'))
const OntologiaII = lazy(() => import('./pages/OntologiaII'))
const OntologiaClass17Aug = lazy(() => import('./pages/OntologiaClass17Aug'))
const OntologiaClass19Aug = lazy(() => import('./pages/OntologiaClass19Aug'))
const OntologiaClass24Aug = lazy(() => import('./pages/OntologiaClass24Aug'))
const OntologiaClass26Aug = lazy(() => import('./pages/OntologiaClass26Aug'))
const OntologiaClass02Sep = lazy(() => import('./pages/OntologiaClass02Sep'))
const OntologiaClass07Sep = lazy(() => import('./pages/OntologiaClass07Sep'))
const OntologiaClass09Sep = lazy(() => import('./pages/OntologiaClass09Sep'))
const OntologiaClass14Sep = lazy(() => import('./pages/OntologiaClass14Sep'))
const KantPrefacesMap = lazy(() => import('./pages/KantPrefacesMap'))
const KantIntroductionMap = lazy(() => import('./pages/KantIntroductionMap'))
const KantAestheticMap = lazy(() => import('./pages/KantAestheticMap'))
const KantAnalyticSystem = lazy(() => import('./pages/KantAnalyticSystem'))
const MethodsResearch = lazy(() => import('./pages/MethodsResearch'))
const MethodsClass17Aug = lazy(() => import('./pages/MethodsClass17Aug'))
const MethodsClass19Aug = lazy(() => import('./pages/MethodsClass19Aug'))
const MethodsClass24Aug = lazy(() => import('./pages/MethodsClass24Aug'))
const MethodsClass31Aug = lazy(() => import('./pages/MethodsClass31Aug'))
const MethodsClass02Sep = lazy(() => import('./pages/MethodsClass02Sep'))
const MethodsClass07Sep = lazy(() => import('./pages/MethodsClass07Sep'))
const MethodsClass14Sep = lazy(() => import('./pages/MethodsClass14Sep'))
const MethodsRussSystem2D = lazy(() => import('./pages/MethodsRussSystem2D'))
const AnalyticPhilosophy = lazy(() => import('./pages/AnalyticPhilosophy'))
const AnalyticClass17Aug = lazy(() => import('./pages/AnalyticClass17Aug'))
const AnalyticClass19Aug = lazy(() => import('./pages/AnalyticClass19Aug'))
const AnalyticClass24Aug = lazy(() => import('./pages/AnalyticClass24Aug'))
const AnalyticClass31Aug = lazy(() => import('./pages/AnalyticClass31Aug'))
const AnalyticClass02Sep = lazy(() => import('./pages/AnalyticClass02Sep'))
const AnalyticFollesdalMap = lazy(() => import('./pages/AnalyticFollesdalMap'))
const CriticalTheory = lazy(() => import('./pages/CriticalTheory'))
const CriticalTheoryTask1 = lazy(() => import('./pages/CriticalTheoryTask1'))
const CriticalTheoryClass18Aug = lazy(() => import('./pages/CriticalTheoryClass18Aug'))
const CriticalTheoryClass20Aug = lazy(() => import('./pages/CriticalTheoryClass20Aug'))
const CriticalTheoryClass25Aug = lazy(() => import('./pages/CriticalTheoryClass25Aug'))
const CriticalTheoryClass27Aug = lazy(() => import('./pages/CriticalTheoryClass27Aug'))
const CriticalTheoryClass01Sep = lazy(() => import('./pages/CriticalTheoryClass01Sep'))
const CriticalTheoryClass03Sep = lazy(() => import('./pages/CriticalTheoryClass03Sep'))
const CriticalTheoryClass10Sep = lazy(() => import('./pages/CriticalTheoryClass10Sep'))
const EthicsClassics = lazy(() => import('./pages/EthicsClassics'))
const EthicsClass18Aug = lazy(() => import('./pages/EthicsClass18Aug'))
const EthicsClass20Aug = lazy(() => import('./pages/EthicsClass20Aug'))
const EthicsClass25Aug = lazy(() => import('./pages/EthicsClass25Aug'))
const EthicsClass27Aug = lazy(() => import('./pages/EthicsClass27Aug'))
const EthicsClass01Sep = lazy(() => import('./pages/EthicsClass01Sep'))
const EthicsClass03Sep = lazy(() => import('./pages/EthicsClass03Sep'))
const EthicsClass10Sep = lazy(() => import('./pages/EthicsClass10Sep'))
const TasksBoard = lazy(() => import('./pages/TasksBoard'))
const SpinozaEthicsStudy = lazy(() => import('./pages/SpinozaEthicsStudy'))
const LeibnizStudy = lazy(() => import('./pages/LeibnizStudy'))
const LeibnizTaskHub = lazy(() => import('./pages/LeibnizTaskHub'))
const LeibnizMaps = lazy(() => import('./pages/LeibnizMaps'))
const SpinozaFigures = lazy(() => import('./pages/SpinozaFigures'))
const SpinozaFigures3D = lazy(() => import('./pages/SpinozaFigures3D'))

const FrankfurtTaskHub = lazy(() => import('./pages/FrankfurtTaskHub'))
const FrankfurtMaps = lazy(() => import('./pages/FrankfurtMaps'))
const FrankfurtSystem = lazy(() => import('./pages/FrankfurtSystem'))
const FrankfurtStudy = lazy(() => import('./pages/FrankfurtStudy'))
const FrankfurtConcepts = lazy(() => import('./pages/FrankfurtConcepts'))
const MondolfoEthicsTask = lazy(() => import('./pages/MondolfoEthicsTask'))
function App() {
  const isPublicCafeRoute =
    typeof window !== 'undefined' &&
    window.location.hash.startsWith('#/cafe-filosofico')

  return (
    <HashRouter>
      <ScrollToTop />
      {!isPublicCafeRoute && (<AcademicNotifications  />)}
      <Suspense
        fallback={
          <div className="route-loading" role="status" aria-live="polite">
            <span className="route-loading-mark">Φ</span>
            <span>Cargando Philosophia…</span>
          </div>
        }
      >
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cafe-filosofico" element={<CafeFilosofico />} />
        <Route
          path="/cafe-filosofico/2026/09/07/fin-del-mundo-fin-del-capitalismo"
          element={<CafeCapitalismoEvent />}
        />
        <Route
          path="/cafe-filosofico/2026/09/22/meritocracia"
          element={<CafeMeritocraciaEvent />}
        />
        <Route path="/semestre/4" element={<FourthSemester />} />
        <Route
          path="/semestre/4/filosofia-de-la-logica"
          element={<PhilosophyLogic />}
        />
        <Route
          path="/semestre/4/filosofia-de-la-logica/clase/19-enero"
          element={<PhilosophyLogicClass01 />}
        />
                <Route
          path="/semestre/4/filosofia-de-la-logica/clase/21-enero"
          element={<PhilosophyLogicClass02 />}
        />
        <Route
          path="/semestre/4/filosofia-de-la-logica/clase/26-enero"
          element={<PhilosophyLogicClass03 />}
        />
        <Route
          path="/semestre/4/filosofia-de-la-logica/clase/04-febrero"
          element={<PhilosophyLogicClass04 />}
        />
        <Route
          path="/semestre/4/filosofia-de-la-logica/clase/09-febrero"
          element={<PhilosophyLogicClass05 />}
        />
        <Route
          path="/semestre/4/filosofia-de-la-logica/clase/11-febrero"
          element={<PhilosophyLogicClass06 />}
        />
        <Route
          path="/semestre/4/filosofia-de-la-logica/clase/16-febrero"
          element={<PhilosophyLogicClass07 />}
        />
        <Route
          path="/semestre/4/filosofia-de-la-logica/clase/18-febrero"
          element={<PhilosophyLogicClass08 />}
        />
        <Route
          path="/semestre/4/filosofia-de-la-logica/clase/02-marzo"
          element={<PhilosophyLogicClass09 />}
        />
        <Route
          path="/semestre/4/filosofia-de-la-logica/clase/09-marzo"
          element={<PhilosophyLogicClass10 />}
        />
        <Route
          path="/semestre/4/filosofia-de-la-logica/clase/11-marzo"
          element={<PhilosophyLogicClass11 />}
        />
        <Route
          path="/semestre/4/filosofia-de-la-logica/clase/18-marzo"
          element={<PhilosophyLogicClass12 />}
        />
        <Route
          path="/semestre/4/filosofia-de-la-logica/clase/23-marzo"
          element={<PhilosophyLogicClass13 />}
        />
        <Route
          path="/semestre/4/filosofia-de-la-logica/clase/13-abril"
          element={<PhilosophyLogicClass14 />}
        />
        <Route
          path="/semestre/4/filosofia-de-la-logica/clase/15-abril"
          element={<PhilosophyLogicClass15 />}
        />
        <Route
          path="/semestre/4/filosofia-de-la-logica/clase/20-abril"
          element={<PhilosophyLogicClass16 />}
        />
        <Route
          path="/semestre/4/filosofia-de-la-logica/clase/22-abril"
          element={<PhilosophyLogicClass17 />}
        />
        <Route
          path="/semestre/4/filosofia-de-la-logica/clase/27-abril"
          element={<PhilosophyLogicClass18 />}
        />
        <Route
          path="/semestre/4/filosofia-de-la-logica/clase/29-abril"
          element={<PhilosophyLogicClass19 />}
        />
        <Route
          path="/semestre/4/filosofia-de-la-logica/clase/04-mayo"
          element={<PhilosophyLogicClass20 />}
        />
        <Route
          path="/semestre/4/filosofia-de-la-logica/clase/06-mayo"
          element={<PhilosophyLogicClass21 />}
        />
        <Route
          path="/semestre/4/filosofia-de-la-logica/clase/11-mayo"
          element={<PhilosophyLogicClass22 />}
        />
        <Route
          path="/semestre/4/filosofia-de-la-logica/clase/18-mayo"
          element={<PhilosophyLogicClass23 />}
        />
        <Route path="/semestre/5" element={<FifthSemester />} />
        <Route
          path="/semestre/5/ontologia-ii"
          element={<OntologiaII />}
        />
        <Route
          path="/semestre/5/ontologia-ii/clase/17-agosto"
          element={<OntologiaClass17Aug />}
        />
        <Route
          path="/semestre/5/ontologia-ii/clase/19-agosto"
          element={<OntologiaClass19Aug />}
        />
        <Route
          path="/semestre/5/ontologia-ii/clase/24-agosto"
          element={<OntologiaClass24Aug />}
        />
        <Route
          path="/semestre/5/ontologia-ii/clase/26-agosto"
          element={<OntologiaClass26Aug />}
        />
        <Route
          path="/semestre/5/ontologia-ii/clase/2-septiembre"
          element={<OntologiaClass02Sep />}
        />
        <Route
          path="/semestre/5/ontologia-ii/clase/7-septiembre"
          element={<OntologiaClass07Sep />}
        />
        <Route
          path="/semestre/5/ontologia-ii/clase/9-septiembre"
          element={<OntologiaClass09Sep />}
        />
        <Route
          path="/semestre/5/ontologia-ii/clase/14-septiembre"
          element={<OntologiaClass14Sep />}
        />
        <Route
          path="/tareas/ontologia-ii/kant-critica-razon-pura-prologos"
          element={<KantPrefacesMap />}
        />
        <Route
          path="/semestre/5/metodos-de-investigacion"
          element={<MethodsResearch />}
        />
        <Route
          path="/semestre/5/metodos-de-investigacion/clase/17-agosto"
          element={<MethodsClass17Aug />}
        />
        <Route
          path="/tareas"
          element={<TasksBoard />}
        />
        <Route
          path="/semestre/5/metodos-de-investigacion/clase/19-agosto"
          element={<MethodsClass19Aug />}
        />
        <Route
          path="/semestre/5/metodos-de-investigacion/clase/24-agosto"
          element={<MethodsClass24Aug />}
        />
        <Route
          path="/semestre/5/metodos-de-investigacion/clase/31-agosto"
          element={<MethodsClass31Aug />}
        />
        <Route
          path="/semestre/5/metodos-de-investigacion/clase/2-septiembre"
          element={<MethodsClass02Sep />}
        />
        <Route
          path="/semestre/5/metodos-de-investigacion/clase/7-septiembre"
          element={<MethodsClass07Sep />}
        />
        <Route
          path="/semestre/5/metodos-de-investigacion/clase/14-septiembre"
          element={<MethodsClass14Sep />}
        />
        <Route
          path="/tareas/metodos-de-investigacion/jacqueline-russ-capitulos-1-3"
          element={<MethodsRussSystem2D />}
        />
        <Route
          path="/semestre/5/filosofia-analitica"
          element={<AnalyticPhilosophy />}
        />
        <Route
          path="/semestre/5/filosofia-analitica/clase/17-agosto"
          element={<AnalyticClass17Aug />}
        />
        <Route
          path="/semestre/5/filosofia-analitica/clase/19-agosto"
          element={<AnalyticClass19Aug />}
        />
        <Route
          path="/semestre/5/filosofia-analitica/clase/24-agosto"
          element={<AnalyticClass24Aug />}
        />
        <Route
          path="/semestre/5/filosofia-analitica/clase/31-agosto"
          element={<AnalyticClass31Aug />}
        />
        <Route
          path="/semestre/5/filosofia-analitica/clase/2-septiembre"
          element={<AnalyticClass02Sep />}
        />
        <Route
          path="/semestre/5/filosofia-analitica/clase/9-septiembre"
          element={<AnalyticClass09Sep />}
        />
        <Route
          path="/semestre/5/filosofia-analitica/clase/14-septiembre"
          element={<AnalyticClass14Sep />}
        />

        <Route
          path="/semestre/5/filosofia-analitica/reporte/follesdal"
          element={<AnalyticFollesdalMap />}
        />
        <Route
          path="/semestre/5/teoria-critica"
          element={<CriticalTheory />}
        />
        <Route
          path="/tareas/teoria-critica/tarea-1"
          element={<CriticalTheoryTask1 />}
        />
        <Route
          path="/semestre/5/teoria-critica/clase/18-agosto"
          element={<CriticalTheoryClass18Aug />}
        />
        <Route
          path="/semestre/5/teoria-critica/clase/20-agosto"
          element={<CriticalTheoryClass20Aug />}
        />
        <Route
          path="/semestre/5/teoria-critica/clase/25-agosto"
          element={<CriticalTheoryClass25Aug />}
        />
        <Route
          path="/semestre/5/teoria-critica/clase/27-agosto"
          element={<CriticalTheoryClass27Aug />}
        />
        <Route
          path="/semestre/5/teoria-critica/clase/1-septiembre"
          element={<CriticalTheoryClass01Sep />}
        />
        <Route
          path="/semestre/5/teoria-critica/clase/3-septiembre"
          element={<CriticalTheoryClass03Sep />}
        />
        <Route
          path="/semestre/5/teoria-critica/clase/10-septiembre"
          element={<CriticalTheoryClass10Sep />}
        />
        <Route
          path="/semestre/5/etica"
          element={<EthicsClassics />}
        />
        <Route
          path="/semestre/5/etica/clase/18-agosto"
          element={<EthicsClass18Aug />}
        />
        <Route
          path="/semestre/5/etica/clase/20-agosto"
          element={<EthicsClass20Aug />}
        />
        <Route
          path="/semestre/5/etica/clase/25-agosto"
          element={<EthicsClass25Aug />}
        />
        <Route
          path="/semestre/5/etica/clase/27-agosto"
          element={<EthicsClass27Aug />}
        />
        <Route
          path="/semestre/5/etica/clase/1-septiembre"
          element={<EthicsClass01Sep />}
        />
        <Route
          path="/semestre/5/etica/clase/3-septiembre"
          element={<EthicsClass03Sep />}
        />
        <Route
          path="/semestre/5/etica/clase/10-septiembre"
          element={<EthicsClass10Sep />}
        />
        <Route
          path="/tareas/ontologia-ii/spinoza-etica-parte-i"
          element={<SpinozaEthicsStudy />}
        />
        <Route
          path="/tareas/ontologia-ii/leibniz-discurso-monadologia"
          element={<LeibnizTaskHub />}
        />
        <Route
          path="/tareas/ontologia-ii/leibniz-discurso-monadologia/mapas"
          element={<LeibnizMaps />}
        />
        <Route
          path="/tareas/ontologia-ii/leibniz-discurso-monadologia/studium"
          element={<LeibnizStudy />}
        />
        <Route
          path="/tareas/ontologia-ii/spinoza-etica-parte-i/figuras"
          element={<SpinozaFigures />}
        />
        <Route
          path="/tareas/ontologia-ii/spinoza-etica-parte-i/figuras/3d"
          element={<SpinozaFigures3D />}
        />
                <Route
          path="/tareas/teoria-critica/escuela-de-frankfurt"
          element={<FrankfurtTaskHub />}
        />
        <Route
          path="/tareas/teoria-critica/escuela-de-frankfurt/mapas"
          element={<FrankfurtMaps />}
        />
        <Route
          path="/tareas/teoria-critica/escuela-de-frankfurt/sistema"
          element={<FrankfurtSystem />}
        />
        <Route
          path="/tareas/teoria-critica/escuela-de-frankfurt/studium"
          element={<FrankfurtStudy />}
        />
        <Route
          path="/tareas/teoria-critica/escuela-de-frankfurt/conceptos"
          element={<FrankfurtConcepts />}
        />
        <Route
          path="/tareas/etica/mondolfo-conciencia-moral"
          element={<MondolfoEthicsTask />}
        />
<Route path="*" element={<Navigate to="/" replace />} />
                  <Route path="/tareas/ontologia-ii/kant-critica-razon-pura-introduccion" element={<KantIntroductionMap />} />
                  <Route
                    path="/tareas/ontologia-ii/kant-critica-razon-pura-estetica-trascendental"
                    element={<KantAestheticMap />}
                  />
                  <Route
                    path="/tareas/ontologia-ii/kant-analitica-trascendental"
                    element={<KantAnalyticSystem />}
                  />
                  <Route path="/semestre/5/filosofia-analitica/clase/7-septiembre" element={<AnaliticaClase7Septiembre />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
