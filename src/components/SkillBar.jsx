import React from 'react'

function SkillBar(){
    return(
        <div className="sbar"> 

        <h6>My Skills</h6>
        
        <p>HTML</p>
        <div className="skill-bars">
          <div className="skills html">90%</div>
        </div>
        
        <p>CSS</p>
        <div className="skill-bars">
          <div className="skills css">80%</div>
        </div>
        
        <p>JavaScript</p>
        <div className="skill-bars">
          <div className="skills js">65%</div>
        </div>
        
        <p>PHP</p>
        <div className="skill-bars">
          <div className="skills php">60%</div>
        </div>
        
        </div>
    )
}

export default SkillBar;