import React from 'react'
import Skills from '../Skills/Skills'
import Portfolio from '../Portfolio/Portfolio'
import Work from '../Work/Work'
import "./Home.css"
import About from '../About/About'
import Contact from '../Contact/Contact'

function Home() {

  return (
    <>
    <div className='home'>
        <div className='container'>
          <div > EXPERT NAME</div>
          <div>Creative Director</div>
          <div>Iam a professional UX Designer and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you</div>
          <button>Let's Begin</button>
        </div>
    </div>
    <Work/>
    <Portfolio/>
    <Skills/>
    <About/>
    <Contact/>

    </>
  )

}

export default Home