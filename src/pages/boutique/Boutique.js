import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardProduct from '../../components/cardproduct/CardProduct';
import {useState, useEffect} from 'react';
import Panier from '../../components/Panier';
import Parse from 'parse/dist/parse.min.js';
import CheckBoxWithLabel from '../../components/CheckBoxWithLabel'
import './Filtres.css';

const app_id=process.env.REACT_APP_ID;
const host_url=process.env.REACT_APP_HOST_URL;
const javascript_key=process.env.REACT_APP_JAVASCRIPT_KEY;

Parse.initialize(app_id, javascript_key);
Parse.serverURL=host_url;


export default function BoutiquePage(props) {


    //Filtres
    //const [priceRange, setPriceRange] = useState({ min: 1, max: 100});
    //const [noteRange, setNoteRange] = useState({ min:1, max: 5});
    const [noteMin, setNoteMin]=useState(1);
    const [noteMax, setNoteMax]=useState(5);


    const [prixMin, setPrixMin]=useState(1);
    const [prixMax, setPrixMax]=useState(100);

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

//const elAll=document.getElementById("all");





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

    //Fin filtres
 
    const [products, setProducts] = useState(); 

    const [countProduct, setCountProduct]=useState();

    const fetchProducts=async()=>{
 

        const query = new Parse.Query("products");
        query.greaterThanOrEqualTo('price', prixMin);
        query.lessThanOrEqualTo('price', prixMax);
        query.greaterThanOrEqualTo('note', noteMin);
        query.lessThanOrEqualTo('note', noteMax);

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
            setCountProduct(allProducts.length);
            
            return true;
        
        }
        
        catch (error){
        //console.log(`Erreur : ${error.message}`);
        return false;
        
        }
        
        }

    useEffect(() => {


            fetchProducts();


        
      }, []);

//Fonction qui reinitialise les filtres et les checkboxes quand on clique sur le bouton "Tous"
const resetFilters=()=>{

  //iteration sur les checkboxes sauf la checkbox "Tous"
  const checkboxes=document.querySelectorAll('input[type="checkbox"]:not(#all)');
  checkboxes.forEach((item)=>{

    item.checked=false;


  });

setBlanc(false);
setLait(false);
setNoir(false);
setNoix(false); 
setFruit(false);
setCaramel(false);
setLiqueur(false);

}

//Fonction qui uncheck la checkbox "Tous" quand on coche une autre checkbox
const uncheckCbAll=()=>{

  const checkboxAll=document.getElementById("all");
  checkboxAll.checked=false;

}



const handleChange=(e)=>{

  switch(e.currentTarget.id){

case "prixMin":
  //setPriceRange({min:Number(e.currentTarget.value)});
  setPrixMin(Number(e.currentTarget.value));
break;

case "prixMax":
  //setPriceRange({max:Number(e.currentTarget.value)});
  setPrixMax(Number(e.currentTarget.value));
break;

case "noteMin":
  setNoteMin(Number(e.currentTarget.value));
  //console.log(noteRange.min);
break;

case "noteMax":
  setNoteMax(Number(e.currentTarget.value));
 // console.log(noteRange.max);
break;

case "all":
resetFilters();
break;

case "whiteChoc":
  setBlanc(!blanc);
  uncheckCbAll();

break;

case "milkChoc":
  setLait(!lait);
  uncheckCbAll();

break;

case "blackChoc":
setNoir(!noir);
uncheckCbAll();
break;

case "nutChoc":
setNoix(!noix);
uncheckCbAll();
break;

case "fruit":

setFruit(!fruit);
uncheckCbAll();

break;

case "caramel":

setCaramel(!caramel);
uncheckCbAll();

break;

case "liqueur":


setLiqueur(!liqueur);
uncheckCbAll()

break;

default:
alert(e.currentTarget.checked);

  }

}

    useEffect(() => {

      fetchProducts();
      console.log("Filtres notes : "+noteMin+" "+noteMax);
      //console.log("Filtres prix : "+prixMin+" "+prixMax);
  
}, [prixMin, prixMax, noteMin, noteMax, blanc, lait, noir, noix, fruit, caramel, liqueur]);


document.title="Boutique - CHOCO PAP";


    const [showPanier, setShowPanier]= useState(false);

    const handleShowPanier= ()=>{
    
    setShowPanier(!showPanier);
    
    
    
    };


let { id } = useParams();

return (




<>
<Header close={handleShowPanier} showPanier={showPanier} cartCount={props.cartCount}/>



<main className='mainBoutique'>


<div id="boutiqueTitle"><h1>BOUTIQUE</h1></div>


<div id="boutiqueWrapper">



<div id="filters">
<h3>FILTRES</h3>

<div id='filtreCategories' className={`filtreCont ${showCat? "showCat" : "hideCat"}`}>
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

<div id='filtrePrix' className={`filtreCont ${showPrice? "showPrice" : "hidePrice"}`}> 
<h4>Prix <span id="prixPlus" onClick={handleFilters}><svg fill="white" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></span></h4>

<div className='selectCont'>
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

<div className='selectCont'>
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

<div className={`filtreCont ${showNotes? "showNotes" : "hideNotes"}`}>
<h4>Notes <span id="notesPlus" onClick={handleFilters}><svg fill="white" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></span></h4>

<div className='selectCont'>
<label htmlFor="noteMin">Note min:</label>
<select name="min" id="noteMin" defaultValue={"1"} onChange={handleChange}>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
 </select>
 </div>

<div className='selectCont'>
<label htmlFor="noteMax">Note max:</label>
<select name="max" id="noteMax" defaultValue={"5"} onChange={handleChange}>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select>
</div>


</div>



</div>

<div>

<div>

<span id="nbResult">Résultat : {countProduct} produit(s)</span>

</div>

<section id='products'>


{products !== undefined &&
              products.map((item, index) => (
                <CardProduct close={handleShowPanier} showPanier={showPanier} gestionCart={props.gestionCart} key={index} id={/*`${item.get("id")}`*/item.id} urlImage={`${item.get("image")}`} name={`${item.get("title")}` } price={`${item.get("price")}`} note={`${item.get("note")}`} getQteItem={props.getQteItem} cartItems={props.cartItems} updateItem={props.updateItem} removeItem={props.removeItem}/>
                
              
              ))}
            {products !== undefined && products.length <= 0 ? (
              <p>{'Pas de résultat'}</p>
            ) : null}







</section>

</div>

</div>


<Panier close={handleShowPanier} showPanier={showPanier} emptyCart={props.emptyCart} cartItems={props.cartItems} sumCart={props.sumCart} removeItem={props.removeItem} updateItem={props.updateItem}/>

</main>


<Footer/>



</>
);
}