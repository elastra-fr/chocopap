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

    //console.log(typeof(middle));

    const handleInputChange = (e) => {
        //console.log("fire input change - Middle = "+middle);

        setMiddle(Number(e.target.value));


        if (Number(e.target.value) > 0) {
            updateItem(id, e.target.value);
            //console.log("fire update item 1");
          }
    
          else if (Number(e.target.value) === 0){
            removeItem(id);
            
    
          }
    };


    useEffect(() => {

        //console.log("fire use effect qte - Middle = "+ middle);
    
     

        setMiddle(qte);     

        if (qte > 0) {
            setIsFlipped(true);
        }    

        else {
            setIsFlipped(false);
        }
      
  


    }, [qte]);

const handleLeftButton = () => {

    //console.log("fire left button");

let count = Number(middle);

setMiddle(count-1);

if (Number(middle) > 0) {
    updateItem(id, middle);
//console.log("fire update item 2");

  }

  else {
    removeItem(id);
    

  }



}

const handleFocus = () => {

    console.log("fire focus");

    document.getElementById("cardIpt"+id).select();
}   

const handleRightButton = () => {

    //console.log("fire right button");

    let count = Number(middle);

    setMiddle(count+1);

if (Number(middle) > 0) {
    updateItem(id, middle);
    //console.log("fire update item 3");
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

