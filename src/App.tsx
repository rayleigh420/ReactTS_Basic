import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Page_one from './pages/Page_one'
import Page_two from './pages/Page_two'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='one' element={<Page_one />} />
        <Route path='two' element={<Page_two />} />
      </Routes>
    </div>
  )
}

export default App
