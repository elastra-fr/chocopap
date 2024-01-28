import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { useParams } from 'react-router-dom'
import Parse from 'parse/dist/parse.min.js';
import {useState, useEffect} from 'react';
import Panier from './components/Panier';
//import CustomNumberInput from './components/CustomNumberInput';
import { useNavigate } from 'react-router-dom';
//import CustomButton from './components/CustomButton';
import SmartCartButton from './components/SmartCartButton';

const app_id=process.env.REACT_APP_ID;
const host_url=process.env.REACT_APP_HOST_URL;
const javascript_key=process.env.REACT_APP_JAVASCRIPT_KEY;

Parse.initialize(app_id, javascript_key);
Parse.serverURL=host_url;





function FicheProduit(props) {

  const [showPanier, setShowPanier]= useState(false);
  //const [showQte, setShowQte]= useState(props.getQteItem(props.id));


  const handleShowPanier= ()=>{
  setShowPanier(!showPanier);

  };

  document.title="Fiche produit - CHOCO PAP";

  const {id}=useParams();

  const [product, setProduct] = useState(); 
  const [qte, setQte] = useState(1); 

const handleChange=(event)=>{

  setQte(event.target.value);

}


const fetchProduct=async()=>{

    const query = new Parse.Query("products");
    query.contains('objectId', id);
    
    
    
    
    try{
        const allProducts=await query.find();
        
        setProduct(allProducts);
        return true;
        
        
    
    }
    
    catch (error){
    return false;
    
    }

  
    
    }

/*    
useEffect(() => {

        fetchProduct();
        
  }, []);*/


  useEffect(() => {
    
    fetchProduct()
  
  }, [id]);   

  /*
  useEffect(() => {

if (props.getQteItem(id)>0){

  setShowQte(false);
}

else  {setShowQte(true);
}  

console.log(showQte);
//setShowQte(props.getQteItem(id))


  }, []);  
  
 */


const navigate=useNavigate();


  return (
    <>
<Header close={handleShowPanier} showPanier={showPanier} cartCount={props.cartCount}/>


{product !==undefined && <main id='singleProductMain'>
<div><span id="backToShop" onClick={()=>{navigate(-1)}}>Revenir à la recherche</span></div>    
<div id="infosWrapper">
<div id='singleProductInfos'>
<h1 className='singleProductTitle'>{product[0].attributes.title}</h1>
<span className='singleProductPrice'>{product[0].attributes.price + " €"}</span>
<p>{product[0].attributes.description}</p>
{/*<div><input className='singleProductQte' onChange={handleChange} type='number' value={qte} min="1" max="999"></input></div>*/}
{/*<CustomNumberInput id={"ipt"+id} value={qte} change={handleChange} min={1}/>*/}
<div>{/*<input type='button' value="Ajouter au panier" onClick={()=>{props.gestionCart(id, product[0].attributes.image, product[0].attributes.title, product[0].attributes.price, qte)}}></input>*/}{/*<CustomButton onClick={()=>{props.gestionCart(id, product[0].attributes.image, product[0].attributes.title, product[0].attributes.price, qte)}} text="Ajouter au panier"/>*/}<SmartCartButton onClick={()=>{props.gestionCart(id, product[0].attributes.image, product[0].attributes.title, product[0].attributes.price, qte)} } qte={props.getQteItem(id)} updateItem={props.updateItem} id={id} removeItem={props.removeItem}/></div>


</div>
<div id='singleProductImg'>
  <img src={"."+product[0].attributes.image} alt={'Illustration du produit '+product[0].attributes.title}></img>
</div>
</div>

<div id='singleProductIngredients'>
  <h4>Ingrédients</h4>
  <p id='ingList'>{product[0].attributes.ingredients}</p>
</div>
<Panier close={handleShowPanier} showPanier={showPanier} emptyCart={props.emptyCart} cartItems={props.cartItems} sumCart={props.sumCart} removeItem={props.removeItem} updateItem={props.updateItem}/>
</main>}
    <Footer/>
  

    </>
  )
 


}

export default FicheProduit