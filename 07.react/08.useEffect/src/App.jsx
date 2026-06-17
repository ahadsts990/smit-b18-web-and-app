import "./App.scss"
import React, { useEffect, useState } from 'react'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [darkTheme, setDarkTheme] = useState(true)

  // [] ============> first time when component will load
  // [variable] ====> run when the variabl's value will change

  useEffect(() => {
    console.log("isOpen==> ", isOpen)
    console.log("darkTheme==> ", darkTheme)
    console.log("hello world")
  }, [])

  return (
    <div>
      UseEffect Hook
      <br />
      {darkTheme ?
        <h1>Hello Dark Theme</h1>
        :
        <h4>dark theme is false</h4>}
      <br />
      <button onClick={() => setIsOpen(!isOpen)}>Click me</button>
      <button onClick={() => setDarkTheme(!darkTheme)}>Click Theme</button>
    </div>
  )
}

export default App