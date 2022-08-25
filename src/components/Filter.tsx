import React from "react";

type FilterProps ={
   value: number;
   onChangeCategory: (i: number) => void;
};

const categories = ["All", "Instant", "Grainy", "Ground", "Portion"];

const Filter: React.FC<FilterProps> = ({ value, onChangeCategory }) => {
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