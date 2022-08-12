import React from 'react';
import axios from 'axios';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import { sortList } from '../components/Sort';

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
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

const Home = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const isSearch = React.useRef(false);
   const isMounted = React.useRef(false);
   const { categoryId, sort, sortBrand, currentPage } = useSelector((state) => state.filter);


   const { searchValue } = React.useContext(SearchContext);
   const [coffees, setCoffees] = React.useState([]);
   const [isLoading, setIsLoading] = React.useState(true);

   const onChangeCategory = React.useCallback((idx) => {
      dispatch(setCategoryId(idx));
   }, []);

   const onChangePage = (page) => {
      dispatch(setCurrentPage(page));
   };

   const fetchCoffees = () => {
      setIsLoading(true);

      const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
      const sortBy = sort.sortProperty.replace('-', '');
      const category = categoryId > 0 ? `category=${categoryId}` : '';
      const brand = sortBrand > 0 ? `&brand=${sortBrand}` : '';
      const search = searchValue ? `&search=${searchValue}` : '';

      axios.get(`https://62dc35ac57ac3c3f3c583299.mockapi.io/items?page=${currentPage}&limit=8&${category}${brand}&sortBy=${sortBy}&order=${order}${search}`)
      .then(res => {
         setCoffees(res.data);
         setIsLoading(false);
      })
      // window.scrollTo(0, 0);
   }
   
   // Если изменили параметры и был первый рендер, то проводим следующую проверку
   React.useEffect(() => {
      if (isMounted.current) {
         const queryString = qs.stringify({
            sortProperty: sort.sortProperty,
            sortBrand,
            categoryId,
            currentPage,
         });

         navigate(`?${queryString}`);
      }
      isMounted.current = true;
   }, [categoryId, sort.sortProperty, sortBrand, currentPage]);

   // Если был первый рендер, то проверяем url-параметры и сохраняем в Redux 
   React.useEffect(() => {
      if (window.location.search) {
         const params = qs.parse(window.location.search.substring(1));
         
         const sort = sortList.find(obj => obj.sortProperty === params.sortProperty);

         dispatch(
            setFilters({
               ...params,
               sort,
            }),
         );
         isSearch.current = true;
      }
   }, []);

   // Если был первый рендер, то делаем запрос
   React.useEffect(() => {
      if (!isSearch.current) {
         fetchCoffees();
      }

      isSearch.current = false;
   }, [categoryId, sort.sortProperty, sortBrand, searchValue, currentPage]);

   const coffeesContext = coffees.map(obj => <Card key={obj.id} {...obj} />);
   const sceletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

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
                  <Filter value={categoryId} onChangeCategory={onChangeCategory} />
                  <Sort />
                  <Search />
               </div>
               <div className="cards">
                  {isLoading ? sceletons : coffeesContext}
               </div>
               <Pagination currentPage={currentPage} onChangePage={onChangePage} />
            </div>
         </div>
         <Footer />
      </>
   )
}

export default Home;