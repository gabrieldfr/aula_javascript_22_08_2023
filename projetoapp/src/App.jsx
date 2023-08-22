import { useState } from 'react'
import reactLogo from './assets/foca.jfif'
import viteLogo from './assets/foca2.jfif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count_decrease, setCount_decrease] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Gabriel Rocha</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          increase is {count}
        </button>

        <button onClick={() => setCount_decrease((count_decrease) => count_decrease -1)}>
          decrease is {count_decrease}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
