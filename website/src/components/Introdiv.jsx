import React from 'react'
import Particle from './Particle'
import blob from '../../src/img/blob.svg';
import coding from '../../src/img/coding.svg'
import gsap from 'gsap'
import { useRef } from 'react';
import { useEffect } from 'react';
import Typed from 'react-typed';
function Introdiv() {
  const nameRef = useRef();

  useEffect(() => {
    gsap.fromTo(nameRef.current,{
      x :  -300,
  }, {
      x : 0,
      opacity:1,
      duration: 0.8,
      ease: "power2"
  },
  ); 


  }, [])
  
  return (
    <div class="Introdiv container-fluid">
    <div class="row">
        <div class="col-7 ontop">
          <div class="NameWrapper">
            <hr class="UpperHR"/>
            <h3 class="name" ref={nameRef}>Gonçalo <br/> Mano</h3>      
            <Typed
                    strings={['Web developer','Programmer','Front-end Developer']}
                    loop
                    typeSpeed={40}
                    backSpeed={50}
                    className="smalltext"
                /> 
            <hr class="DownHR"/>    
            <button data-tilt="" data-tilt-max="5" data-tilt-speed="200" data-tilt-perspective="500" onClick={() => document.getElementById('SecondDiv').scrollIntoView()} class="aboutmebtn">About Me</button>
          </div>
        </div> 
        <div class="col-5">
            <img class="coding" src={coding} alt="coding"/>
            <img class="blob" src={blob} alt="blob"/>
        </div>
    </div>
    <Particle/>
    </div>
  )
}

export default Introdiv