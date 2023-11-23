import React from 'react'
import '../style/Filtres.css'

function Filtres() {
  return (
    <>
<div id="filters">
<h3>FILTRES</h3>

<div id='filtreCategories'>
<p>

</p>


</div>

<div id='filtrePrix'> 
<ul>
<li>
  <input type="checkbox" id="all" name="all" value="all" />
  <label for="all">Tous</label>
  </li>
  <li>
  <input type="checkbox" id="whiteChoco" name="whiteChoco" value="whiteChoco" />
  <label for="whiteChoco">Développement</label>
  </li>
  <li>
  <input type="checkbox" id="milkChoco" name="milkChoco" value="milkChoco" />
  <label for="milkChoco">Développement</label>
  </li>
  <li>
  <input type="checkbox" id="coding" name="interest" value="coding" />
  <label for="coding">Développement</label>
  </li>
  <li>
  <input type="checkbox" id="coding" name="interest" value="coding" />
  <label for="coding">Développement</label>
  </li>
  <li>
  <input type="checkbox" id="coding" name="interest" value="coding" />
  <label for="coding">Développement</label>
  </li>
  <li>
  <input type="checkbox" id="coding" name="interest" value="coding" />
  <label for="coding">Développement</label>
  </li>
  <li>
  <input type="checkbox" id="coding" name="interest" value="coding" />
  <label for="coding">Développement</label>
  </li>

</ul>




</div>

</div>


    </>
  )
}

export default Filtres