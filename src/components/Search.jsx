function Search() {
   return (
      <div className="search__block">
         <p>Lookiing for</p>
         <div className="search__block-content">
            <img src="/images/search.svg" alt="Search" />
            <span className="search__block-close">&times;</span>
            <input value="" type="text" placeholder='Search...' />
         </div>
      </div>
   )
}

export default Search;