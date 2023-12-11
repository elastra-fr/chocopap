import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CardProduct from './components/CardProduct';
import Filtres from './components/Filtres';
import {useState, useEffect} from 'react';
import Data from './data/products.json'
import Panier from './components/Panier';



export default function BoutiquePage() {

document.title="Boutique - CHOCO PAP";


    const [showPanier, setShowPanier]= useState(false);

    const handleShowPanier= ()=>{
    
    setShowPanier(!showPanier);
    console.log(showPanier);
    
    
    };


let { id } = useParams();
return (




<>
<Header close={handleShowPanier} showPanier={showPanier}/>



<main className='mainBoutique'>


<div id="boutiqueTitle"><p>BOUTIQUE</p></div>


<div id="boutiqueWrapper">
<Filtres/>

<section id='products'>

{Data.map((produit, index)=>{

return(

<CardProduct key={index} id={produit.id} urlImage={produit.image} name={produit.title} price={produit.price} note={produit.note} />

)




})


}

</section>

</div>


<Panier close={handleShowPanier} showPanier={showPanier}/>

</main>


<Footer/>



</>
);
}