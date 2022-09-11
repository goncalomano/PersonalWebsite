import React from 'react'
import gmano from '../img/gmano.jpg'
import { useRef ,} from 'react'
function AboutMe() {
    const imageRef = useRef();
  return (  
    <div id="SecondDiv" class="SecondDiv container-fluid ontop">
    <div class="row">
      <div class="col-5 ">
    <div class="aboutmebutton">About Me</div>
    <h3 class="AboutMeHeader ovh">A bit about me</h3>
    <h2 class="AboutMeText">Hi! I'm Gonçalo. A portuguese programmer and WebDesigner.
        Currently studying Computer Cience in Portugal.
        <br/>
        I grew up using computers and developed interest in programming
        when I was 11. I then gained more interest for the web and how 
        Websites were made.
        <br/>
        Feel free to contact me over your future or current project.
        Lets have a talk!
    </h2>  
    <button data-tilt="" data-tilt-glare="true" data-tilt-max="5" data-tilt-speed="200" data-tilt-perspective="500" onClick={() => document.getElementById('skillsdiv').scrollIntoView()} class="whatidobtn">What I do</button>
      </div>
      <div class="col-7" ref={imageRef}>
        <img src={gmano}  class="gmano" alt="Nice looking man :)"/>
      </div>
    </div>
    </div>
  )
}

export default AboutMe