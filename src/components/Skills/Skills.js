import React, { useEffect, useRef, useState } from 'react'
import "./Skills.css"
import useObserver from "../../hooks/useObserver"
import Bar from '../Bar';
import styled, { keyframes } from 'styled-components';
import Cercle from '../Cercle';

function Skills() {

  let techArray=[{skill:"Java Script",per:50,class:"js"},{skill:"Java",per:40,class:"java"},{skill:"Python",per:80,class:"python"},{skill:"PHP",per:30,class:"php" }];
  
  let options={
    threshold:0.8
  }

  let ref1 =useRef()
  let ref2 =useRef()

  const observer1= useObserver(ref1,options,"observing");

  const observer2= useObserver(ref2,options,"observing");

  let profArray=[{skill:"Communication",per:50,class:"com"},{skill:"Team Work",per:55,class:"tm"},{skill:"Management",per:86,class:"pm"},{skill:"Creativity",per:60,class:"creative" }];



  return (
    <div className='skills'>
        <div className='container'>
          <div className='heading'>SKILLS</div>

          <div className=' skills-container' >

            <div className=' tech-skills' ref={ref1}>

                <div className='tech-title'>Technical Skills</div>

                {techArray.map((el,index)=>{
                  return(                         
                    <Bar key={index} refer={ref1} skill={el.skill} per={el.per} Barclass={observer1===""?"":el.class}/>
                  )
                }
                  )}
            </div>

            

            <div className='prof'>

              <div className='prof-title'>Professional Skills</div>

                  <div className='prof-skills' ref={ref2}>
                    {profArray.map((el,index)=>{
                      return(                         
                        <Cercle key={index} refer={ref2} skill={el.skill} per={el.per} cercleClass={observer2===""?"":el.class}/>
                      )
                    }
                      )}
                  </div>

            </div>

            
          

        </div>
      
      </div>

    </div>
  )
}

export default Skills