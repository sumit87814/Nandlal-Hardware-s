import React from 'react'

function contact() {
 
    return (
      
        <div id='contact'>
          
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