import React from "react";

function Filter() {
   const [activeIndex, setActiveIndex] = React.useState(0);

   const categories = ["All", "Instant", "Grain", "Ground", "Portion"];

   return (
         <div className="filter__block">
            <p>Or filter</p>
            <ul >
               {categories.map((value, i) => (
                  <li key={i} onClick={() => setActiveIndex(i)} className={activeIndex === i ? 'active' : ''} >{value}</li>
               ))}
            </ul>
         </div>
   )
}

export default Filter;