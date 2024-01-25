import React from 'react'
import '../style/Filtres.css'
import CheckBoxWithLabel from './CheckBoxWithLabel'
import { useState } from 'react'

function Filtres({change}) {

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

  return (
    <>
<div id="filters">
<h3>FILTRES</h3>

<div id='filtreCategories' className={`filtreCont, ${showCat? "showCat" : "hideCat"}`}>
  <h4>Catégories <span id="catPlus" onClick={handleFilters}><svg fill="white" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></span></h4>

  {categories.map((item, index)=>{

return(
  <div key={"check"+index}>
<CheckBoxWithLabel title={item.titre} value={item.value} />
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
<select name="min" id="prixMin" onChange={(e)=>change(e.target.value)} defaultValue={"1"}>
  <option value="1">1 €</option>
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
<select name="max" id="prixMax" defaultValue={"100"}>
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
<select name="min" id="NoteMin">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
 </select>
 </div>

<div>
<label htmlFor="noteMax">Note max:</label>
<select name="max" id="prixMax" defaultValue={"5"}>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select>
</div>


</div>



</div>


    </>
  )
}

export default Filtres