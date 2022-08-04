import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import OurCoffee from "./pages/OurCoffee";
import ForYourPleasure from "./pages/ForYourPleasure";
import Page404 from "./pages/404";
import Cart from "./pages/Cart";

import './scss/app.scss';

function App() {
   return (
      <>
         {/* <Cart /> */}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-coffee" element={<OurCoffee />} />
            <Route path="/four-your-pleasure" element={<ForYourPleasure />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Page404 />} />
         </Routes>
      </>
   );
}

export default App;
