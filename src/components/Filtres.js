import React from 'react'
import '../style/Filtres.css'
import CheckBoxWithLabel from './CheckBoxWithLabel'

function Filtres() {

const categories=[{titre : "Tous", value:"all"}, {titre : "Chocolat Blanc", value:"whiteChoc"}, {titre : "Chocolat au lait", value:"milkChoc"},{titre : "Chocolat noir", value:"blackChoc"},{titre : "Noix/Noisette", value:"nutChoc"},{titre : "Fruit", value:"fruit"},{titre : "Caramel", value:"caramel"},{titre : "Liqueur", value: "liqueur"},];



  return (
    <>
<div id="filters">
<h3>FILTRES</h3>

<div id='filtreCategories' className='filtreCont'>
  <h4>Catégories</h4>

  {categories.map((item, index)=>{

return(
  <div key={index}>
<CheckBoxWithLabel title={item.titre} value={item.value}/>
</div>
)


  })}

 
<p>

</p>


</div>

<div id='filtrePrix' className='filtreCont'> 
<h4>Prix</h4>






</div>

<div className='filtreCont'>
<h4>Notes</h4>


</div>



</div>


    </>
  )
}

export default Filtres