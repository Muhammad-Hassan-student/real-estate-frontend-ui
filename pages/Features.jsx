import React from 'react'
import './Features.css'

export default function Features() {
  return (
    <>
    <div className='main-features'>
    
    <div className='features'>
        
        
        <div className="box1">
        <h1>Great Features</h1>
        <span>Classic Interiors & </span><span className=' '>Exteriors</span>
        <p>Generously sized, this home delivers the very best Interiors & exteriors.</p>
        <div className="btn"><button><a  href="">Schedule a Tour</a></button></div>
        </div>

        <div className="box2">
        <i class="fa-sharp fa-solid fa-house fa-4x" ></i>
        
       <span className='span2'>Latest Property</span>
        <p>Tasteful and seem-less renovation, this home is a unique refreshing.</p>

        <i class="fa-solid fa-earth-asia fa-4x"></i>
        <span className='span2'>Great Surroundings</span>
        <p>Coral Gables provides a coastal lifestyle in a tropical setting.</p>

        </div>

        <div className="box3">
        <i class="fa-sharp fa-solid fa-house fa-4x" ></i>
        
        <span className='span2'>Awesome Area</span>
         <p>This suite offers outstanding views of the city, ocean and mountains.</p>
 
         <i class="fa-solid fa-earth-asia fa-4x"></i>
         <span className='span2'>Supreme Location</span>
         <p>It is ideally situated on a very private lot along a whisper quiet street.</p>
        </div>
        
    </div>
    </div>
      
    </>
  )
}
