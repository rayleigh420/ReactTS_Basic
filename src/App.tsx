import { useState } from 'react'
import './App.css'
import Clock from './components/Clock'
import Message from './components/Message'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Clock />
      <Message />

    </div>
  )
}

export default App
