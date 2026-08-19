import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router'

import Home from './pages/Home'
import FifthSemester from './pages/FifthSemester'
import OntologiaII from './pages/OntologiaII'
import OntologiaClass17Aug from './pages/OntologiaClass17Aug'
import MethodsResearch from './pages/MethodsResearch'
import MethodsClass17Aug from './pages/MethodsClass17Aug'
import AnalyticPhilosophy from './pages/AnalyticPhilosophy'
import AnalyticClass17Aug from './pages/AnalyticClass17Aug'
import CriticalTheory from './pages/CriticalTheory'
import CriticalTheoryTask1 from './pages/CriticalTheoryTask1'
import CriticalTheoryClass18Aug from './pages/CriticalTheoryClass18Aug'
import EthicsClassics from './pages/EthicsClassics'
import EthicsClass18Aug from './pages/EthicsClass18Aug'
import TasksBoard from './pages/TasksBoard'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <HashRouter>
      <ScrollToTop />

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
          path="/semestre/5/filosofia-analitica"
          element={<AnalyticPhilosophy />}
        />
        <Route
          path="/semestre/5/filosofia-analitica/clase/17-agosto"
          element={<AnalyticClass17Aug />}
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
          path="/semestre/5/etica"
          element={<EthicsClassics />}
        />
        <Route
          path="/semestre/5/etica/clase/18-agosto"
          element={<EthicsClass18Aug />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}

export default App
