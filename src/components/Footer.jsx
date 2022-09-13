import { NavLink } from "react-router-dom";

import footerLogo from "../assets/images/footer-logo.png";
import aboutLogo from "../assets/images/about-logo.png";

function Footer() {
   return (
      <footer className="footer">
         <div className="wrapper">
            <div className="footer__top">
               <img src={footerLogo} alt="coffee" />
               <ul>
                  <NavLink to="/">Coffee house</NavLink>
                  <NavLink to="/our-coffee">Our coffee</NavLink>
                  <NavLink className="p0" to="/four-your-pleasure">For your pleasure</NavLink>
               </ul>
            </div>
            <img className='img__title' src={aboutLogo} alt="coffee" />
         </div>
      </footer>
   )
}

export default Footer;