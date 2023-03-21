
import { useState } from 'react';
import { useEffect } from 'react';

export default function useWindowSize(){
  const [size,setSize]=useState([window.innerWidth,window.innerHeight])


  useEffect(() => {

    const handleResize=()=>{
      setSize([window.innerWidth,window.innerHeight])
    };
    window.addEventListener("resize",handleResize);

    return ()=>{
      window.removeEventListener("resize",handleResize)
    }
    
  },[window.innerWidth,window.innerHeight])

  

  return size;
}


