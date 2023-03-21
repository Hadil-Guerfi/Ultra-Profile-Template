import React from 'react'
import "./Work.css"
import  work from "../../data/Work.json"


function Work() {

  return (
    <div className='work'>
      <div className='container'>
        <div className='heading'>WORK</div>

        <div className='work-cards'>
            {work.map((elt)=>
              <div  className='work-card' key={elt.id}>
                  <i className={elt.icon_name}></i>
                  <div>{elt.title}</div>              
                  <div>{elt.body}</div>
              </div>
            )}
        </div>
      
      </div>
    </div>
  )
}

export default Work