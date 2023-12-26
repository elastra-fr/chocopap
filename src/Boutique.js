import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CardProduct from './components/CardProduct';
import Filtres from './components/Filtres';
import {useState, useEffect} from 'react';
import Panier from './components/Panier';
import Parse from 'parse/dist/parse.min.js';
import CheckBoxWithLabel from './components/CheckBoxWithLabel'

const app_id=process.env.REACT_APP_ID;
const host_url=process.env.REACT_APP_HOST_URL;
const javascript_key=process.env.REACT_APP_JAVASCRIPT_KEY;

Parse.initialize(app_id, javascript_key);
Parse.serverURL=host_url;


export default function BoutiquePage() {


    //Filtres
    const [priceRange, setPriceRange] = useState({ min: 1, max: 100});
    const [noteRange, setNoteRange] = useState({ min:0, max: 5});
    const [blanc, setBlanc]=useState(false);
    const [lait, setLait]=useState(false);
    const [noir, setNoir]=useState(false);
    const [caramel, setCaramel]=useState(false);
    const [noix, setNoix]=useState(false);
    const [fruit, setFruit]=useState(false);
    const [liqueur, setLiqueur]=useState(false);

    const categories=[{titre : "Tous", value:"all"}, {titre : "Chocolat Blanc", value:"whiteChoc"}, {titre : "Chocolat au lait", value:"milkChoc"},{titre : "Chocolat noir", value:"blackChoc"},{titre : "Noix/Noisette", value:"nutChoc"},{titre : "Fruit", value:"fruit"},{titre : "Caramel", value:"caramel"},{titre : "Liqueur", value: "liqueur"},];
const [showCat, setShowCat]= useState(false);
const [showPrice, setShowPrice]= useState(false);
const [showNotes, setShowNotes]= useState(false);

const handleFilters=event=>{

switch(event.currentTarget.id)
{
case "catPlus":
  setShowCat(!showCat);
break;

case "prixPlus":
  setShowPrice(!showPrice);
break;

case "notesPlus":
  setShowNotes(!showNotes);
break;

default:

}


}


 
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

const handleChange=(e)=>{

  switch(e.currentTarget.id){

case "prixMin":
  setPriceRange({min:Number(e.currentTarget.value)});
break;

case "prixMax":
  setPriceRange({max:Number(e.currentTarget.value)});
break;

case "noteMin":
  setNoteRange({min:Number(e.currentTarget.value)});
break;

case "noteMax":
  setNoteRange({max:Number(e.currentTarget.value)});
break;

case "all":

break;

case "whiteChoc":
  setBlanc(!blanc);

break;

case "milkChoc":
  setLait(!lait);

break;

case "blackChoc":
setNoir(!noir);
break;

case "nutChoc":
setNoix(!noix);
break;

case "fruit":

setFruit(!fruit);

break;

case "caramel":

setCaramel(!caramel);

break;

case "liqueur":

setLiqueur(!liqueur);

break;

default:
alert(e.currentTarget.checked);

  }


  //setPriceRange({min:Number(e.currentTarget.value), max:100});

  
  

    }

    useEffect(() => {

      fetchProducts();
  //Runs only on the first render
}, [priceRange, noteRange, blanc, lait, noir, noix, fruit, caramel, liqueur]);


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




{/*<Filtres change={handleChange}/>*/}

<div id="filters">
<h3>FILTRES</h3>

<div id='filtreCategories' className={`filtreCont, ${showCat? "showCat" : "hideCat"}`}>
  <h4>Catégories <span id="catPlus" onClick={handleFilters}><svg fill="white" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></span></h4>

  {categories.map((item, index)=>{

return(
  <div key={"check"+index}>
<CheckBoxWithLabel id={item.titre} title={item.titre} value={item.value} change={handleChange}/>
</div>
)


  })}

 
<p>

</p>


</div>

<div id='filtrePrix' className={`filtreCont, ${showPrice? "showPrice" : "hidePrice"}`}> 
<h4>Prix <span id="prixPlus" onClick={handleFilters}><svg fill="white" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></span></h4>

<div>
<label htmlFor="prixMin">Prix min:</label>
<select name="min" id="prixMin" onChange={handleChange} defaultValue={"1"}>
  <option value="0">1 €</option>
  <option value="5">5 €</option>
  <option value="10">10 €</option>
  <option value="15">15 €</option>
  <option value="30">30 €</option>
  <option value="50">50 €</option>
  <option value="75">75 €</option>
 </select>
 </div>

<div>
<label htmlFor="prixMax">Prix max:</label>
<select name="max" id="prixMax" onChange={handleChange} defaultValue={"100"}>
<option value="5">5 €</option>
  <option value="10">10 €</option>
  <option value="15">15 €</option>
  <option value="30">30 €</option>
  <option value="50">50 €</option>
  <option value="75">75 €</option>
  <option value="100">100 €</option>
</select>
</div>





</div>

<div className={`filtreCont, ${showNotes? "showNotes" : "hideNotes"}`}>
<h4>Notes <span id="notesPlus" onClick={handleFilters}><svg fill="white" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></span></h4>

<div>
<label htmlFor="noteMin">Note min:</label>
<select name="min" id="noteMin" defaultValue={"1"} onChange={handleChange}>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
 </select>
 </div>

<div>
<label htmlFor="noteMax">Note max:</label>
<select name="max" id="prixMax" defaultValue={"5"} onChange={handleChange}>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select>
</div>


</div>



</div>


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