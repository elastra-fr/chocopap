
import './App.css';
import './components/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Boutique from './Boutique';
import FicheProduit from './FicheProduit';


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

