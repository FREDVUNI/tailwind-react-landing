import React from 'react'
import { HeroSection, Navbar,Companies,Courses, Achievement } from './components'

function App() {

  return (
    <div className="app">
        <Navbar/>
        <HeroSection/>
        <Companies/>
        <Courses/>
        <Achievement/>
    </div>
  )
}

export default App
