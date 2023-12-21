import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { useParams } from 'react-router-dom'
//import Data from './data/products.json'
import Parse from 'parse/dist/parse.min.js';
import {useState, useEffect} from 'react';

const app_id=process.env.REACT_APP_ID;
const host_url=process.env.REACT_APP_HOST_URL;
const javascript_key=process.env.REACT_APP_JAVASCRIPT_KEY;
//console.log(process.env.REACT_APP_ID);

Parse.initialize(app_id, javascript_key);
Parse.serverURL=host_url;

function FicheProduit() {
const {id}=useParams();

const [product, setProduct] = useState(); 



const fetchProduct=async()=>{
    console.log("Ok");

    const query = new Parse.Query("products");
    query.contains('objectId', id);
    
    
    
    
    try{
        const allProducts=await query.find();
        
        setProduct(allProducts);
        console.log(product);
        return true;
    
    }
    
    catch (error){
    console.log(`Erreur : ${error.message}`);
    return false;
    
    }
    
    }

useEffect(() => {

        fetchProduct();
    //Runs only on the first render
  }, []);






//const produit=Data.find((produit)=>produit.id===id);
//console.log(produit);
//const {title, price, image, description, ingredients}=product;
//console.log(title);

  return (
    <>
    <Header/>


{product !==undefined && <main id='singleProductMain'>    
<div id="infosWrapper">
<div id='singleProductInfos'>
<p>{product[0].attributes.title}</p>
<p>{product[0].attributes.price}</p>
<p>{product[0].attributes.description}</p>
<input type='number'></input>
<input type='button' value="Ajouter au panier"></input>
</div>
<div id='singleProductImg'>
  <img src={"."+product[0].attributes.image} alt={'Illustration du produit '+product[0].attributes.title}></img>
</div>
</div>

<div id='singleProductIngredients'>
  <p>Ingrédients</p>
  <p>{product[0].attributes.ingredients}</p>
</div>
</main>}
    <Footer/>


    </>
  )
}

export default FicheProduit