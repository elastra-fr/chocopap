
import './App.css';
//import cartIc from './images/cart.svg'
import './components/Cart'
//import Cart from './components/Cart'
//import Carousel from './components/Carousel'
//import NewCarousel from './components/NewCarousel';
//import { carouselImg } from './components/Data';
//import Footer from './components/Footer';
//import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Boutique from './Boutique';
import FicheProduit from './FicheProduit';
//import {useState, useEffect} from 'react';












/*const MainContent=()=>{
return(

<div>

<NewCarousel images={carouselImg} />

</div>




);


}*/

function App() {




  return (
  <div>
      <Routes>
      <Route exact path='/' element={<HomePage/>} />    
    <Route exact path='/Homepage' element={<HomePage/>} />
    <Route path='/Boutique' element={<Boutique/>} />
    <Route path='/FicheProduit/:id' element={<FicheProduit/>} />
    </Routes>
  
    

    </div>
  
  );

 


}

export default App;

