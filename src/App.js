
import './App.scss';

function App() {
   return (
      <div className="App">
         <header className="header">
            <div className="wrapper">
               <div className="header__top">
                  <div className="header__top-left">
                     <img src="/images/header-logo.png" alt="coffee" />
                     <ul>
                        <li>Coffee house</li>
                        <li>Our coffee</li>
                        <li>For your pleasure</li>
                     </ul>
                  </div>
                  <ul className="header__top-right">
                     <li>
                        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>10.73 $</span>
                     </li>
                     <li>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z" fill="#FFFFFF"/>
                        </svg>
                     </li>
                  </ul>
               </div>
               <h1 className="header__title">Everything You Love About Coffee</h1>
               <img src="/images/baner-logo.png" alt="coffee" className="header__img" />
               <p className="header__text">We makes every day full of energy and taste <br/>Want to try our beans?</p>
               <button>More</button>
            </div>
         </header>
         <div className="about">
            <div className="wrapper">
               <h2>About Us</h2>
               <img src="/images/about-logo.png" alt="coffee" className="about__img" />
               <p className="about__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
               <p className="about__text">Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.</p>
            </div>
         </div>
         <div className="best">
            <div className="wrapper">
               <h2>Our best</h2>
               <div className="cards">
                  <div className="card">
                     <img src="/images/coffee/1.jpg" alt="" />
                     <h3>Solimo Coffee Beans 2 kg</h3>
                     <div className="card__bottom">
                        <div className="card__bottom-price">
                           <p>Price:</p>
                           <b>10.73 $</b>
                        </div>
                        <button>
                           <svg width="24" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#CD853F"/>
                           </svg>
                        </button>
                     </div>
                  </div>
                  <div className="card">
                     <img src="/images/coffee/1.jpg" alt="" />
                     <h3>Solimo Coffee Beans 2 kg</h3>
                     <div className="card__bottom">
                        <div className="card__bottom-price">
                           <p>Price:</p>
                           <b>10.73 $</b>
                        </div>
                        <button>
                           <svg width="24" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#CD853F"/>
                           </svg>
                        </button>
                     </div>
                  </div>
                  <div className="card">
                     <img src="/images/coffee/1.jpg" alt="" />
                     <h3>Solimo Coffee Beans 2 kg</h3>
                     <div className="card__bottom">
                        <div className="card__bottom-price">
                           <p>Price:</p>
                           <b>10.73 $</b>
                        </div>
                        <button>
                           <svg width="24" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#CD853F"/>
                           </svg>
                        </button>
                     </div>
                  </div>
                  <div className="card">
                     <img src="/images/coffee/1.jpg" alt="" />
                     <h3>Solimo Coffee Beans 2 kg</h3>
                     <div className="card__bottom">
                        <div className="card__bottom-price">
                           <p>Price:</p>
                           <b>10.73 $</b>
                        </div>
                        <button>
                           <svg width="24" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#CD853F"/>
                           </svg>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <footer className="footer">
            <div className="wrapper">
               <div className="footer__top">
                  <img src="/images/footer-logo.png" alt="coffee" />
                  <ul>
                     <li>Coffee house</li>
                     <li>Our coffee</li>
                     <li>For your pleasure</li>
                  </ul>
               </div>
               <img src="/images/about-logo.png" alt="coffee" />
            </div>
         </footer>
      </div>
   );
}

export default App;
