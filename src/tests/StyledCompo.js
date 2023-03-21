import React, { useRef } from 'react'

import styled, { keyframes } from 'styled-components';
import { useEffect,useState ,useMemo } from 'react';


function StyledCompo() {

    

    const [ counter, setCounter ] = useState(0)
    const [percentage, setPercentage] = useState(0);
    
    console.log(counter)
    
    let options={
      threshold:0.3
    }
    let refer=useRef();

        


  
             
      useEffect(() => {
    
          const observer = new IntersectionObserver(([entry])=>{
    
            if(entry.isIntersecting){
                  if(percentage===0){
                    setPercentage(100)
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
               
            },100)
           
            return () => clearInterval(timer)
           },[counter,percentage])



              let styling={
                height:"200vh",
                background:"red",
                textAlign:"center",
                fontSize:"40px",

              }

              let style1={
                position:"relative",
                height:"200vh",
                background:"green",
                textAlign:"center",
                fontSize:"40px"
              }






              const pulse = useMemo(()=> keyframes`
              from {
      
                left:0px;
              }
              to {
                
                left:${100}px;
      
              }
            `)
            
            const StyledComponent = useMemo(()=>{
            return(styled.div`
            animation: ${pulse} 0.8s forwards;
            `)})



  return (
    <>
    <div style={styling}>Hello</div>
    <StyledComponent style={style1}  ref={refer}>im styled compo {counter}</StyledComponent>
    </>
  )
}

export default StyledCompo