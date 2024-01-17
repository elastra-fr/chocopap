
import './App.css';
import './components/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Boutique from './Boutique';
import FicheProduit from './FicheProduit';
import {useState, useEffect} from 'react';


function App() {

  const [cart, setCart] = useState("")
  const [cartCount, setCartCount]=useState()


  function checkDataStorage(){
   
    
    if(localStorage.getItem("myCart"))
    {
      let cart = JSON.parse(localStorage.getItem("myCart"));
      //console.log(Object.values(cart).length);
      let newCount=Object.values(cart).length;  
      setCartCount(newCount);
      setCart(cart);
      
     
    }
    
    else
    
    {
    
    console.log("Mon panier est vide");
    setCartCount(0);
    }
    }
    
    
    useEffect(() => {
    
    checkDataStorage();  
    
    }, [cartCount]);




  
  const gestionCart=(id, urlImage, name, pu, nb)=>{
    
  
    if(localStorage.getItem("myCart"))
    {
      let cart = JSON.parse(localStorage.getItem("myCart"));
     const index2 = cart.map(object => object.num).indexOf(id);
          
      if (index2>=0) {
      
          cart[index2].qte=cart[index2].qte+nb;
          localStorage.setItem("myCart", JSON.stringify(cart));
          setCart(cart);
       } 
       
       else {
          let newItem={num:id, img:urlImage, nom:name, prix:pu, qte:nb };
          cart.push(newItem);
          localStorage.setItem("myCart", JSON.stringify(cart));
          setCart(cart);
             
       }
    

    
    
    }
    
    else
    
    {
    let newItem={num:id, img:urlImage, nom:name, prix:pu, qte:nb };
    let newCart=[newItem];
 
    
    localStorage.setItem("myCart", JSON.stringify(newCart));
    setCart(JSON.stringify(newCart));
    
    
    
    }
    checkDataStorage();
    //console.log(cart);
        
        };
  
  
  const emptyItemsCart=()=>{

    localStorage.removeItem("myCart");
    setCart("");
    console.clear();
    console.log("Panier vidé depuis app.js");
    checkDataStorage();
    };







  return (
  <div>
      <Routes>
      <Route exact path='/' element={<HomePage emptyCart={emptyItemsCart} cartItems={cart} cartCount={cartCount}/>} />    
    <Route exact path='/Homepage' element={<HomePage emptyCart={emptyItemsCart} cartItems={cart} cartCount={cartCount}/>} />
    <Route path='/Boutique' element={<Boutique emptyCart={emptyItemsCart} gestionCart={gestionCart} cartItems={cart} cartCount={cartCount}/>} />
    <Route path='/FicheProduit/:id' element={<FicheProduit emptyCart={emptyItemsCart} cartItems={cart} cartCount={cartCount}/>} />
    </Routes>
  </div>
  
  );

 


}

export default App;

