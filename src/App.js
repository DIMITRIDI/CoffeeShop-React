import Cart from "./components/Cart";
import Header from "./components/Header";
import Card from "./components/Card";
import About from "./components/About";
import Footer from "./components/Footer";

import './App.scss';

const arr = [
   { name: 'Solimo Coffee Beans 2 kg', alt: 'Solimo Coffee Beans', price: '10.73', imageUrl: '/images/coffee/1.jpg' },
   { name: 'Presto Coffee Beans 1 kg', alt: 'Presto Coffee Beans', price: '15.99', imageUrl: '/images/coffee/2.jpg' },
   { name: 'AROMISTICO Coffee 1 kg', alt: 'AROMISTICO Coffee', price: '6.93', imageUrl: '/images/coffee/3.jpg' },
   { name: 'Lavazza Caffe Espresso 2 kg', alt: 'Lavazza Caffe Espresso', price: '13.79', imageUrl: '/images/coffee/4.jpg' },
   { name: 'Bourbon Espresso Manchester 320 g', alt: 'Bourbon Espresso Manchester', price: '5.11', imageUrl: '/images/coffee/5.jpg' },
   { name: 'Kopi Luwak Roasied Coffee 370 g', alt: 'Kopi Luwak Roasied Coffee', price: '12.65', imageUrl: '/images/coffee/6.jpg' },
   { name: 'Jamaica Blue Mountain Coffee 2 kg', alt: 'Jamaica Blue Mountain Coffee', price: '15.99', imageUrl: '/images/coffee/7.jpg' },
   { name: '100% Arabica Cafedo Brasil 320 g', alt: '100% Arabica Cafedo Brasil', price: '9.79', imageUrl: '/images/coffee/8.jpg' }
]

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
                  {arr.map((obj) => (
                     <Card name={obj.name} alt={obj.alt} price={obj.price} imageUrl={obj.imageUrl} />
                  ))}
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
}

export default App;
