import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Vite + React</h1>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count: {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
