import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { Toaster } from "sonner" 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <div className='min-h-screen bg-gray-50'>
      <Home/> 
      <About/>
      <Project/>
       <Contact/>
       <Footer/>
    </div>
      <Toaster
  position="top-center"
/>
    </div>
  )
}

export default App
