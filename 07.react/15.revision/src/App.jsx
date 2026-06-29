// import React from 'react'
// import { Routes, Route } from "react-router-dom"
// import Home from './pages/Home'
// import About from "./pages/About"
// import Contact from "./pages/Contact"
// import Gallery from "./pages/Gallery"
// import Navbar from './components/Navbar'

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/gallery' element={<Gallery />} />
//       </Routes>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react'
import Footer from "./components/Footer"

const App = () => {
  const [username, setUsername] = useState("my name is user")

  return (
    <>
      <div>App</div>
      <Footer username={username} />
    </>
  )
}

export default App
