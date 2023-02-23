import React from 'react'
import { HeroSection, Navbar,Companies,Courses } from './components'

function App() {

  return (
    <div className="app">
        <Navbar/>
        <HeroSection/>
        <Companies/>
        <Courses/>
    </div>
  )
}

export default App
