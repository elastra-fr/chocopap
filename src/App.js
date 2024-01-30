
import './App.css';
import './components/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import Boutique from './pages/boutique/Boutique';
import FicheProduit from './pages/ficheproduit/FicheProduit';
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';


function App() {
 


  const [cart, setCart] = useState("")
  const [cartCount, setCartCount]=useState()
  const [sumCart, setSumCart]=useState()

//Fonction qui vérifie si le panier existe dans le localStorage
  function checkDataStorage(){
   
    
    if(localStorage.getItem("myCart"))
    {
      let cart = JSON.parse(localStorage.getItem("myCart"));
      let newCount=Object.values(cart).length;  
      setCartCount(newCount);
      setCart(cart);
    }
    
    else
    
    {
    
    setCartCount(0);
    }
    totalCart();

    }


    //Fonction qui calcule le total du panier
    function totalCart(){

          let subTotal=[];
          let total=0;


      if(cartCount>0)
      {
        for (let i=0;i<cartCount;i++){

     
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
  

    
    }, [cartCount]);

    useEffect(() => {
    
      totalCart();
    
    
  
      
      }, [cart]);




  //Fonction qui vérifie si un item est déjà dans le panier et qui l'ajoute ou le met à jour
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
        
        };


  //Fonction qui retourne la quantité d'un item du panier en fonction de son id
  const getQteItem=(id)=>{

    let qte=0;

    if(localStorage.getItem("myCart")){
    let localCart = JSON.parse(localStorage.getItem("myCart"));
    const index = localCart.map(object => object.num).indexOf(id);
    if (index>=0)
    {
    qte=localCart[index].qte;
    }
else
{
qte=0;

}

  }

 /* else
{
qte=0;

}*/

  return qte;
 

  };




  
  //Fonction qui vide le panier
  const emptyItemsCart=()=>{

    localStorage.removeItem("myCart");
    setCart("");

    checkDataStorage();
    };


    //Fonction qui met à jour la quantité d'un item du panier
    function updateItem(id, nb){

      
      let localCart = JSON.parse(localStorage.getItem("myCart"));
      const index = localCart.map(object => object.num).indexOf(id);
      localCart[index].qte=nb;
      setCart(JSON.stringify(localCart));
     
      localStorage.setItem("myCart", JSON.stringify(localCart));
     
      
      //totalCart();
      checkDataStorage();
      


    }



//Fonction qui supprime un item du panier
    function removeItem(id){
       

      let localCart = JSON.parse(localStorage.getItem("myCart"));
      let afterRemove=localCart.filter((item)=>item.num.search(id));
      localStorage.setItem("myCart", JSON.stringify(afterRemove));

      if (afterRemove.length >0){
      setCart(JSON.stringify(afterRemove));
      }

      else{
        emptyItemsCart();

      }

      checkDataStorage();

    }

   


  //Fonction qui récupère le pathname (debug)
    const usePathname = () => {
      const location = useLocation();
      return location.pathname;
    }

  

   


  return (
  <div>
      <Routes>
      <Route exact path='/' element={<HomePage emptyCart={emptyItemsCart} cartItems={cart} cartCount={cartCount} sumCart={sumCart} removeItem={removeItem} updateItem={updateItem}/>} /> 
         <Route exact path='/HomePage' element={<HomePage emptyCart={emptyItemsCart} cartItems={cart} cartCount={cartCount} sumCart={sumCart} removeItem={removeItem} updateItem={updateItem}/>} />
    <Route path='/Boutique' element={<Boutique emptyCart={emptyItemsCart} gestionCart={gestionCart} cartItems={cart} cartCount={cartCount} sumCart={sumCart} removeItem={removeItem} updateItem={updateItem} getQteItem={getQteItem}/>} />
    <Route path='/FicheProduit/:id' element={<FicheProduit emptyCart={emptyItemsCart} cartItems={cart} cartCount={cartCount} gestionCart={gestionCart} sumCart={sumCart} removeItem={removeItem} updateItem={updateItem} getQteItem={getQteItem}/>} />
    </Routes>
  </div>
  
  );

 


}

export default App;

