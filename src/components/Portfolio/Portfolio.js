import React, { useRef, useState ,useEffect} from 'react'
import "./Portfolio.css"
import {PortfolioData} from "../../data/Portfolio"
import useObserver from '../../hooks/useObserver'
import useWindowSize from "../../hooks/useWindowSize"
function Portfolio() {

      const ref=useRef(null)
      
      const options1={
        threshold:0.1
      }

      const barClass=useObserver(ref,options1,"show-portfolio-bar")
      const [indexSelected,setindexSelected]=useState(null)
      const [scrollEnabled, setScrollEnabled] = useState(true);
      const [isOpened,setIsOpened]=useState(false)
     
      const imgContainer_Ref=useRef()

//Handling Opening Image:
      let handleImgClick=(e,index)=>{
        setindexSelected(index);
        setIsOpened(true);  
        setScrollEnabled(false);
        document.body.style.overflow = "hidden";
      };


//Handling Click Out Side :
          useEffect(() => {
            function handleClickOutside(event) {
              if (imgContainer_Ref.current && !imgContainer_Ref.current.contains(event.target)) {
                handleClose();
              }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
              document.removeEventListener('mousedown', handleClickOutside);
            };
          }, []);

          


//Centre selected element in current screen :
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    const elementWidth =320;
    const elementHeight = 280;
  
    const elementStyle = {
      position: "fixed",
      top: `${(windowSize.height - elementHeight) / 2}px`,
      left: `${(windowSize.width - elementWidth) / 2}px`,
      width: `${elementWidth}px`,
      height: `${elementHeight}px`,
      animation: "showing-img 0.8s forwards ease",
      zIndex:"1"
    };


   
//Handling arrows and X mark :

    const handleRightSelected=()=>{
      if(indexSelected===PortfolioData.length-1){
        setindexSelected(0)
      }
      else setindexSelected((prev)=>prev+1)

    }
    
    const handleLeftSelected=()=>{

      if(indexSelected===0){
        setindexSelected(PortfolioData.length-1)
      }
      else setindexSelected((prev)=>prev-1)
    }

//Handling Closing Image :
    const handleClose=()=>{
      setIsOpened(false); 
      setScrollEnabled(true);     
      document.body.style.overflow = "auto" ; 

    }

    const overlay_style = {
      position: "fixed",
      top: `0px`,
      left: `0px`,
      width: `${windowSize.width}px`,
      height: `${windowSize.height}px`,
      zIndex:"1",
      backgroundColor: "black",
      opacity:"0.6",
    };



  return (
    <div className='portfolio'>
      <div className='container'>
        <div className='heading'>PORTFOLIO</div>
        <ul className={barClass}>
          <li className='clicked'>All</li>
          <li>HTML</li>
          <li>Photoshop</li>
          <li>Wordpress</li>
          <li>Mobile</li>
        </ul>
      </div>


      <div className='imgs-container' ref={ref}>

        {PortfolioData.map((el,index)=>

          <React.Fragment key={el.id}>

          <div key={el.id} className={ `port-img-container`}>
              <div className='coix' onClick={(e)=>{handleImgClick(e,index)}}></div>
              <img  src={el.image}  />
              
              <div className='img-text'>
                <div>Awesome Image</div>
                <span>Photography</span>
              </div>
          </div>


          {index===indexSelected&&
            <>
            <div className={isOpened?"disp":"nonDisp"}  style={overlay_style}></div>
            <div  key={el.id} style={elementStyle}  className={`${isOpened ?"":"hidden"} img-container`}  ref={imgContainer_Ref}>
              <i className="fa-solid fa-circle-arrow-right" onClick={handleRightSelected}></i>
              <i className="fa-solid fa-circle-arrow-left" onClick={handleLeftSelected}></i>
              <i className={`fa-sharp fa-solid fa-circle-xmark ${isOpened ?"disp":"nonDisp"}`}  onClick={handleClose}></i>
              <img src={el.image}/>    
            </div>
            </>
          }
          
          </React.Fragment>

        )}
      

      </div>
    
    </div>
  )
}

export default Portfolio