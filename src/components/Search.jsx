import search from "../assets/images/search.svg";

function Search() {
   return (
      <div className="search__block">
         <p>Lookiing for:</p>
         <div className="search__block-content">
            <img src={search} alt="Search" />
            <span className="search__block-close">&times;</span>
            <input  type="text" placeholder='Search...' />
         </div>
      </div>
   )
}

export default Search;