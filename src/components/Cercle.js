import React from 'react'
import "./Bar.css"
import styled,{keyframes,css} from 'styled-components';
import { useEffect,useState,useMemo } from 'react';
import useIncrementNumber from '../hooks/useIncrementNumber';
import "./Cercle.css"

function Cercle( {refer,skill , per, cercleClass}) {




                    
                  const [ counter, setCounter ] = useState(0)
                  const [percentage, setPercentage] = useState(0);
                  const[styleCercle,setStyle]=useState({})

                  let options={
                    threshold:0.8
                  }
                  let cercleFill={}
                    useEffect(() => {
                  
                        const observer = new IntersectionObserver(([entry])=>{
                  
                          if(entry.isIntersecting){
                                if(percentage===0){
                                  setPercentage(per)
                                }
                            }
                    
                          
                        },options)
                  
                        const currentElement=refer?.current
                  
                        if(currentElement){
                            observer.observe(currentElement)
                        }
                          return () => {
                            observer.unobserve(currentElement)
                          }
                        },[percentage])

                        


                        useEffect(() => {
                          let timer = setInterval(() => {
                             if (counter === percentage) {
                                clearInterval(timer)
                              }
                              

                            else{
                              setStyle({  background:`conic-gradient( var(--main) ${counter*3.6}deg , #d4e2f0ad 0deg)`})
                              setCounter(counter+1)}
                          },15)        
                          return () => clearInterval(timer)
                         },[counter,percentage,styleCercle])
                  

                    // const animFillCercle={     
                    //   animation: `${cercleClass}Fill 1.5s both`       
                    // }


  return (
    <div className={`prof-skill`} >
           <div className='title'>{skill}</div>
           <div className='cercle-container' style={styleCercle}>
              <div  className={`cercle${cercleClass}`}></div>
               <div className='before-div'>{counter}%</div>
           </div>
    </div>
  )
}

export default Cercle

