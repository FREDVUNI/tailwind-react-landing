import React from 'react'
import { HeroSection, Navbar,Companies,Courses, Achievement,Categories,FeedBack } from './components'
import CTA from './components/CTA'

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
        <CTA/>
    </div>
  )
}

export default App
