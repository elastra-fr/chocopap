import React, { useEffect, useState } from 'react';
import CustomButton from '../custombutton/CustomButton';
import CustomNumberInput from '../CustomNumberInput';
import './SmartCartButton.css';
//import { type } from '@testing-library/user-event/dist/type';

const NewSmartCartButton = ({id, getQte, updateItem, removeItem, gestionCart, urlImage, name, price}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [qte, setQte] = useState(getQte(id));
    const [localQte, setLocalQte] = useState(0);

    console.log("qte :"+qte);


    const handleInputChange = (e) => {

        setQte(Number(e.target.value));
        handleItem(e.target.value);


    }


    const increment = () => {
setQte(prevCount=>prevCount+1);
handleItem(Number(qte+1));

    }

    const decrement = () => {
setQte(prevCount=>prevCount-1);
handleItem(Number(qte-1));

    }

    const handleItem = (QteToSend) => {
;

let localIpt=document.getElementById("ipt"+id);
console.log("localIpt :"+Number(localIpt.value));

        if(localQte>0){

updateItem(id, Number(QteToSend));   

    }

    else if (localQte===0){

removeItem(id);

    }


    }
/*
useEffect(() => {


    if(localQte>0){

        updateItem(id, localQte);   
        
            }
        
            else if (localQte===0){
        
        removeItem(id);
        
            }







}, [localQte]);
*/




    useEffect(() => {

        setLocalQte(qte);     

        if (qte > 0) {
            setIsFlipped(true);
   
        }    

        else {
            setIsFlipped(false);
        }
      
        


    }, [qte]);

const handleLeftButton = () => {
setLocalQte(localQte-1);
console.log("left button clicked");
console.log("qte :"+qte);
handleItem();

}

const handleRightButton = () => {

setLocalQte(localQte+1);
console.log("right button clicked");
console.log("qte :"+qte);
handleItem();

}






   
    




    return (
        <div>
            {!isFlipped ? (
                <input type='button' value="Ajouter au panier" onClick={()=>{gestionCart(id, urlImage, name, price,1)}}/>
            ) : (
                <div className='currentCart'><span>Panier : <input type='button' value="-" onClick={()=>{decrement()}}/></span><input type='number' id={"ipt"+id} value={localQte} onChange={handleInputChange} /><input type='button' value="+" onClick={()=>{increment()}}/></div>
            )}
        </div>
    );
};

export default NewSmartCartButton;

