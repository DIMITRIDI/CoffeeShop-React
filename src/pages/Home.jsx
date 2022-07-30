import React from 'react';

import Navigation from '../components/Navigation';
import Control from '../components/Control';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import Search from '../components/Search';
import Card from '../components/Card';

const Home = () => {
   return (
      <>
         {/* <Cart /> */}
         <header className="header">
            <div className="wrapper">
               <div className="header__top">
                  <Navigation />
                  <Control />
               </div>
               <h1>Everything You Love About Coffee</h1>
               <img src="/images/baner-logo.png" alt="coffee" className='img__title' />
               <p className="header__text">We makes every day full of energy and taste <br/>Want to try our beans?</p>
               <button className="header__btn">More</button>
            </div>
         </header>
         <div className="about">
            <div className="about__wrapper">
               <img className="about__img" src="/images/pleasure-about.jpg" alt="drinking coffee" />
               <div className="about__content">
                  <h2>About Us</h2>
                  <img src="/images/about-logo.png" alt="coffee" className="img__title" />
                  <p className="about__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
                  <p className="about__text">Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.</p>
               </div>
            </div>
         </div>
         <div className="best">
            <div className="wrapper">
               <h2>Our Best</h2>
               <div className="best__block">
                  <Filter />
                  <Sort />
                  <Search />
               </div>
               <div className="cards">
                  <Card 
                     // key={item.name}
                     // name={item.name} 
                     // alt={item.alt} 
                     // price={item.price} 
                     // imageUrl={item.imageUrl}
                     // onClickFavorite={(obj) => onAddToFavorite(obj)}
                     // onClickAdd={(obj) => onAddToCart(obj)} 
                  />
               </div>
            </div>
         </div>
      </>
   )
}

export default Home;