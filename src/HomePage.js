import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NewCarousel from './components/NewCarousel';
import { carouselImg } from './components/Data';
import Panier from './components/Panier';
import {useState, useEffect} from 'react';



export default function HomePage() {

  document.title="Accueil - CHOCO PAP";
  
  const [showPanier, setShowPanier]= useState(false);

  const handleShowPanier= ()=>{
  
  setShowPanier(!showPanier);
  console.log(showPanier);
  
  
  };


  return (
    <div className='container'>
<Header close={handleShowPanier} showPanier={showPanier}/>
<main>
<NewCarousel images={carouselImg} />
</main>
<Footer/>
<Panier close={handleShowPanier} showPanier={showPanier}/>
  </div>
);

}