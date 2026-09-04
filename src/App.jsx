import { lazy, Suspense } from 'react'

import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router'

import ScrollToTop from './components/ScrollToTop'
import AcademicNotifications from './components/AcademicNotifications'

const Home = lazy(() => import('./pages/Home'))
const FifthSemester = lazy(() => import('./pages/FifthSemester'))
const OntologiaII = lazy(() => import('./pages/OntologiaII'))
const OntologiaClass17Aug = lazy(() => import('./pages/OntologiaClass17Aug'))
const OntologiaClass19Aug = lazy(() => import('./pages/OntologiaClass19Aug'))
const OntologiaClass24Aug = lazy(() => import('./pages/OntologiaClass24Aug'))
const OntologiaClass26Aug = lazy(() => import('./pages/OntologiaClass26Aug'))
const OntologiaClass02Sep = lazy(() => import('./pages/OntologiaClass02Sep'))
const MethodsResearch = lazy(() => import('./pages/MethodsResearch'))
const MethodsClass17Aug = lazy(() => import('./pages/MethodsClass17Aug'))
const MethodsClass19Aug = lazy(() => import('./pages/MethodsClass19Aug'))
const MethodsClass24Aug = lazy(() => import('./pages/MethodsClass24Aug'))
const MethodsClass31Aug = lazy(() => import('./pages/MethodsClass31Aug'))
const MethodsClass02Sep = lazy(() => import('./pages/MethodsClass02Sep'))
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
const EthicsClassics = lazy(() => import('./pages/EthicsClassics'))
const EthicsClass18Aug = lazy(() => import('./pages/EthicsClass18Aug'))
const EthicsClass20Aug = lazy(() => import('./pages/EthicsClass20Aug'))
const EthicsClass25Aug = lazy(() => import('./pages/EthicsClass25Aug'))
const EthicsClass27Aug = lazy(() => import('./pages/EthicsClass27Aug'))
const EthicsClass01Sep = lazy(() => import('./pages/EthicsClass01Sep'))
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
  return (
    <HashRouter>
      <ScrollToTop />
      <AcademicNotifications />

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
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
