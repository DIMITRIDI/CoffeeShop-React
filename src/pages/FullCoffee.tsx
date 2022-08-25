import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Navigation from '../components/Navigation';
import Control from '../components/Control';

import { selectCartItemById, addItem, CartItem } from '../redux/slices/cartSlice';

type FullCoffeeProps = {
   id: string;
   title: string;
   price: number;
   imageUrl: string;
   alt: string;
   weights: number[];
};

const FullCoffee: React.FC<FullCoffeeProps> = ({ title, price, imageUrl, alt }) => {
   const [coffee, setCoffee] = React.useState<{
      imageUrl: string;
      alt: string;
      title: string;
      price: number;
      weights: number;
      category__full: string;
      description: string;
      packing: string;
      type__drink: string;
      type__grains: string;
      technology: string;
      roasting: string;
   }>();
   const { id } = useParams();
   const navigate = useNavigate();

   React.useEffect(() => {
      async function fetchCoffee() {
         try {
            const { data } = await axios.get('https://62dc35ac57ac3c3f3c583299.mockapi.io/items/' + id);
            setCoffee(data);
         } catch (error) {
            alert('Server error');
            navigate('/');
         }
      }

      fetchCoffee();
   }, []);

   const dispatch = useDispatch();
   const cartItem = useSelector(selectCartItemById(id!));
   // const [activeWeight, setActiveWeight] = React.useState(0);

   const addedCount = cartItem ? cartItem.count : 0;

   const onClickAdd = () => {
      const item: CartItem = {
         id: '',
         title,
         price,
         imageUrl,
         alt,
         weight: 0,
         count: 0
      };
      dispatch(addItem(item));
   };

   if (!coffee) {
      return <>Loading...</>;
   }

   return (
      <div className="full__coffee">
         <div className="wrapper">
            <div className="header__top">
               <Navigation />
               <Control />
            </div>
            <div className="full__coffee-container">
               <h3 className="full__coffee-title">{coffee.title}</h3>
               <div className="full__coffee-flex">
                  <div className="full__coffee-img">
                     <img src={coffee.imageUrl} alt={coffee.alt} />
                  </div>
                  <div className="full__coffee-right">
                     <div className="full__coffee-category">
                        <h5>Category:</h5>
                        <p>{coffee.category__full}</p>
                     </div>
                     <div className="full__coffee-category">
                        <h5>Product description:</h5>
                        <p>{coffee.description}</p>
                     </div>
                     <div className="full__coffee-characteristics">
                        <h5>Product characteristics:</h5>
                        <ul className="full__coffee-type">
                           <li>Packing<span>{coffee.packing}</span></li>
                           <li>Type of drink<span>{coffee.type__drink}</span></li>
                           <li>Type of grains<span>{coffee.type__grains}</span></li>
                           <li>Manufacturing technology<span>{coffee.technology}</span></li>
                           <li>The degree of roasting<span>{coffee.roasting}</span></li>
                        </ul>
                     </div>
                     <div className="card__block-selector">
                        <ul>
                           {/* {weights.map((weight, i) => (
                              <li key={weight} onClick={() => setActiveWeight(i)} className={activeWeight === i ? 'active' : ''} >{weight} g</li>
                           ))} */}
                        </ul>
                     </div>
                     <div className="full__coffee-category full__coffee-price">
                        <p>Price:</p>
                        <b>{coffee.price} $</b>
                     </div>
                     <button onClick={onClickAdd} className="button button__outline button__add">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#CD853F" />
                        </svg>
                        <span>Add</span>
                        {addedCount > 0 && <i>{addedCount}</i>}
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FullCoffee;