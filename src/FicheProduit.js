import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { useParams } from 'react-router-dom'
import Data from './data/products.json'

function FicheProduit() {
const {id}=useParams();
//console.log({id});
const produit=Data.find((produit)=>produit.id===id);
console.log(produit);
const {title, price, image, description, ingredients}=produit;


  return (
    <>
    <Header/>
<div id='singleProductInfos'>
<p>{title}</p>
<p>{price}</p>
<p>{description}</p>
<input type='number'></input>
<input type='button'>Ajouter au panier</input>
</div>
<div id='singleProductImg'>
  <img src={image} alt={'Illustration du produit '+title}></img>
</div>
<div id='singleProductIngredients'>
  <p>Ingrédients</p>
  <p>{ingredients}</p>
</div>
    
    <Footer/>
    </>
  )
}

export default FicheProduit