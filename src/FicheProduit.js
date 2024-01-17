import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { useParams } from 'react-router-dom'
//import Data from './data/products.json'
import Parse from 'parse/dist/parse.min.js';
import {useState, useEffect} from 'react';
import Panier from './components/Panier';

const app_id=process.env.REACT_APP_ID;
const host_url=process.env.REACT_APP_HOST_URL;
const javascript_key=process.env.REACT_APP_JAVASCRIPT_KEY;

Parse.initialize(app_id, javascript_key);
Parse.serverURL=host_url;





function FicheProduit(props) {

  const [showPanier, setShowPanier]= useState(false);

  const handleShowPanier= ()=>{
  
  setShowPanier(!showPanier);
  console.log(showPanier);
  
  
  };







  const {id}=useParams();






const [product, setProduct] = useState(); 



const fetchProduct=async()=>{
    //console.log("Ok");

    const query = new Parse.Query("products");
    query.contains('objectId', id);
    
    
    
    
    try{
        const allProducts=await query.find();
        
        setProduct(allProducts);
        return true;
        
    
    }
    
    catch (error){
    //console.log(`Erreur : ${error.message}`);
    return false;
    
    }

    
    
    }

useEffect(() => {

        fetchProduct();
  }, []);





  return (
    <>
<Header close={handleShowPanier} showPanier={showPanier} cartCount={props.cartCount}/>


{product !==undefined && <main id='singleProductMain'>    
<div id="infosWrapper">
<div id='singleProductInfos'>
<h1 className='singleProductTitle'>{product[0].attributes.title}</h1>
<span className='singleProductPrice'>{product[0].attributes.price + " €"}</span>
<p>{product[0].attributes.description}</p>
<div><input className='singleProductQte' type='number' defaultValue="1" min="1" max="999"></input></div>
<div><input type='button' value="Ajouter au panier"></input></div>
</div>
<div id='singleProductImg'>
  <img src={"."+product[0].attributes.image} alt={'Illustration du produit '+product[0].attributes.title}></img>
</div>
</div>

<div id='singleProductIngredients'>
  <h4>Ingrédients</h4>
  <p id='ingList'>{product[0].attributes.ingredients}</p>
</div>
<Panier close={handleShowPanier} showPanier={showPanier} emptyCart={props.emptyCart} cartItems={props.cartItems}/>
</main>}
    <Footer/>
  

    </>
  )
 


}

export default FicheProduit