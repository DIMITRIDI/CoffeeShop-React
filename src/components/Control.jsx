import { NavLink } from "react-router-dom";

import cart from "../assets/images/cart.svg";
import favorite from "../assets/images/header-heart.svg";
import user from "../assets/images/user.svg";

function Control() {
   return (
      <ul className="header__top-right">
         <li>
            <NavLink to="/cart">
               <img src={cart} alt="cart" />
               <span>10.73 $</span>
            </NavLink>
         </li>
         <li><img src={favorite} alt="heart" /></li>
         <li><img src={user} alt="user" /></li>
      </ul>
   )
}

export default Control;