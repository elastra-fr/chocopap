
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
  const [sumCart, setSumCart]=useState()


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

    function totalCart(){

          let subTotal=[];
          let total=0;

      //let str=JSON.stringify(cart);
console.log(cart.length);

      if(cartCount>0)
      {
        for (let i=0;i<cartCount;i++){

          //console.log(cart[i].prix);
          //console.log(cart[i].qte)
          subTotal.push(cart[i].prix*cart[i].qte);
          total = subTotal.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
          },0);
          
          

        }



      }

      setSumCart(total.toFixed(2));


    }
    
    
    useEffect(() => {
    
    checkDataStorage();
    totalCart();
    console.log(JSON.stringify(cart));

    
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
          checkDataStorage();
       } 
       
       else {
          let newItem={num:id, img:urlImage, nom:name, prix:pu, qte:nb };
          cart.push(newItem);
          localStorage.setItem("myCart", JSON.stringify(cart));
          setCart(cart);
          checkDataStorage();
             
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


    function removeItem(id){
      console.log(id);

      let localCart = JSON.parse(localStorage.getItem("myCart"));
      const indexToRemove = localCart.map(object => object.num).indexOf(id);
      //const afterRemove = localCart.map(object => object.num).filter(!id);
    let afterRemove=localCart.filter((item)=>item.num.search(id));
      //console.log(indexToRemove);
       console.log(afterRemove);
      //localCart.delete(indexToRemove);
      localStorage.setItem("myCart", JSON.stringify(afterRemove));
      setCart(JSON.stringify(afterRemove));
      checkDataStorage();

    }







  return (
  <div>
      <Routes>
      <Route exact path='/' element={<HomePage emptyCart={emptyItemsCart} cartItems={cart} cartCount={cartCount} sumCart={sumCart}/>} removeItem={removeItem}/>    
    <Route exact path='/Homepage' element={<HomePage emptyCart={emptyItemsCart} cartItems={cart} cartCount={cartCount} sumCart={sumCart} removeItem={removeItem}/>} />
    <Route path='/Boutique' element={<Boutique emptyCart={emptyItemsCart} gestionCart={gestionCart} cartItems={cart} cartCount={cartCount} sumCart={sumCart} removeItem={removeItem}/>} />
    <Route path='/FicheProduit/:id' element={<FicheProduit emptyCart={emptyItemsCart} cartItems={cart} cartCount={cartCount} gestionCart={gestionCart} sumCart={sumCart} removeItem={removeItem}/>} />
    </Routes>
  </div>
  
  );

 


}

export default App;

