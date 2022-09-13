import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import clsx from 'clsx';

import { addItem, minusItem, removeItem } from '../redux/slices/cartSlice';

const CartItem = ({ id, imageUrl, alt, title, weight, price, count }) => {
   const dispatch = useDispatch();

   const onClickPlus = () => {
      dispatch(addItem({ id }));
   };

   const onClickMinus = () => {
      dispatch(minusItem(id));
   };

   const onClickRemove = () => {
      if (window.confirm('Are you sure you want to remove?')) {
         dispatch(removeItem(id));
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
            <div className="cart__item-count">
               <button disabled={count === 1} onClick={onClickMinus} className={clsx("cart__button", {'cart__button-disabled' : count === 1})}>-</button>
               <b>{count}</b>
               <button onClick={onClickPlus} className="cart__button">+</button>
            </div>
            <div className="cart__item-price">
               <b>{(price * count).toFixed(2)} $</b>
            </div>
            <div className="cart__item-remove">
               <button onClick={onClickRemove} className="cart__button">x</button>
            </div>
         </div>
      </div>
   )
}

export default CartItem;