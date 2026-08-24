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
import OntologiaClass19Aug from './pages/OntologiaClass19Aug'
import MethodsResearch from './pages/MethodsResearch'
import MethodsClass17Aug from './pages/MethodsClass17Aug'
import MethodsClass19Aug from './pages/MethodsClass19Aug'
import AnalyticPhilosophy from './pages/AnalyticPhilosophy'
import AnalyticClass17Aug from './pages/AnalyticClass17Aug'
import AnalyticClass19Aug from './pages/AnalyticClass19Aug'
import CriticalTheory from './pages/CriticalTheory'
import CriticalTheoryTask1 from './pages/CriticalTheoryTask1'
import CriticalTheoryClass18Aug from './pages/CriticalTheoryClass18Aug'
import CriticalTheoryClass20Aug from './pages/CriticalTheoryClass20Aug'
import EthicsClassics from './pages/EthicsClassics'
import EthicsClass18Aug from './pages/EthicsClass18Aug'
import EthicsClass20Aug from './pages/EthicsClass20Aug'
import TasksBoard from './pages/TasksBoard'
import SpinozaEthicsStudy from './pages/SpinozaEthicsStudy'
import SpinozaFigures from './pages/SpinozaFigures'
import SpinozaFigures3D from './pages/SpinozaFigures3D'
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
          path="/semestre/5/ontologia-ii/clase/19-agosto"
          element={<OntologiaClass19Aug />}
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
    </HashRouter>
  )
}

export default App
