import React, {useEffect} from 'react'
import { useState } from 'react'
import Tilt from 'react-tilt'


function MySkills() {
  const [yearhtml] = useState("2018");
  const [yearReact] = useState("2020");
  const [yearJS] = useState("2019");
  const [yearBoot] = useState("2020");
  const [currentYear, setCurrentYear] = useState("");
    
  useEffect(() => {
    var CurrentYear = new Date().getFullYear();
    setCurrentYear(CurrentYear);
  }, [])
  

  return (
    <div class="SkillsDiv container-fluid ontop" id="skillsdiv">
      <div class="row">
        <div class="col-12">
          <div class="skillsbtn">Skills</div>
          <h1 class="MySkillsHeader"> My skills</h1>
        </div>
      </div>
      <div class="row skillsrow">
        <Tilt options={{speed: 2000, transition: 'true', easing: "cubic-bezier(.03,.98,.52,.99)", scale: 1.1 }}  data-tilt-scale="1.1" className="col-3 skilldiv">
          <div class="skilltitlediv" style={{transform:'translateZ(4vw)'}}>
            <div class="skillicons">
              <i class="fa-brands fa-html5 skillicon html5"></i>
              <i class="fa-brands fa-css3-alt skillicon css3"></i>
            </div>
            <h5 class="skilltitle">HTML / CSS</h5>
          </div>
          <div class="progress-outer" style={{width: '70%', marginLeft:'3vw', marginBottom:'3vw', transform:'translateZ(5vw)'}}>
            <div class="progress">
              <div class="progress-bar-striped bg-danger progress-bar progress-bar-animated" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p1 id="skillhtml" class="skillyear">{currentYear - yearhtml + " years"}</p1>
        </div>
        </Tilt>
        <Tilt options={{speed: 2000, transition: 'true', easing: "cubic-bezier(.03,.98,.52,.99)", scale: 1.1 }} className="col-3 skilldiv">
          <div class="skilltitlediv" style={{transform:'translateZ(4vw)'}}>
            <div class="skillicons">
              <i class="fa-brands fa-react skillicon react"></i>
            </div>
            <h5 class="skilltitle">ReactJS</h5>
          </div>
          <div class="progress-outer" style={{width: '70%', marginLeft:'3vw', marginBottom:'3vw', transform:'translateZ(5vw)'}}>
            <div class="progress">
              <div class="progress-bar-striped bg-info progress-bar progress-bar-animated" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p1 id="skillreact" class="skillyear">{currentYear - yearReact + " years"}</p1>
        </div>
        </Tilt>
        <Tilt options={{speed: 2000, transition: 'true', easing: "cubic-bezier(.03,.98,.52,.99)", scale: 1.1 }} className="col-3 skilldiv">
          <div class="skilltitlediv" style={{transform:'translateZ(4vw)'}}>
            <div class="skillicons">
              <i class="fa-brands fa-js skillicon js"></i>
            </div>
            <h5 class="skilltitle">Javascript</h5>
          </div>
          <div class="progress-outer" style={{width: '70%', marginLeft:'3vw', marginBottom:'3vw', transform:'translateZ(5vw)'}}>
            <div class="progress">
              <div class="progress-bar-striped progress-bar bg-warning progress-bar-animated" role="progressbar" style={{width: '50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p1 id="skilljs" class="skillyear">{currentYear - yearJS + " years"}</p1>
        </div>
        </Tilt>
        <Tilt options={{speed: 2000, transition: 'true', easing: "cubic-bezier(.03,.98,.52,.99)", scale: 1.1 }} className="col-3 skilldiv">
          <div class="skilltitlediv" style={{transform:'translateZ(4vw)'}}>
            <div class="skillicons">
              <i class="fa-brands fa-bootstrap skillicon boot"></i>
            </div>
            <h5 class="skilltitle">Bootstrap</h5>
          </div>
          <div class="progress-outer" style={{width: '70%', marginLeft:'3vw', marginBottom:'3vw', transform:'translateZ(5vw)'}}>
            <div class="progress">
              <div class="progress-bar-striped progress-bar progress-bar-animated" role="progressbar" style={{width: '95%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p1 id="skillbootstrap" class="skillyear">{currentYear - yearBoot + " years"}</p1>
        </div>
        </Tilt>
      </div>
      <div className="row">
        <div className="col-3">
        <button data-tilt="" data-tilt-glare="true" data-tilt-max="5" data-tilt-speed="200" data-tilt-perspective="500" onClick={() => document.getElementById('Reviews').scrollIntoView()} class="whatidobtn bg-react">Testimonials</button>
        </div>
        <div className="col-9">

        </div>
      </div>
    </div>
  )
}

export default MySkills