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
   const [categoryId, setCategoryId] = React.useState(0);
   const [sortType, setSortType] = React.useState({
      name: 'popularity desc',
      sortProperty: 'rating'
   });
   const [sortTypeBrand, setSortTypeBrand] = React.useState(0);

   React.useEffect(() => {
      setIsLoading(true);

      const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
      const sortBy = sortType.sortProperty.replace('-', '');
      const category = categoryId > 0 ? `category=${categoryId}` : '';
      const brand = sortTypeBrand > 0 ? `brand=${sortTypeBrand}` : '';

      fetch(`https://62dc35ac57ac3c3f3c583299.mockapi.io/items?${category}&${brand}&sortBy=${sortBy}&order=${order}`)
         .then((res) => res.json())
         .then((arr) => {
            setCoffees(arr);
            setIsLoading(false);
         });
      // window.scrollTo(0, 0);
   }, [categoryId, sortType, sortTypeBrand]);

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
                  <Filter value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
                  <Sort 
                     value={sortType} valueBrand={sortTypeBrand} 
                     onChangeSort={(i) => setSortType(i)} onChangeSortBrand={(i) => setSortTypeBrand(i)}
                  />
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