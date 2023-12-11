import React from 'react'
import '../style/CardProducts.css'
import { Link } from 'react-router-dom'

function CardProduct({key, id, urlImage, name, price, note}) {
  return (
    <div key={key} className='cardWrapper'>
      <Link to={`/FicheProduit/${id}`}>
        <img src={urlImage} alt='Produit'/>
        </Link>
        <p>{name}</p>
        <p>{price + " €"}</p>
        <p>{note}</p>
        <button>Ajouter au panier</button>
    </div>
  )
}

export default CardProduct