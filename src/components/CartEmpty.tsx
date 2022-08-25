import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImage from '../assets/images/empty-cart.png';

const CartEmpty: React.FC = () => {
   return (
      <div className="cart cart__empty">
         <div className="cart__container">
            <h2>
               Cart is empty <i>😕</i>
            </h2>
            <div className="cart__empty-flex">
               <img src={cartEmptyImage} alt="Empty cart" />
               <p>
                  Chances are you haven't chosen coffee yet.
                  <br />
                  In order to choose coffee, go to the main page.
               </p>
            </div>
            <Link to="/" className="button button__param">
               <span>Come back</span>
            </Link>
         </div>
      </div>
   )
}

export default CartEmpty;