import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectSort, setSort, setSortBrand } from '../redux/slices/filterSlice';

export const sortList = [{ name: "popularity desc", sortProperty: "rating" }, 
   { name: "popularity asc", sortProperty: "-rating" },
   { name: "price desc", sortProperty: "price" },
   { name: "price asc", sortProperty: "-price" },
   { name: "alphabetical desc", sortProperty: "title" },
   { name: "alphabetical asc", sortProperty: "-title" }];

function Sort() {
   const dispatch = useDispatch();
   const sort = useSelector(selectSort);
   const sortBrand = useSelector((state) => state.filter.sortBrand);
   const sortRef = React.useRef();

   const [open, setOpen] = React.useState(false);

   const onClickListItem = (obj) => {
      dispatch(setSort(obj));
      setOpen(false);
   }

   const [openBrand, setOpenBrand] = React.useState(false);
   const listOpenBrand = ["all", "Jardin", "Jacobs", "Lavazza", "Kimbo", "Nescafe"];
   const sortNameBrand = listOpenBrand[sortBrand];

   const onClickListOpenBrend = (j) => {
      dispatch(setSortBrand(j));
      setOpenBrand(false);
   }

   React.useEffect(() => {
      const handleClickOutside = (event) => {
         if (!event.path.includes(sortRef.current)) {
            setOpen(false);
            setOpenBrand(false);
         }
      }

      document.body.addEventListener('click', handleClickOutside);

      return () => {
         document.body.removeEventListener('click', handleClickOutside);
      }
   }, []);

   return (
      <div ref={sortRef} className="flex">
         <div className="sort">
            <div className="sort__label">
               <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C" />
               </svg>
               <b>Sort by:</b>
               <span onClick={() => setOpen(!open)}>{sort.name}</span>
            </div>
            {open && (
               <div className="sort__popup">
                  <ul>
                     {sortList.map((obj, i) => (
                        <li key={i} onClick={() => onClickListItem(obj)} className={sort.sortProperty === obj.sortProperty ? 'active' : ''} >{obj.name}</li>
                     ))}
                  </ul>
               </div>
            )}
         </div>
         <div className="sort">
            <div className="sort__label">
               <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C" />
               </svg>
               <b>Sort brand:</b>
               <span onClick={() => setOpenBrand(!openBrand)}>{sortNameBrand}</span>
            </div>
            {openBrand && (
               <div className="sort__popup">
                  <ul>
                     {listOpenBrand.map((name, j) => (
                        <li key={j} onClick={() => onClickListOpenBrend(j)} className={sortBrand === j ? 'active' : ''} >{name}</li>
                     ))}
                  </ul>
               </div>
            )}
         </div>
      </div>
   )
}

export default Sort;