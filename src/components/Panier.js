import React from 'react'
import {emptyItemsCart} from './utils'
import {useState, useEffect} from 'react'
import CartItem from './CartItem';
import CustomButton from './CustomButton';





function Panier({close, showPanier, emptyCart, cartItems, sumCart, removeItem, updateItem}) {


  
  
  return (
    <div id='panier' className={`${showPanier? "showPanier" : "hidePanier"}`}>
      
       <div id="headerPanier">
          <div id='panierClose'><svg onClick={()=>close()} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></div>
          <div id='panierTitre'><h3>Panier</h3></div>
      </div>

      <div id="mainPanier"> 

      {/*cartItems !== "" && cartItems.map(item => <CartItem id={item.num} src={item.img} nom={item.nom} prix={item.prix} qte={item.qte} removeItem={removeItem}/>)*/}

      {/*cartItems !== "" && cartItems.map(item => <CartItem key={item.num} id={item.num} src={item.img} nom={item.nom} prix={item.prix} qte={item.qte} removeItem={removeItem}/>)*/}
    
    {cartItems !=="" ? cartItems.map(item => <CartItem key={item.num} id={item.num} src={item.img} nom={item.nom} prix={item.prix} qte={item.qte} removeItem={removeItem} updateItem={updateItem}/>) : <div id='emptyCart'><p>Votre panier est tristement vide ... </p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm240 80c0-8.8 7.2-16 16-16c45 0 85.6 20.5 115.7 53.1c6 6.5 5.6 16.6-.9 22.6s-16.6 5.6-22.6-.9c-25-27.1-57.4-42.9-92.3-42.9c-8.8 0-16-7.2-16-16zm-80 80c-26.5 0-48-21-48-47c0-20 28.6-60.4 41.6-77.7c3.2-4.4 9.6-4.4 12.8 0C179.6 308.6 208 349 208 369c0 26-21.5 47-48 47zM367.6 208a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg><p>Visitez notre boutique pour trouver votre bonheur !</p></div>}


    </div>
    
    <div id='footerPanier'>

    <div id="totalCart"><span>TOTAL : {sumCart} €</span></div>
    <CustomButton onClick={()=>{emptyCart()}} text="REINITIALISER LE PANIER"/>
    <CustomButton onClick={()=>{alert("Limite du cahier des charges")}} text="VALIDER LE PANIER"/>

      
    </div>
    
    </div>

    
  )




}

export default Panier