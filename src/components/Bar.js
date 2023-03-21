import React from 'react'
import "./Bar.css"
import styled,{keyframes,css} from 'styled-components';
import { useEffect,useState } from 'react';
import useIncrementNumber from '../hooks/useIncrementNumber';

function Bar( {refer,skill , per, Barclass}) {




                    
                  const [ counter, setCounter ] = useState(0)
                  const [percentage, setPercentage] = useState(0);
                  let options={
                    threshold:0.8
                  }
                           
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
                             setCounter(counter+1)}
                             
                          },10)
                         
                          return () => clearInterval(timer)
                         },[counter,percentage])
                  



                    const animBuble={     
                        animation: `${Barclass}Buble 1.5s both`       
                    }

                    const animFill={     
                      animation: `${Barclass}Fill 1.5s both`       
                    }


  return (
    <div className={`tech-skill`} >
           <div className='title'>{skill}</div>
           <div className='bar-container'>
              <div  className={`bar ${Barclass}`}></div>
               <div  style={animFill} className='fillElt'></div>
               <div style={animBuble} className="buble">{counter}%</div>
           </div>
    </div>
  )
}

export default Bar

