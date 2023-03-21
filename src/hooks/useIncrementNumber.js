import { useState ,useEffect } from "react"

import React from 'react'

function useIncrementNumber(counter,setCounter,end) {

    // let duration=Math.floor(3000/end)
    // console.log(duration)
    let step=1
    if(end>900){
      step=Math.floor(4500/end)
    }

    useEffect(() => {
        const incrementer = setInterval(() => {
            setCounter((c) => {
              if(c < end) return c+step;
              clearInterval(incrementer);
              return c;
            });
          }, 10);

          return ()=>{clearInterval(incrementer)}
        },[]);

}

export default useIncrementNumber