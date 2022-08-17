import React from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import { setSearchValue } from '../redux/slices/filterSlice';

import search from "../assets/images/search.svg";

function Search() {
   const dispatch = useDispatch();
   const [value, setValue] = React.useState('');
   const inputRef = React.useRef();

   const onClickClear = () => {
      dispatch(setSearchValue(''));
      setValue('');
      inputRef.current.focus();
   };

   const updateSearchValue = React.useCallback(
      debounce((str) => {
         dispatch(setSearchValue(str));
      }, 1000), 
      [], 
   );

   const onChangeInput = (event) => {
      setValue(event.target.value);
      updateSearchValue(event.target.value);
   }

   return (
      <div className="search__block">
         <p>Lookiing for:</p>
         <div className="search__block-content">
            <img src={search} alt="Search" />
            {value && (
               <span onClick={onClickClear} className="search__block-close">&times;</span>
            )}
            <input ref={inputRef} value={value} onChange={onChangeInput} type="text" placeholder='Search coffee...' />
         </div>
      </div>
   )
}

export default Search;