import React from 'react';

import Navigation from '../components/Navigation';
import Control from '../components/Control';
import About from '../components/About';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import Search from '../components/Search';
import Card from '../components/Card';

import ourAbout from "../assets/images/our-about.jpg";

import coffees from "../assets/coffees.json";

const OurCoffee = () => {
   return (
      <>
         {/* <Cart /> */}
         <header className="header header__our-bg">
            <div className="wrapper">
               <div className="header__top">
                  <Navigation />
                  <Control />
               </div>
               <h1 className='pb150'>Our Coffee</h1>
            </div>
         </header>
         <About title="About our beans" image={ourAbout} p1="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible." p2="Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face." />
         <div className="best">
            <div className="wrapper">
               <h2>Our Best</h2>
               <div className="best__block">
                  <Filter />
                  <Sort />
                  <Search />
               </div>
               <div className="cards">
                  {coffees.map((obj) => (
                     <Card {...obj} />
                  ))}
               </div>
            </div>
         </div>
      </>
   )
}

export default OurCoffee;