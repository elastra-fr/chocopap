import React from 'react'
import '../style/CardProducts.css'
import { Link } from 'react-router-dom'

function CardProduct({id, urlImage, name, price, note}) {
//console.log(id);

  return (
    <div key={"produit"+id} className='cardWrapper'>
      <div id='cardBody'>
      <Link to={`/FicheProduit/${id}`}>
        <img src={urlImage} alt='Produit'/>
        </Link>
          </div>
        <div className='cardFooter'>
        <p className='productName'>{name}</p>
        <p>{price + " €"}</p>
        <p>{"Note : " + note}</p>
        <button>Ajouter au panier</button>
        </div>
    </div>
  )
}

export default CardProduct