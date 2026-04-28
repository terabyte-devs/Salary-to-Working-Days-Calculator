import { Routes, Route } from 'react-router'
import Landing from './pages/Landing'
import Calculator from './pages/Calculator'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/app" element={<Calculator />} />
    </Routes>
  )
}
