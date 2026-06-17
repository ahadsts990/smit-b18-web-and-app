import "./App.scss"
import { useState } from "react"

function App() {
  const [number, setNumber] = useState(0)

  return (
    <div className="counter">
      <h2>Tele Counter</h2>
      <div>
        <button onClick={() => setNumber(number - 1)}>- Sub</button>
        <h2>{number}</h2>
        <button onClick={() => setNumber(number + 1)}>+ Add</button>
      </div>
    </div>
  )
}

export default App
