import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Footer />
    </div>
  )
}

export default App