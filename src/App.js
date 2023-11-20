
import './App.css';
import cartIc from './images/cart.svg'
import './components/Cart'
import Cart from './components/Cart'
import Carousel from './components/Carousel'
import NewCarousel from './components/NewCarousel';
import { carouselImg } from './components/Data';


/*const Panier=()=>{
return(
<div>
  <a><img className='icCart' src={cart} alt='Panier'/><span></span></a>
  <span>2</span>
</div>

);


}*/


const Header =()=>{

return(
<>
<header id='mainHeader'>
<a><img className='logo' src={require("./images/logo.png")} alt='Logo Choco Pap'/></a>
<ul>
<li><a>Accueil</a></li> 
<li><a>Boutique</a></li>
</ul>
<Cart src={cartIc}/>


</header>

</>

);

};

const Footer=()=>{

return(
<footer id='mainFooter'>
<div>
  <h3>Choco Pap</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin facilisis odio at tincidunt. In hac habitasse platea dictumst. Class.

</p>

</div>

<div>
<h3>Contact</h3>
<span>Adresse : 51, Rue du chocolat</span>
<span>Téléphone : 01 23 45 67 89</span>
<span>Horaires : 9h00-17h00 du Lundi au Vendredi</span>
</div>

<div>
  
</div>

</footer>

);

}




const MainContent=()=>{
return(

<div>
<Carousel/>
<NewCarousel images={carouselImg} />

</div>




);


}


function App() {
  return (
    <div className="App">
      
      <Header/>

<MainContent/>

    <Footer/>
    </div>
  );
}

export default App;
