import React from 'react';

import aboutLogo from "../assets/images/about-logo.png";

type AboutProps = {
   image: string;
   title: string;
   p1: string;
   p2: string;
};

const About: React.FC<AboutProps> = ({ image, title, p1, p2 }) => {
   return (
      <div className="about">
         <div className="about__wrapper">
            <div className="about__img">
               <img src={image} alt="drinking coffee" />
            </div>
            
            <div className="about__content">
               <h2>{title}</h2>
               <img src={aboutLogo} alt="coffee" className="img__title" />
               <p className="about__text">{p1}</p>
               <p className="about__text">{p2}</p>
            </div>
         </div>
      </div>
   )
}

export default About;