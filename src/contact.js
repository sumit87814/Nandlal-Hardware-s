import React, { useState } from 'react'
//
import p1 from '../images/1.png';
// import svg from '../images/footer.svg';
// import men from '../images/men.png';
function contact() {
 
    return (
      
        <div id='contact'>
            <div id='p1'>
                <img src={p1} alt="" />
            </div>
          
          <h1>ORDER INFORMATION</h1>
          <form className='form' >
              <input type="text" placeholder='Full Name' />
              <input type="tel" placeholder='Contact number '  />
              <input type="email" placeholder='Enter your email'  />
              <textarea placeholder='Write here...' ></textarea>
              <input type="Submit" value='SEND ' />
         
          </form>
     
      </div>
    
     
  )
}

export default contact;