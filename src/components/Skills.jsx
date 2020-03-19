import React from 'react'
import  smartphone from '../images/smartphone.png';
import SkillBar from './SkillBar';

function Skills(){
    return(
      <div className="skills">
        <h2>My Skills.</h2>
        <div className="row-box">
          <div className="skill-row">
            <img className="simpsons-gif" src="https://image.flaticon.com/icons/svg/1688/1688434.svg" alt=""/>
            <div className="skill-text">
              <h3>Web Development</h3>
              <h6>Front-End Web Development</h6>
              <p>HTML 5, CSS 3, Bootstrap 4, JavaScript ES6, jQuery</p>
              <h6>Backend Web Development</h6>
              <p>Node.js, NPM, Express.js</p>
            </div>
          </div>
        
          <br/>
          <div className="skill-row ">
            <img className="phone-img" src={smartphone} alt=""/>
            <div className="ios">
            <h3>iOS Development</h3>
            <p>•	Concepts of Object-Oriented Programming (OOP)</p>
            <p>•	Software Design:  Model View Controller (MVC) design pattern,</p>
            <p>•	Networking using APIs and JSON</p>
            <p>•	Persistent Local Data Storage </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Skills;