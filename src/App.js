import React from "react";

import Cart from "./components/Cart";
import Header from "./components/Header";
import Card from "./components/Card";
import About from "./components/About";
import Footer from "./components/Footer";

import './App.scss';

function App() {
   const [items, setItems] = React.useState([]);
   const [cartItems, setCartItems] = React.useState([]);
   const [cartOpened, setCartOpened] = React.useState(false);

   React.useEffect(() => {
      fetch('https://62dc35ac57ac3c3f3c583299.mockapi.io/items').then((res) => {
         return res.json();
      })
      .then((json) => {
         setItems(json);
      });
   }, []);

   const onAddToCart = (obj) => {
      setCartItems(prev => [...prev, obj]);
   }

   return (
      <>
         {cartOpened && <Cart items={cartItems} onCloseCart={() => setCartOpened(false)} />}
         <Header onClickCart={() => setCartOpened(true)} />
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
                  {items.map((item, index) => (
                     <Card 
                        key={index}
                        name={item.name} 
                        alt={item.alt} 
                        price={item.price} 
                        imageUrl={item.imageUrl}
                        onClickFavorite={() => console.log("Добавили в закладки")}
                        onClickAdd={(obj) => onAddToCart(obj)} />
                  ))}
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
}

export default App;
