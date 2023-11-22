import React, { useEffect, useState } from 'react'
import '../style/NewCarousel.css'
import'../images/accueil1.jpg'
import'../images/accueil2.jpg'


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

<div className='leftArrow' onClick={slideLeft}>&lsaquo;</div>
<div className='rightArrow' onClick={slideRight}>&rsaquo;</div>

</div>
    </div>
  )
}

export default NewCarousel