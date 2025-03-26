import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Login from './pages/Login'
import About from './pages/About'
import Home from './pages/Home'
//import Testing from './pages/Testing'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     {/* <Navbar />
     <Login /> */}
     
     <Router>
     <Routes>
     <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
     <Route path="/about" element={<About />} />
    
     
     
     </Routes>
      {/* <Footer /> */}
  </Router>
    </>
  )
}

export default App
