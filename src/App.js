import Cart from "./components/Cart";
import Header from "./components/Header";
import Card from "./components/Card";
import About from "./components/About";
import Footer from "./components/Footer";

import './App.scss';

function App() {
   return (
      <>
         <Cart />
         <Header />
         <About />
         <div className="best">
            <div className="wrapper">
               <div>
                  <h2>Our best</h2>
                  <div className="search__block">
                     <img src="/images/search.svg" alt="Search" />
                     <input type="text" placeholder='Search...' />
                  </div>
               </div>
               <div className="cards">
                  <Card />
                  <div className="card">
                     <img className="favorite" src="/images/heart-unliked.svg" alt="unliked" />
                     <img className="img" src="/images/coffee/2.jpg" alt="Presto Coffee Beans" />
                     <h3>Presto Coffee Beans 1 kg</h3>
                     <div className="card__bottom">
                        <div className="card__bottom-price">
                           <p>Price:</p>
                           <b>15.99 $</b>
                        </div>
                        <button>
                           <svg width="24" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#CD853F"/>
                           </svg>
                        </button>
                     </div>
                  </div>
                  <div className="card">
                     <img className="favorite" src="/images/heart-unliked.svg" alt="unliked" />
                     <img className="img" src="/images/coffee/3.jpg" alt="" />
                     <h3>AROMISTICO Coffee 1 kg</h3>
                     <div className="card__bottom">
                        <div className="card__bottom-price">
                           <p>Price:</p>
                           <b>6.93 $</b>
                        </div>
                        <button>
                           <svg width="24" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#CD853F"/>
                           </svg>
                        </button>
                     </div>
                  </div>
                  <div className="card">
                     <img className="favorite" src="/images/heart-unliked.svg" alt="unliked" />
                     <img className="img" src="/images/coffee/4.jpg" alt="Lavazza Caffe Espresso" />
                     <h3>Lavazza Caffe Espresso 2 kg</h3>
                     <div className="card__bottom">
                        <div className="card__bottom-price">
                           <p>Price:</p>
                           <b>13.79 $</b>
                        </div>
                        <button>
                           <svg width="24" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#CD853F"/>
                           </svg>
                        </button>
                     </div>
                  </div>
                  <div className="card">
                     <img className="favorite" src="/images/heart-unliked.svg" alt="unliked" />
                     <img className="img" src="/images/coffee/5.jpg" alt="Bourbon Espresso Manchester" />
                     <h3>Bourbon Espresso Manchester 320 g</h3>
                     <div className="card__bottom">
                        <div className="card__bottom-price">
                           <p>Price:</p>
                           <b>5.11 $</b>
                        </div>
                        <button>
                           <svg width="24" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#CD853F"/>
                           </svg>
                        </button>
                     </div>
                  </div>
                  <div className="card">
                     <img className="favorite" src="/images/heart-unliked.svg" alt="unliked" />
                     <img className="img" src="/images/coffee/6.jpg" alt="Kopi Luwak Roasied Coffee" />
                     <h3>Kopi Luwak Roasied Coffee 370 g</h3>
                     <div className="card__bottom">
                        <div className="card__bottom-price">
                           <p>Price:</p>
                           <b>12.65 $</b>
                        </div>
                        <button>
                           <svg width="24" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#CD853F"/>
                           </svg>
                        </button>
                     </div>
                  </div>
                  <div className="card">
                     <img className="favorite" src="/images/heart-unliked.svg" alt="unliked" />
                     <img className="img" src="/images/coffee/7.jpg" alt="Jamaica Blue Mountain Coffee" />
                     <h3>Jamaica Blue Mountain Coffee 2 kg</h3>
                     <div className="card__bottom">
                        <div className="card__bottom-price">
                           <p>Price:</p>
                           <b>15.99 $</b>
                        </div>
                        <button>
                           <svg width="24" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#CD853F"/>
                           </svg>
                        </button>
                     </div>
                  </div>
                  <div className="card">
                     <img className="favorite" src="/images/heart-unliked.svg" alt="unliked" />
                     <img className="img" src="/images/coffee/8.jpg" alt="100% Arabica Cafedo Brasil" />
                     <h3>100% Arabica Cafedo Brasil 320 g</h3>
                     <div className="card__bottom">
                        <div className="card__bottom-price">
                           <p>Price:</p>
                           <b>9.79 $</b>
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
         <Footer />
      </>
   );
}

export default App;
