import React, { useEffect, useState } from 'react';
import CustomButton from './CustomButton';
import CustomNumberInput from './CustomNumberInput';
import './SmartCartButton.css';

const SmartCartButton = ({qte, onClick, updateItem, id, removeItem}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [quantity, setQuantity] = useState(qte);

    const handleClick = () => {
        if (qte > 0) {
            setIsFlipped(true);
        }
    };

    const handleInputChange = (e) => {
        setQuantity(e.target.value);
        if (quantity > 0) {
            updateItem(id, quantity);
          }
    
          else if(quantity===0){
    console.log("remove");
            removeItem(id);
            
    
          }
    };

    /*
  useEffect(() => {

    if (quantity > 0) {
        updateItem(id, quantity);
      }

      else if(quantity===0){
console.log("remove");
        removeItem(id);
        

      }
    


  }, [quantity]);*/

    useEffect(() => {
      //setQuantity(qte);
      
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
                <div className='currentCart'><span>Panier : </span><CustomNumberInput id={"cardIpt"+id} change={handleInputChange} value={qte} min={0} /></div>
            )}
        </div>
    );
};

export default SmartCartButton;
