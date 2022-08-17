import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

import { selectCart } from "../redux/slices/cartSlice";

import cart from "../assets/images/cart.svg";
import favorite from "../assets/images/header-heart.svg";
import user from "../assets/images/user.svg";

function Control() {
   const { items, totalPrice } = useSelector(selectCart);

   const totalCount = items.reduce((sum, item) => sum + item.count, 0);

   return (
      <ul className="header__top-right">
         <li>
            <NavLink to="/cart">
               <span>{totalPrice} $</span>
               <img src={cart} alt="cart" />
               <span>{totalCount}</span>
            </NavLink>
         </li>
         <li><img src={favorite} alt="heart" /></li>
         <li><img src={user} alt="user" /></li>
      </ul>
   )
}

export default Control;