import React from 'react'
import Cart from './Cart'
import cartIc from '../images/cart.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header({close}) {

const [showNav, setShowNav]= useState(false);

const handleShowNav= ()=>{

setShowNav(!showNav);


};






  return (
    <>
<header id='mainHeader'>
<Link to='/Homepage'><img className='logo' src={require("../images/logo.png")} alt='Logo Choco Pap'/></Link>
<nav id='mainNav' className={`${showNav? "showNav" : "hideNav"}`}>
<ul>
<li><Link to='/Homepage'>Accueil</Link></li> 
<li><Link to='/Boutique'>Boutique</Link></li>
<li onClick={()=>close()}><Cart src={cartIc}/></li>

</ul>


</nav>

<div className='burgerMenu' onClick={handleShowNav}>
<svg xmlns="http://www.w3.org/2000/svg" height="48px" width="48px" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
</div>

</header>

</>
  )
}

export default Header