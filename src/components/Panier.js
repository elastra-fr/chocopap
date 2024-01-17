import React from 'react'
import {emptyItemsCart} from './utils'
//import CartItem from './CartItem'
import {useState, useEffect} from 'react'
import CartItem from './CartItem';
//import CartItem from './CartItem';





function Panier({close, showPanier, emptyCart, cartItems}) {

  console.log(cartItems);
  if(cartItems){
console.log(cartItems);
//console.log(Array.isArray(JSON.parse(cartItems)));
  }
  return (
    <div id='panier' className={`${showPanier? "showPanier" : "hidePanier"}`}>
     <div id="headerPanier">
     <svg onClick={()=>close()} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
     
     <p>Panier</p>




     <div>

  {cartItems !== "" && cartItems.map(item => <CartItem/>)}


       

     </div>

    </div>
    
    <div id='footerPanier'>
    <button onClick={()=>{emptyCart()}}>REINITIALISER LE PANIER</button>

      
    </div>
    
    </div>

    
  )
}

export default Panier