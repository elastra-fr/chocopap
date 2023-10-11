
import './App.css';


const Header =()=>{

return(
<>
<header id='mainHeader'>
<img src={require("./images/logo.png")} alt='Logo Choco Pap'/>
<ul>
<li><a>Accueil</a></li> 
<li><a>Boutique</a></li>
</ul>
<a><img></img></a>

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


function App() {
  return (
    <div className="App">
      
      <Header/>


    <Footer/>
    </div>
  );
}

export default App;
