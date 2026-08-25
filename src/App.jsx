import { lazy, Suspense } from 'react'

import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router'

import ScrollToTop from './components/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const FifthSemester = lazy(() => import('./pages/FifthSemester'))
const OntologiaII = lazy(() => import('./pages/OntologiaII'))
const OntologiaClass17Aug = lazy(() => import('./pages/OntologiaClass17Aug'))
const OntologiaClass19Aug = lazy(() => import('./pages/OntologiaClass19Aug'))
const OntologiaClass24Aug = lazy(() => import('./pages/OntologiaClass24Aug'))
const MethodsResearch = lazy(() => import('./pages/MethodsResearch'))
const MethodsClass17Aug = lazy(() => import('./pages/MethodsClass17Aug'))
const MethodsClass19Aug = lazy(() => import('./pages/MethodsClass19Aug'))
const MethodsClass24Aug = lazy(() => import('./pages/MethodsClass24Aug'))
const AnalyticPhilosophy = lazy(() => import('./pages/AnalyticPhilosophy'))
const AnalyticClass17Aug = lazy(() => import('./pages/AnalyticClass17Aug'))
const AnalyticClass19Aug = lazy(() => import('./pages/AnalyticClass19Aug'))
const AnalyticClass24Aug = lazy(() => import('./pages/AnalyticClass24Aug'))
const CriticalTheory = lazy(() => import('./pages/CriticalTheory'))
const CriticalTheoryTask1 = lazy(() => import('./pages/CriticalTheoryTask1'))
const CriticalTheoryClass18Aug = lazy(() => import('./pages/CriticalTheoryClass18Aug'))
const CriticalTheoryClass20Aug = lazy(() => import('./pages/CriticalTheoryClass20Aug'))
const EthicsClassics = lazy(() => import('./pages/EthicsClassics'))
const EthicsClass18Aug = lazy(() => import('./pages/EthicsClass18Aug'))
const EthicsClass20Aug = lazy(() => import('./pages/EthicsClass20Aug'))
const TasksBoard = lazy(() => import('./pages/TasksBoard'))
const SpinozaEthicsStudy = lazy(() => import('./pages/SpinozaEthicsStudy'))
const SpinozaFigures = lazy(() => import('./pages/SpinozaFigures'))
const SpinozaFigures3D = lazy(() => import('./pages/SpinozaFigures3D'))

function App() {
  return (
    <HashRouter>
      <ScrollToTop />

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
          path="/tareas/ontologia-ii/spinoza-etica-parte-i"
          element={<SpinozaEthicsStudy />}
        />
        <Route
          path="/tareas/ontologia-ii/spinoza-etica-parte-i/figuras"
          element={<SpinozaFigures />}
        />
        <Route
          path="/tareas/ontologia-ii/spinoza-etica-parte-i/figuras/3d"
          element={<SpinozaFigures3D />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
