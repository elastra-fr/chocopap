import React from 'react'
import '../style/CardProducts.css'
import { Link } from 'react-router-dom'
import {insertItemCart, removeItemCart, updateItemCart} from './utils.js'

function CardProduct({close, showPanier, gestionCart, id, urlImage, name, price, note}) {
//console.log(id);

  return (
    <div key={"produit"+id} className='cardWrapper'>
      <div id='cardBody'>
      <Link to={`/FicheProduit/${id}`} close={close} showPanier={showPanier}>
        <img src={urlImage} alt='Produit'/>
        </Link>
          </div>
        <div className='cardFooter'>
        <p className='productName'>{name}</p>
        <p>{price + " €"}</p>
        <p className='noteTag'>{"Note : " + note}</p>
        <button onClick={()=>{gestionCart(id, urlImage, name, price, 1)} /*()=>{emptyCart()}*/}>Ajouter au panier</button>
        </div>
    </div>
  )
}

export default CardProduct