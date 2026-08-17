import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router'

import Home from './pages/Home'
import FifthSemester from './pages/FifthSemester'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <HashRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/semestre/5" element={<FifthSemester />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}

export default App
