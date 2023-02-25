import React from 'react'
import { HeroSection, Navbar,Companies,Courses, Achievement,Categories } from './components'

function App() {

  return (
    <div className="app">
        <Navbar/>
        <HeroSection/>
        <Companies/>
        <Courses/>
        <Achievement/>
        <Categories/>
    </div>
  )
}

export default App
