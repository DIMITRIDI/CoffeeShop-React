import React from "react";

function Filter({ value, onChangeCategory }) {

   const categories = ["All", "Instant", "Grainy", "Ground", "Portion"];

   return (
         <div className="filter__block">
            <p>Or filter:</p>
            <ul >
               {categories.map((categoryName, i) => (
                  <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''} >{categoryName}</li>
               ))}
            </ul>
         </div>
   )
}

export default Filter;