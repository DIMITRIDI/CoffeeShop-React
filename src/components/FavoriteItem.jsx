import React from 'react';
import { useDispatch } from 'react-redux/es/exports';

import { removeFavorite } from '../redux/slices/favoriteSlice';

const FavoriteItem = ({ id, imageUrl, alt, title, weight, price }) => {
   const dispatch = useDispatch();

   const onClickRemove = () => {
      if (window.confirm('Are you sure you want to remove?')) {
         dispatch(removeFavorite(id));
      }
   };

   return (
      <div className="cart__item">
         <div className="cart__item-img">
            <img src={imageUrl} alt={alt} />
         </div>
         <div className="cart__item-info">
            <h3>{title}</h3>
            <p>{weight} g.</p>
         </div>
         <div className="cart__item-flex">
            <div className="cart__item-price">
               <b>{price} $</b>
            </div>
            <div className="cart__item-remove">
               <button onClick={onClickRemove} className="cart__button">x</button>
            </div>
         </div>
      </div>
   )
}

export default FavoriteItem;