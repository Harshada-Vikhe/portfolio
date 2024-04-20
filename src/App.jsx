
import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import  Projects from './components/project/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollToTop from './components/scrolltop/ScrollToTop'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return(
      <div>
      
      
      <Navbar/>
      
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>
      <ScrollToTop/>
      <Footer/> 
      
      </div>
  )
   
}

export default App
