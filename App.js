import React, {useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Galerry from './components/galerry';
import Random from './components/random';
import Contact from './components/contact';
// import Contact from './contact';
import Footer from './components/footer';
import { css } from "@emotion/css";
import BeatLoader from 'react-spinners/BeatLoader';

function App() {
  const [loading, setLoading] = useState(false);
  const override = css`
  display:flex;
  border-color:red;
  margin-top:20%;
  item-align:center;
  justify:center;
  `;

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  return (
    <div className="app"> 
 
      
      {
        
        loading ? <  BeatLoader color={'#3d2514'} Loading={loading} css={override} size={40} /> 
            :  
          
            
          <>
            <Header />
            <Galerry />
            <Random />
            <Contact />
            <Footer/>
          </>
        }
     
    </div>
    
      

  );
}
export default App;
     