import { Link } from "react-router-dom";

function Footer() {
   return (
      <footer className="footer">
         <div className="wrapper">
            <div className="footer__top">
               <img src="/images/footer-logo.png" alt="coffee" />
               <ul>
                  <Link to="/"><li>Coffee house</li></Link>
                  <Link to="/our-coffee"><li>Our coffee</li></Link>
                  <Link to="/four-your-pleasure"><li className="p0">For your pleasure</li></Link>
               </ul>
            </div>
            <img className='img__title' src="/images/about-logo.png" alt="coffee" />
         </div>
      </footer>
   )
}

export default Footer;