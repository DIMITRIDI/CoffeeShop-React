import React from 'react';
import debounce from 'lodash.debounce';

import { SearchContext } from '../App';

import search from "../assets/images/search.svg";

function Search() {
   const [value, setValue] = React.useState('');
   const { setSearchValue } = React.useContext(SearchContext);
   const inputRef = React.useRef();

   const onClickClear = () => {
      setSearchValue('');
      setValue('');
      inputRef.current.focus();
   };

   const updateSearchValue = React.useCallback(
      debounce((str) => {
         setSearchValue(str);
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