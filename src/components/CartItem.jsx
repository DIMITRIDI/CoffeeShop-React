import React from 'react';
import { useDispatch } from 'react-redux/es/exports';

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
      <div class="cart__item">
         <div class="cart__item-img">
            <img src={imageUrl} alt={alt} />
         </div>
         <div class="cart__item-info">
            <h3>{title}</h3>
            <p>{weight} g.</p>
         </div>
         <div className="cart__item-flex">
            <div class="cart__item-count">
               <div onClick={onClickMinus} class="cart__button">-</div>
               <b>{count}</b>
               <div onClick={onClickPlus} class="cart__button">+</div>
            </div>
            <div class="cart__item-price">
               <b>{price * count} $</b>
            </div>
            <div class="cart__item-remove">
               <div onClick={onClickRemove} class="cart__button">x</div>
            </div>
         </div>
      </div>
   )
}

export default CartItem;