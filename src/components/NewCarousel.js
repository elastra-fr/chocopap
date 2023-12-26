import React, { useEffect, useState } from 'react'
import '../style/NewCarousel.css'
import'../images/accueil1.jpg'
import'../images/accueil2.jpg'
import { Link } from 'react-router-dom';


function NewCarousel({images}) {

const [current, setCurrent]=useState(0);
const [autoPlay, setAutoPlay]=useState(true);
let timeOut=null;

useEffect(()=>{
timeOut = autoPlay && setTimeout(()=>{slideRight();}, 3000);

});

const slideLeft=()=>{
  setCurrent(current===0 ? images.length - 1 : current-1);
};

const slideRight=()=>{
setCurrent(current===images.length-1? 0 : current+1) ;
};

  return (
    <div className='carousel' onMouseEnter={()=>{setAutoPlay(false); clearTimeout(timeOut)}} onMouseLeave={()=>{setAutoPlay(true)}}>
        <div className='carouselWrapper'>
{images.map((image, index)=>{
return(
<div>
    


    <div className={index==current ? "carouselCard carouselCardActive" : "carouselCard"} key={index}>
    <img className='cardImage' src={image.url} alt="Accueil"/>
    </div>

 
    
    </div>


)

})}

<div className='leftArrow' onClick={slideLeft}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></div>
<div className='rightArrow' onClick={slideRight}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></div>


<div className='carouselDots'>
{images.map((_, index)=>{
return(

<div key={index} className={index==current ? "imgDot imgDotActive" : "imgDot"} onClick={()=>{setCurrent(index)}}></div>


)



})}



</div>

<div className='mainTitle'><h1>CHOCO PAP</h1></div>
<Link className='mainButton' to='/Boutique'>VOIR LA BOUTIQUE</Link>


</div>
    </div>
  )
}

export default NewCarousel