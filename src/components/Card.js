import React from "react";

function Card({ imageUrl, alt, name, price, onClickAdd }) {
   const [isFavorite, setIsFavorite] = React.useState(false);

   const onFavorite = () => {
      setIsFavorite(!isFavorite)
   }

   const onAdd = () => {
      onClickAdd({ imageUrl, alt, name, price });
   }

   return (
      <div className="card">
         <img className="card__favorite" onClick={onFavorite} src={isFavorite ? "images/heart-liked.svg" : "images/heart.svg"} alt="favorite" />
         <img className="img" src={imageUrl} alt={alt} />
         <h3>{name}</h3>
         <div className="card__bottom">
            <div className="card__bottom-price">
               <p>Price:</p>
               <b>{price} $</b>
            </div>
            <button className="card__add" onClick={onAdd} ><span>&#10010;</span></button>
         </div>
      </div>
   )
}

export default Card;