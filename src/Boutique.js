import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CardProduct from './components/CardProduct';
import Filtres from './components/Filtres';
import {useState, useEffect} from 'react';
//import Data from './data/products.json'
import Panier from './components/Panier';
import Parse from 'parse/dist/parse.min.js';

const app_id=process.env.REACT_APP_ID;
const host_url=process.env.REACT_APP_HOST_URL;
const javascript_key=process.env.REACT_APP_JAVASCRIPT_KEY;
//console.log(process.env.REACT_APP_ID);

Parse.initialize(app_id, javascript_key);
Parse.serverURL=host_url;





export default function BoutiquePage() {

    //Filtres
    const [priceRange, setPriceRange] = useState({ min: 0, max: 100});
    const [noteRange, setNoteRange] = useState({ min:0, max: 5});
    const [blanc, setBlanc]=useState(false);
    const [lait, setLait]=useState(true);
    const [noir, setNoir]=useState(false);
    const [caramel, setCaramel]=useState(false);
    const [noix, setNoix]=useState(false);
    const [fruit, setFruit]=useState(true);
    const [liqueur, setLiqueur]=useState(false);

    //console.log(priceRange);
    //Fin filtres

  
    const [products, setProducts] = useState(); 




    const fetchProducts=async()=>{
        //console.log("Ok");

        const query = new Parse.Query("products");
        query.greaterThanOrEqualTo('price', priceRange.min);
        query.lessThanOrEqualTo('price', priceRange.max);
        query.greaterThanOrEqualTo('note', noteRange.min);
        query.lessThanOrEqualTo('note', noteRange.max);

        if (blanc===true) { query.equalTo("category.blanc", true)}; 
        if (lait===true)query.equalTo("category.lait", true);
        if (noir===true) {query.equalTo("category.noir", true)};
        if (caramel===true) {query.equalTo("category.caramel", true)};
        if (noix===true) {query.equalTo("category.noix", true)};
        if (fruit===true) {query.equalTo("category.fruit", true)};
        if (liqueur===true) {query.equalTo("category.liqueur", true)};

        
        try{
            const allProducts=await query.find();

            
            setProducts(allProducts);
            console.log(allProducts[0].attributes.category.blanc);
            
            return true;
        
        }
        
        catch (error){
        console.log(`Erreur : ${error.message}`);
        return false;
        
        }
        
        }

    useEffect(() => {

            fetchProducts();
        //Runs only on the first render
      }, []);








/*allProducts.forEach((product)=>{

console.log(product.attributes);

})
}*/
//console.log(queryResults);

//fetchProducts();



document.title="Boutique - CHOCO PAP";


    const [showPanier, setShowPanier]= useState(false);

    const handleShowPanier= ()=>{
    
    setShowPanier(!showPanier);
    //console.log(showPanier);
    
    
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

{/*Data.map((produit, index)=>{

return(

<CardProduct key={index} id={produit.id} urlImage={produit.image} name={produit.title} price={produit.price} note={produit.note} />

)




})


*/}

{products !== undefined &&
              products.map((item, index) => (
                <CardProduct key={index} id={/*`${item.get("id")}`*/item.id} urlImage={`${item.get("image")}`} name={`${item.get("title")}` } price={`${item.get("price")}`} note={`${item.get("note")}`}/>
                
              
              ))}
            {products !== undefined && products.length <= 0 ? (
              <p>{'Pas de résultat'}</p>
            ) : null}







</section>

</div>


<Panier close={handleShowPanier} showPanier={showPanier}/>

</main>


<Footer/>



</>
);
}