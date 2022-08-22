import React from 'react'
import random1 from '../images/random1.jpeg';
import random2 from '../images/random2.jpeg';
import random3 from '../images/random3.jpeg';
import random4 from '../images/random4.jpeg';
import random5 from '../images/random5.jpeg';
import random6 from '../images/random6.jpeg';
import random7 from '../images/random7.jpeg';
import random8 from '../images/random8.jpeg';
// import johnson from '../images/johnson.jpeg';
import spades from '../images/spades.jpeg';
import jaburtana from '../images/jaburtana.jpeg';




function random() {
    return (
        <div id='essential-items'>
            <h2>Essential items</h2>
        <div id='random'>
            <h3><b>18" handsaw</b></h3>
            <img src={random1} alt="" />
            <h3><b>Folding Handsaw</b></h3>
            <img src={random3} alt="" />
            <h3><b>Flower cutter</b></h3>
            <img src={random2} alt="" />
            <h3><b>Flower cutter</b></h3>
            <img src={random4} alt="" />
            <h3><b>Flower cutter</b></h3>
            <img src={random5} alt="" />
            <h3><b>Spade</b></h3>
            <img src={random6} alt="" />    
          
            </div>

            <div id='random1'>
            <h3><b>Big scissor</b></h3>
            <img src={random8} alt="" />
             <h3><b>Combo</b></h3>
            <img src={random7} alt="" />
             {/* <h3><b>Johnson Stoen</b></h3>
            <img src={johnson} alt="" /> */}
             <h3><b>Spades Set</b></h3>
             <img src={spades} alt="" />
            <h3>Jaburtana</h3>
             <img src={jaburtana} alt="" />


            </div>
    </div>
  )
}

export default random
