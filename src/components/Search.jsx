import search from "../assets/images/search.svg";

function Search({ searchValue, setSearchValue }) {
   return (
      <div className="search__block">
         <p>Lookiing for:</p>
         <div className="search__block-content">
            <img src={search} alt="Search" />
            {searchValue && (
               <span onClick={() => setSearchValue('')} className="search__block-close">&times;</span>
            )}
            <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} type="text" placeholder='Search coffee...' />
         </div>
      </div>
   )
}

export default Search;