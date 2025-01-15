import { useState } from 'react'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Technologies from './Components/Technologies'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
function App() {
  

  return (
    <>
      <div className='overflow-x-hidden selection:bg-cyan-300 selection:text-cyan-900'>
        <div className='t-0 fixed w-full h-full -z-10'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      </div>
      </div>
        <div className='mx-auto px-8 container'>
        <Nav></Nav>
        <Hero></Hero>
        <Technologies />
        <Projects />
        <Contact />
        </div>
        </div>
     
       
    </>
  )
}

export default App
