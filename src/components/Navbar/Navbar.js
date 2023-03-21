import { Link ,Outlet} from 'react-router-dom'
import "./Navbar.css"
import React, { useState } from 'react'
import logo from "../../images/Navbar/logo.jpg"
import log from "../../images/Navbar/log.png"
import {GoThreeBars} from "react-icons/go"
import {CgClose} from "react-icons/cg"

function Navbar() {


  let [testOpen,setTestOpen]=useState(false)

  let[counterTester,setCounterTester]=useState(0)


  let[ulClass,setUlClass]=useState("notfound")


  let handleMenuClick=()=>{

    if(testOpen===false){
      setTestOpen(true)
      setCounterTester(counterTester+1)
      setUlClass("")

    }
    else{
      setTestOpen(false)
      setUlClass("hiddenUl")
    }

  }

  return (
    <div className='header'>
      <div className='container'>

        <img src={log}/>
        
        <nav>

            <div className='targeting-menu'>
              <CgClose className={testOpen?"showen":"hiddene"}onClick={handleMenuClick}/>
              <GoThreeBars className={!testOpen?"showen":"hiddene"} onClick={handleMenuClick}/>    
            </div>

            <ul className={ulClass}>
              <li><Link to='/'>Home</Link> </li>
              <li><Link to="work">Work</Link></li>
              <li><Link to="portfolio">Portfolio</Link></li>
              <li><Link to="skills">Skills</Link></li>
              <li><Link to="about">About</Link></li>
              <li><Link to="contact">Contact</Link></li>
            </ul>  
            <div className='overlay'></div>
       
        </nav>

      </div>
    </div>
  )
}

export default Navbar;