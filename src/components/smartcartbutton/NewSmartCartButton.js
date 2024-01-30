import React, { useEffect, useState } from 'react';
import CustomButton from '../custombutton/CustomButton';
import CustomNumberInput from '../CustomNumberInput';
import './SmartCartButton.css';
import '../custombutton/CustomButton.css';
import { type } from '@testing-library/user-event/dist/type';
//import { type } from '@testing-library/user-event/dist/type';

const NewSmartCartButton = ({id, getQte, updateItem, removeItem, gestionCart, urlImage, name, price, cartItems, newQte}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [qte, setQte] = useState(newQte);
    const [localQte, setLocalQte] = useState(0);

    console.log("Nouvelleqte :"+qte);


    const handleInputChange = (e) => {

        setQte(Number(e.target.value));
        handleItem(e.target.value);


    }


    const increment = () => {

setQte(prevCount=>Number(prevCount)+1);
handleItem(Number(qte+1));



    }

    const decrement = () => {
setQte(prevCount=>Number(prevCount)-1);
handleItem(Number(qte-1));

    }

    const handleItem = (QteToSend) => {

        console.log("handleItem Type :"+typeof(QteToSend));
;


//console.log("localIpt :"+Number(localIpt.value));

        if(QteToSend>0){

updateItem(id, Number(QteToSend));   

    }

    else if (QteToSend===0){
console.log("remove item :"+id);
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

        setLocalQte(newQte);     
        console.log("fire use effect qte - NewSmartCartButton = "+ qte);

        if (newQte > 0) {
            setIsFlipped(true);
   
        }    

        else {
            setIsFlipped(false);
            
        }
      
        


    }, [newQte]);

    




    return (
        <div>
            {!isFlipped ? (
              
                <CustomButton onClick={()=>{gestionCart(id, urlImage, name, price,1)}} text={"Ajouter au panier"}/>
            ) : (
                <div className='currentCart'><span>Panier : <CustomButton onClick={()=>{decrement()}} text={"-"}/>{/*<input type='button' value="-" onClick={()=>{decrement()}}/>*/}</span><CustomNumberInput id={"cardIpt"+id} change={handleInputChange} value={Number(localQte)} min={0} />{/*<input type='number' id={"ipt"+id} value={localQte} onChange={handleInputChange} />*/}{/*<input type='button' value="+" onClick={()=>{increment()}} />*/} <CustomButton onClick={()=>{increment()}} text={"+"}/></div>

            )}
        </div>
    );
};

export default NewSmartCartButton;

