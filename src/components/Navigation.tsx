import React from 'react';
import { NavLink } from "react-router-dom";

import headerLogo from "../assets/images/header-logo.png";

const Navigation: React.FC = () => {
   return (
      <>
         <div className="header__top-left">
            <img src={headerLogo} alt="coffee" />
            <ul>
               <NavLink to="/">Coffee house</NavLink>
               <NavLink to="/our-coffee">Our coffee</NavLink>
               <NavLink to="/four-your-pleasure">For your pleasure</NavLink>
            </ul>
         </div>
      </>
   )
}

export default Navigation;