import "./App.scss"
import { Routes, Route, Navigate } from "react-router-dom"
import Votes from "./pages/Votes"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Votes />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
