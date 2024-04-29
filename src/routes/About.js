import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return ( <div className="cont">
    <div className="about__container">
      <p > Я сделал этот проект, потому что люблю фильмы и стажировки в VK <span>&#10084;</span>.</p>
    </div>
  </div>
    
  );
}

export default About;
