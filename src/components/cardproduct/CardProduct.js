import React, { useEffect } from 'react'
import './CardProducts.css'
import { Link } from 'react-router-dom'
import NewSmartCartButton from '../smartcartbutton/NewSmartCartButton.js'
import { useState } from 'react'

function CardProduct({close, showPanier, gestionCart, id, urlImage, name, price, note, getQteItem, cartItems, updateItem, removeItem}) {


let starsStatus=["starUnchecked", "starUnchecked", "starUnchecked", "starUnchecked", "starUnchecked"];
const [localQte, setLocalQte]= useState(getQteItem(id));


for (let i=0 ; i<note;i++)
{

starsStatus[i]="starChecked";

}

useEffect(() => {

setLocalQte(getQteItem(id));

}, [cartItems, getQteItem, id]);

const handleClick = (e) => {e.preventDefault(); e.stopPropagation();};


  return (
    <div key={"produit"+id} className='cardWrapper' onClick={handleClick}>

      <div className='cardBody' onClick={handleClick}>
      <Link to={`/FicheProduit/${id}`} close={close} showPanier={showPanier}>
        <img src={urlImage} alt='Produit'/>
        </Link>
          </div>
       
        <div className='cardFooter' onClick={handleClick}>
          <p className='productName'>{name}</p>
          <p>{price + " €"}</p>
          <div id='starsCont'>
                <svg xmlns="http://www.w3.org/2000/svg" className={starsStatus[0]} viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className={starsStatus[1]} viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className={starsStatus[2]} viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className={starsStatus[3]} viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className={starsStatus[4]} viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <p className='noteTag'>{" ("+note+"/5)"}</p>
        </div>

        {/*<SmartCartButton onClick={()=>{gestionCart(id, urlImage, name, price, 1)} } qte={localQte} updateItem={updateItem} id={id} removeItem={removeItem}/>*/}
        <NewSmartCartButton id={id} getQte={getQteItem} newQte={localQte} updateItem={updateItem} removeItem={removeItem} gestionCart={gestionCart} urlImage={urlImage} name={name} price={price} />
        
       </div>

    </div>
    
  )
}

export default CardProduct