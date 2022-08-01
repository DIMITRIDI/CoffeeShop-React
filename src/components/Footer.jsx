import { Link } from "react-router-dom";

import footerLogo from "../assets/images/footer-logo.png";
import aboutLogo from "../assets/images/about-logo.png";

function Footer() {
   return (
      <footer className="footer">
         <div className="wrapper">
            <div className="footer__top">
               <img src={footerLogo} alt="coffee" />
               <ul>
                  <Link to="/"><li>Coffee house</li></Link>
                  <Link to="/our-coffee"><li>Our coffee</li></Link>
                  <Link to="/four-your-pleasure"><li className="p0">For your pleasure</li></Link>
               </ul>
            </div>
            <img className='img__title' src={aboutLogo} alt="coffee" />
         </div>
      </footer>
   )
}

export default Footer;