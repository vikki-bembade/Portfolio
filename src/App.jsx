import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Courses from './pages/Courses'
import './App.css'
import Contact from './pages/Contact'
import Footer from './componant/Footer'
import Header from './componant/Header'

const App = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }} className="antialiased transition-colors duration-300">
      <Header />
      <main className="pt-20">
        <Home />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App