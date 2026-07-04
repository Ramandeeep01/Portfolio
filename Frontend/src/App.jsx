import React from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Black from './Components/Black'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-[#F4F3F0] px-4 sm:px-6 md:px-10 lg:px-[100px] py-8">

      <div className="min-h-screen bg-[#F9F8F6] shadow-[0_0_20px_rgba(0,0,0,0.12)]">

        <Navbar />
        <Main />
        <Black />
        <About />
        <Skills />
        <Projects />
        <Footer />

      </div>

    </div>
  )
}

export default App