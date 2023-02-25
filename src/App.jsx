import React from 'react'
import { HeroSection, Navbar,Companies,Courses, Achievement,Categories,FeedBack,CTA,Footer } from './components'

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
        <Footer/>
    </div>
  )
}

export default App
