function Card(props) {
   
   const onClickButton = () => {
      alert(props.price);
   }

   return (
      <div className="card">
         <button className="card__favorite"><span>&#9825;</span></button>
         <img className="img" src={props.imageUrl} alt={props.alt} />
         <h3>{props.name}</h3>
         <div className="card__bottom">
            <div className="card__bottom-price">
               <p>Price:</p>
               <b>{props.price} $</b>
            </div>
            <button className="card__add" onClick={props.onClick} ><span>&#43;</span></button>
         </div>
      </div>
   )
}

export default Card;