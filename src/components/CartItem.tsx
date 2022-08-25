import React from 'react';
import { useDispatch } from 'react-redux/es/exports';

import { addItem, CartItem, minusItem, removeItem } from '../redux/slices/cartSlice';

type CartItemProps = {
   id: string;
   title: string;
   alt: string;
   weight: number;
   price: number;
   count: number;
   imageUrl: string;
};

const CartItemBlock: React.FC<CartItemProps> = ({ id, imageUrl, alt, title, weight, price, count }) => {
   const dispatch = useDispatch();

   const onClickPlus = () => {
      dispatch(addItem({ id } as CartItem ));
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
               <div onClick={onClickMinus} className="cart__button">-</div>
               <b>{count}</b>
               <div onClick={onClickPlus} className="cart__button">+</div>
            </div>
            <div className="cart__item-price">
               <b>{price * count} $</b>
            </div>
            <div className="cart__item-remove">
               <div onClick={onClickRemove} className="cart__button">x</div>
            </div>
         </div>
      </div>
   )
}

export default CartItemBlock;