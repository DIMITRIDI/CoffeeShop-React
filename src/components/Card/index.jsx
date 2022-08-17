import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { selectCartItemById, addItem } from '../../redux/slices/cartSlice';

import heart from "../../assets/images/heart.svg";

function Card({ id, imageUrl, alt, title, price, weights }) {
   const dispatch = useDispatch();
   const cartItem = useSelector(selectCartItemById(id));
   const [activeWeight, setActiveWeight] = React.useState(0);

   const addedCount = cartItem ? cartItem.count : 0;

   const onClickAdd = () => {
      const item = {
         id,
         title,
         price,
         imageUrl,
         alt,
         weight: weights[activeWeight],
      };
      dispatch(addItem(item));
   };

   return (
      <div className="card">
         <img className="card__favorite" src={heart} alt="favorite" />
         <div className="card__img">
            <img className="img" src={imageUrl} alt={alt} />
         </div>
         <h3>{title}</h3>
         <div className="card__block-selector">
            <ul>
               {weights.map((weight, i) => (
                  <li key={weight} onClick={() => setActiveWeight(i)} className={activeWeight === i ? 'active' : ''} >{weight} g</li>
               ))}
            </ul>
         </div>
         <div className="card__bottom">
            <div className="card__bottom-price">
               <p>Price:</p>
               <b>{price} $</b>
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
   )
}

export default Card;