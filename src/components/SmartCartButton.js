import React, { useEffect, useState } from 'react';
import CustomButton from './CustomButton';
import CustomNumberInput from './CustomNumberInput';
import './SmartCartButton.css';

const SmartCartButton = ({qte, onClick, updateItem, id, removeItem}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [middle, setMiddle] = useState();

useEffect(() => {
    
    setMiddle(qte); },
    
    []);


    const handleInputChange = (e) => {
        setMiddle(e.target.value);
   
        if (e.target.value > 0) {
            updateItem(id, e.target.value);
          }
    
          else {
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






    return (
        <div>
            {!isFlipped ? (
                <CustomButton onClick={onClick} text="Ajouter au panier" />
            ) : (
                <div className='currentCart'><span>Panier : </span><CustomNumberInput id={"cardIpt"+id} change={handleInputChange} value={middle} min={0} /></div>
            )}
        </div>
    );
};

export default SmartCartButton;

