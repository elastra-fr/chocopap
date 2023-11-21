import React from 'react'
import Cart from './Cart'
import cartIc from '../images/cart.svg'

function Header() {
  return (
    <>
<header id='mainHeader'>
<a><img className='logo' src={require("../images/logo.png")} alt='Logo Choco Pap'/></a>
<ul>
<li><a>Accueil</a></li> 
<li><a>Boutique</a></li>
<Cart src={cartIc}/><li></li>
</ul>



</header>

</>
  )
}

export default Header