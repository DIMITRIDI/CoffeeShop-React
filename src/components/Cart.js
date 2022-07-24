function Cart({ onCloseCart, items = [] }) {
   return (
      <div className="overlay">
         <div className="cart">
            <h3>Cart<span onClick={onCloseCart} className="cart__item-close">&times;</span></h3>
            <div className="cart__items">
               {items.map((obj) => (
                  <div className="cart__item">
                     <img className="cart__item-img" src={obj.imageUrl} alt={obj.alt} />
                     <div className="cart__item-content">
                        <h4>{obj.name}</h4>
                        <b>{obj.price} $</b>
                     </div>
                     <span className="cart__item-close">&times;</span> 
                  </div>
               ))}
            </div>
            <div className="cart__total-items">
               <ul className='cart__total'>
                  <li className='cart__total-block'>
                     <span>Total:</span>
                     <div></div>
                     <b>20.73 $</b>
                  </li>
                  <li className='cart__total-block'>
                     <span>Tax 5%</span>
                     <div></div>
                     <b>1.35 $</b>
                  </li>
               </ul>
               <button className='cart__button'>Checkout <img src='/images/arrow.svg' alt='arrow'/> </button>
            </div>
         </div>
      </div>
   )
}

export default Cart;