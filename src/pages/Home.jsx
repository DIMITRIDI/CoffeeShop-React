import React from 'react';

import Navigation from '../components/Navigation';
import Control from '../components/Control';
import About from '../components/About';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import Search from '../components/Search';
import Card from '../components/Card';
import Footer from "../components/Footer";
import Skeleton from '../components/Card/Skeleton';

import banerLogo from "../assets/images/baner-logo.png";
import homeAbout from "../assets/images/home-about.jpg";

const Home = () => {
   const [coffees, setCoffees] = React.useState([]);
   const [isLoading, setIsLoading] = React.useState(true);

   React.useEffect(() => {
      fetch('https://62dc35ac57ac3c3f3c583299.mockapi.io/items')
         .then((res) => res.json())
         .then((arr) => {
            setCoffees(arr);
            setIsLoading(false);
         });
   }, []);

   return (
      <>
         <header className="header header__home-bg">
            <div className="wrapper">
               <div className="header__top">
                  <Navigation />
                  <Control />
               </div>
               <h1>Everything You Love About Coffee</h1>
               <img src={banerLogo} alt="coffee" className='img__title' />
               <p className="header__text">We makes every day full of energy and taste <br/>Want to try our beans?</p>
               <button className="header__btn">More</button>
            </div>
         </header>
         <About title="About Us" image={homeAbout} p1="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face." p2="Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now." />
         <div className="best">
            <div className="wrapper">
               <h2>Our Best</h2>
               <div className="best__block">
                  <Filter />
                  <Sort />
                  <Search />
               </div>
               <div className="cards">
                  {isLoading ? [...new Array(8)].map((_, index) => <Skeleton key={index} />) : coffees.map(obj => <Card key={obj.id} {...obj} />)}
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
}

export default Home;