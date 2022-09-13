import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCoffeeData } from '../redux/slices/coffeeSlice';
import { setCurrentPage, selectFilter } from '../redux/slices/filterSlice';


import Navigation from '../components/Navigation';
import Control from '../components/Control';
import About from '../components/About';
import Search from '../components/Search';
import Card from '../components/Card';
import Footer from "../components/Footer";
import Skeleton from '../components/Card/Skeleton';
import Pagination from '../components/Pagination';

import ourAbout from "../assets/images/our-about.jpg";

const OurCoffee = () => {
   const dispatch = useDispatch();
   const { items, status} = useSelector(selectCoffeeData);
   const { currentPage } = useSelector(selectFilter);

   const onChangePage = (page) => {
      dispatch(setCurrentPage(page));
   };

   const coffeesContext = items.map(obj => <Card key={obj.id} {...obj} />);
   const sceletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

   return (
      <>
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
               {status === 'error' ? ( <div className="best__error">
                  <h2>loading error <i>😕</i></h2>
                  <p>Chances are you haven't chosen coffee yet.<br />To select a coffee, reload the page.</p>
               </div> ) : (<div className="cards">
                  {status === 'loading' ? sceletons : coffeesContext}
               </div>)}
               <Pagination currentPage={currentPage} onChangePage={onChangePage} />
            </div>
         </div>
         <Footer />
      </>
   )
}

export default OurCoffee;