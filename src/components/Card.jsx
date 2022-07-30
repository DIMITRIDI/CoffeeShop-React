
function Card({ imageUrl, alt, title, price }) {

   return (
      <div className="card">
         <img className="card__favorite" src="images/heart.svg" alt="favorite" />
         <img className="img" src={imageUrl} alt={alt} />
         <h3>{title}</h3>
         <div className="card__bottom">
            <div className="card__bottom-price">
               <p>Price:</p>
               <b>{price} $</b>
            </div>
            <button className="card__add" ><span>&#10010;</span></button>
         </div>
      </div>
   )
}

export default Card;