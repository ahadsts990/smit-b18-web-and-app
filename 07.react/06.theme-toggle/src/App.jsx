import "./App.scss"
import { useState } from "react"
import { FaRegMoon, FaSun } from "react-icons/fa";

function App() {
  const [darkTheme, setDarktheme] = useState(false)

  return (
    <div className={`container ${darkTheme ? "dark" : "light"}`}>
      <h4>theme is {darkTheme ? "Dark" : "Light"}</h4>

      {darkTheme ? <FaRegMoon /> : <FaSun />}

      <button
        onClick={() => setDarktheme(!darkTheme)}
      >
        change to {darkTheme ? "Light" : "Dark"}</button>
    </div>
  )
}

export default App
