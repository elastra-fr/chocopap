import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NewCarousel from './carousel/NewCarousel';
import { carouselImg } from '../../components/Data';
import Panier from '../../components/Panier';
import {useState, useEffect} from 'react';



export default function HomePage(props) {
  console.log(props);

  document.title="Accueil - CHOCO PAP";
  
  const [showPanier, setShowPanier]= useState(false);

  const handleShowPanier= ()=>{
  
  setShowPanier(!showPanier);
  //console.log(showPanier);
  
  
  };


  return (
    <div className='container'>
<Header close={handleShowPanier} showPanier={showPanier} cartCount={props.cartCount}/>
<main id="homeMain">
<Panier close={handleShowPanier} showPanier={showPanier} emptyCart={props.emptyCart} cartItems={props.cartItems} sumCart={props.sumCart} removeItem={props.removeItem} updateItem={props.updateItem}/>

<NewCarousel images={carouselImg} />
<Panier close={handleShowPanier} showPanier={showPanier} emptyCart={props.emptyCart} cartItems={props.cartItems} sumCart={props.sumCart} removeItem={props.removeItem} updateItem={props.updateItem}/>
</main>
<Footer/>

  </div>
);

}