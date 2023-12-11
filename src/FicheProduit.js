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
const {title}=produit;


  return (
    <>
    <Header/>
<h5>{title}</h5>

    
    <Footer/>
    </>
  )
}

export default FicheProduit