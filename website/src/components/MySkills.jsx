import React from 'react'
function MySkills() {
  return (
    <div class="SkillsDiv container-fluid ontop" id="skillsdiv">
      <div class="row">
        <div class="col-12">
          <div class="skillsbtn">Skills</div>
          <h1 class="MySkillsHeader"> My skills</h1>
        </div>
      </div>
      <div class="row skillsrow">
        <div data-tilt="" data-tilt-speed="2000" data-tilt-transition="true" data-tilt-easing="cubic-bezier(.03,.98,.52,.99)" data-tilt-glare="true" data-tilt-max-glare="0.08" data-tilt-scale="1.1" class="col-3 skilldiv">
          <div class="skilltitlediv">
            <div class="skillicons">
              <i class="fa-brands fa-html5 skillicon html5"></i>
              <i class="fa-brands fa-css3-alt skillicon css3"></i>
            </div>
            <h5 class="skilltitle">HTML / CSS</h5>
          </div>
          <div class="progress-outer" style={{width: '70%', marginLeft:'3vw', marginBottom:'3vw', transform:'translateZ(20px)'}}>
            <div class="progress">
              <div class="progress-bar-striped bg-danger progress-bar progress-bar-animated" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p1 id="skillhtml" class="skillyear"></p1>
        </div>
        </div>
        <div data-tilt="" data-tilt-speed="2000" data-tilt-transition="true" data-tilt-easing="cubic-bezier(.03,.98,.52,.99)" data-tilt-glare="true" data-tilt-max-glare="0.08" data-tilt-scale="1.1" class="col-3 skilldiv">
          <div class="skilltitlediv">
            <div class="skillicons">
              <i class="fa-brands fa-react skillicon react"></i>
            </div>
            <h5 class="skilltitle">ReactJS</h5>
          </div>
          <div class="progress-outer" style={{width: '70%', marginLeft:'3vw', marginBottom:'3vw', transform:'translateZ(20px)'}}>
            <div class="progress">
              <div class="progress-bar-striped bg-info progress-bar progress-bar-animated" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p1 id="skillreact" class="skillyear"></p1>
        </div>
        </div>
        <div data-tilt="" data-tilt-speed="2000" data-tilt-transition="true" data-tilt-easing="cubic-bezier(.03,.98,.52,.99)" data-tilt-glare="true" data-tilt-max-glare="0.08" data-tilt-scale="1.1" class="col-3 skilldiv">
          <div class="skilltitlediv">
            <div class="skillicons">
              <i class="fa-brands fa-js skillicon js"></i>
            </div>
            <h5 class="skilltitle">Javascript</h5>
          </div>
          <div class="progress-outer" style={{width: '70%', marginLeft:'3vw', marginBottom:'3vw', transform:'translateZ(20px)'}}>
            <div class="progress">
              <div class="progress-bar-striped progress-bar bg-warning progress-bar-animated" role="progressbar" style={{width: '50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p1 id="skilljs" class="skillyear"></p1>
        </div>
        </div>
        <div data-tilt="" data-tilt-speed="2000" data-tilt-transition="true" data-tilt-easing="cubic-bezier(.03,.98,.52,.99)" data-tilt-glare="true" data-tilt-max-glare="0.08" data-tilt-scale="1.1" class="col-3 skilldiv ">
          <div class="skilltitlediv">
            <div class="skillicons">
              <i class="fa-brands fa-bootstrap skillicon boot"></i>
            </div>
            <h5 class="skilltitle">Bootstrap</h5>
          </div>
          <div class="progress-outer" style={{width: '70%', marginLeft:'3vw', marginBottom:'3vw', transform:'translateZ(20px)'}}>
            <div class="progress">
              <div class="progress-bar-striped progress-bar progress-bar-animated" role="progressbar" style={{width: '95%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <p1 id="skillbootstrap" class="skillyear"></p1>
        </div>
        </div>
      </div>
    </div>
  )
}

export default MySkills