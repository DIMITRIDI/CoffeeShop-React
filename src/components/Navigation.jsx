import { Link } from "react-router-dom";

import headerLogo from "../assets/images/header-logo.png";

function Navigation() {
   return (
      <div className="header__top-left">
         <img src={headerLogo} alt="coffee" />
         <ul>
            <Link to="/"><li>Coffee house</li></Link>
            <Link to="/our-coffee"><li>Our coffee</li></Link>
            <Link to="/four-your-pleasure"><li>For your pleasure</li></Link>
         </ul>
      </div>
   )
}

export default Navigation;