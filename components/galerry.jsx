import React from 'react'
import bodybelt from '../images/bodybelt.jpeg';
import collar from '../images/collar.jpeg';
import dogrope from '../images/dog rope1.jpeg';
import ledset from '../images/led set.jpeg';
import ledset1 from '../images/led set1.jpeg';
import bodybelt1 from '../images/bodybelt1.jpeg';
import pp from '../images/pp.jpeg';
import chockbelt from '../images/chockbelt.jpeg';
import puppybelt1 from '../images/puppybelt1.jpeg';
import harnessrope from '../images/harnessrope.jpeg';
import printed from '../images/printed.jpeg';
// import hook from '../images/hook.jpeg';
// import hook1 from '../images/hook1.jpeg';
import setdog from '../images/set dog.jpeg';
import chain from '../images/chain.jpeg';
import chain1 from '../images/chain1.jpeg';
import chain2 from '../images/chain2.jpeg';
import chain3 from '../images/chain3.jpeg';
import chain4 from '../images/chain4.jpeg';
import chain5 from '../images/chain5.jpeg';
import scissor1 from '../images/scissor1.jpeg';
// import scissor2 from '../images/scissor2.jpeg';
import scissor3 from '../images/scissor3.jpeg';
import scissor4 from '../images/scissor4.jpeg';
import scissor5 from '../images/scissor5.jpeg';
import scissor6 from '../images/scissor6.jpeg';
import scissor7 from '../images/scissor7.jpeg';






function galerry() {
  return (
    <div id='galerry'>
      <h2>Dog Items</h2>
      <div id='belt'>
        
        <h3><b>Dog Harness</b></h3>
        <img src={bodybelt} alt="" />
        <h3><b>collar</b></h3>
        <img src={collar} alt="" />
        <h3><b>Dog Rope</b></h3>
        <img src={dogrope} alt="" />
        <h3><b>Led Set</b></h3>
        <img src={ledset} alt="" />
      
      </div>
      <div id='belt1'>

        <h3><b>Dog Harness</b></h3>
        <img src={bodybelt1} alt="" />
        <h3><b>PP Collar</b></h3>
        <img src={pp} alt="" />
        <h3><b>Chock Belt</b></h3>
        <img src={chockbelt} alt="" />
        
      </div>
      <div id='belt2'>

        <h3><b>Combo Set</b></h3>
        <img src={setdog} alt="" />
        <h3><b>Puppy Belt</b></h3>
        <img src={puppybelt1} alt="" />
        <h3><b>Nylone Led set</b></h3>
        <img src={ledset1} alt="" />
        <h3><b>Harness + Rope</b></h3>
        <img src={harnessrope} alt="" />
        <h3><b>Printed Set</b></h3>
        <img src={printed} alt="" />

      </div>

       <h2>Dog Chain</h2>
      <div id='chain'>
        <h3><b>Door locking chain</b></h3>
        <img src={chain} alt="" />
        <h3><b>Bronze hook chain</b></h3>
        <img src={chain1} alt="" />
        <h3><b>Unique chain</b></h3>
        <img src={chain2} alt="" />
        <h3><b>Special Hook</b></h3>
        <img src={chain3} alt="" />
        <h3><b>Chock Chain</b></h3>
        <img src={chain4} alt="" />
        <h3><b>special chain</b></h3>
        <img src={chain5} alt="" />
      </div>

      <h2>Scissors</h2>
      <div id="scissor">
        <h3><b>k43</b></h3>
        <img src={scissor1} alt="" /><br />
        <h3><b>NO.400</b></h3>
        <img src={scissor3} alt="" />
        <h3><b>NO.401</b></h3>
        <img src={scissor4} alt="" />
        <h3><b>Size 8"</b></h3>
        <img src={scissor5} alt="" />
        <h3><b>Size 10"</b></h3>
        <img src={scissor6} alt="" />
        <h3><b>Metal scissor</b></h3>
        <img src={scissor7} alt="" />
      </div>

          
    </div>
  )
}

export default galerry
