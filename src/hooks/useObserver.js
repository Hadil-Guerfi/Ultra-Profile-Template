
import React, { useState,useEffect } from 'react'

function useObserver(ref,options,classToset) {


    const [myClass, setMyClass] = useState("");

    useEffect(() => {

        const observer = new IntersectionObserver(([entry])=>{

          if(entry.isIntersecting){
            if(myClass===""){
              setMyClass(classToset)
            }
          }

        },options)

        const currentElement=ref?.current

        if(currentElement){
            observer.observe(currentElement)

        }
    
      return () => {
        observer.unobserve(currentElement)
      }
    },[myClass])

    return myClass;
    
}

export default useObserver
