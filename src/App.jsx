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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}

export default App
