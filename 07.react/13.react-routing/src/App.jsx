import "./App.scss"
import React from 'react'
import Header from './components/Header'
import { Routes, Route, Navigate } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import Services from "./pages/Services"
import NotFound from "./pages/NotFound"

const App = () => {
  // useParams
  // useLocation
  // useNavigate
  // url-parameters

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>

    </div>
  )
}

export default App
