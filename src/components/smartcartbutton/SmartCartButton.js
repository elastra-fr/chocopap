import React, { useEffect, useState } from 'react';
import CustomButton from '../custombutton/CustomButton';
import CustomNumberInput from '../CustomNumberInput';
import './SmartCartButton.css';
//import { type } from '@testing-library/user-event/dist/type';

const SmartCartButton = ({qte, onClick, updateItem, id, removeItem}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [middle, setMiddle] = useState(1);
    

useEffect(() => {
    


    setMiddle(qte); },
    
    []);



    const handleInputChange = (e) => {
      

        setMiddle(Number(e.target.value));


        if (Number(e.target.value) > 0) {
            updateItem(id, e.target.value);
        
          }
    
          else if (Number(e.target.value) === 0){
            removeItem(id);
            
    
          }
    };


    useEffect(() => {

   
    
     

        setMiddle(qte);     

        if (qte > 0) {
            setIsFlipped(true);
        }    

        else {
            setIsFlipped(false);
        }
      
  


    }, [qte]);

const handleLeftButton = () => {



let count = Number(middle);

setMiddle(count-1);

if (Number(middle) > 0) {
    updateItem(id, middle);


  }

  else {
    removeItem(id);
    

  }



}

const handleFocus = () => {



    document.getElementById("cardIpt"+id).select();
}   

const handleRightButton = () => {



    let count = Number(middle);

    setMiddle(count+1);

if (Number(middle) > 0) {
    updateItem(id, middle);

  }

  else {
    removeItem(id);
    

  }
}



    return (
        <div>
            {!isFlipped ? (
                <CustomButton onClick={onClick} text="Ajouter au panier" />
            ) : (
                <div className='currentCart'><span>Panier : <CustomButton onClick={handleLeftButton} text="-"/></span><CustomNumberInput id={"cardIpt"+id} focus={handleFocus} change={handleInputChange} value={Number(middle)} min={0} /><CustomButton  onClick={handleRightButton} text="+"/></div>
            )}
        </div>
    );
};

export default SmartCartButton;

