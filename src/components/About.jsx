import React from 'react';

import aboutLogo from "../assets/images/about-logo.png";

const About = ( props ) => {
   return (
      <div className="about">
         <div className="about__wrapper">
            <div className="about__img">
               <img src={props.image} alt="drinking coffee" />
            </div>
            
            <div className="about__content">
               <h2>{props.title}</h2>
               <img src={aboutLogo} alt="coffee" className="img__title" />
               <p className="about__text">{props.p1}</p>
               <p className="about__text">{props.p2}</p>
            </div>
         </div>
      </div>
   )
}

export default About;