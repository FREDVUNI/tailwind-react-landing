import React from 'react'
import { HeroSection, Navbar,Companies,Courses, Achievement,Categories,FeedBack } from './components'

function App() {

  return (
    <div className="app">
        <Navbar/>
        <HeroSection/>
        <Companies/>
        <Courses/>
        <Achievement/>
        <Categories/>
        <FeedBack/>
    </div>
  )
}

export default App
