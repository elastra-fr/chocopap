import React from 'react'
import Cart from './Cart'
import cartIc from '../images/cart.svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
<header id='mainHeader'>
<a><img className='logo' src={require("../images/logo.png")} alt='Logo Choco Pap'/></a>
<ul>
<li><Link to='/Homepage'>Accueil</Link></li> 
<li><Link to='/Boutique'>Boutique</Link></li>
<Cart src={cartIc}/><li></li>
</ul>



</header>

</>
  )
}

export default Header