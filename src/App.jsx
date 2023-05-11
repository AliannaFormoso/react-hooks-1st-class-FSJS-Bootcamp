import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h2>React Hooks</h2>
      <hr />
      <h3>Click on the buttons</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          This one counts up (+1) {count}
        </button>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          This one counts down (-1) {count}
        </button>
        
      </div>

      <hr />
      
    </>
  )
}

export default App
