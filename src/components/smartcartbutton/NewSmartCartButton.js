import React, { useEffect, useState } from 'react';
import CustomButton from '../custombutton/CustomButton';
import CustomNumberInput from '../customnumberinput/CustomNumberInput';
import './SmartCartButton.css';
import '../custombutton/CustomButton.css';


const NewSmartCartButton = ({id, getQte, updateItem, removeItem, gestionCart, urlImage, name, price, cartItems, newQte}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    //const [qte, setQte] = useState(newQte);
    const [localQte, setLocalQte] = useState(newQte);




    //Fonction qui gère les changements de l'input quantité

    const handleInputChange = (e) => {

        e.preventDefault();
        e.stopPropagation();

        setLocalQte(Number(e.target.value));
    
        handleItem(Number(e.target.value));


    }

//Mobile uniquement : gestion du click sur le bouton moins
    const increment = (e) => {

        e.preventDefault();
        e.stopPropagation();
        setLocalQte(prevCount=>Number(prevCount)+1);
        handleItem(Number(localQte+1));

    }

//Mobile uniquement : gestion du click sur le bouton plus    
    const decrement = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setLocalQte(prevCount=>Number(prevCount)-1);
        handleItem(Number(localQte-1));

    }


//Fonction qui gère l'ajout ou la suppression d'un item dans le panier en fonction de la quantité envoyée    
    const handleItem = (QteToSend) => {


         if(QteToSend>0){

updateItem(id, Number(QteToSend));   

    }

    else if (QteToSend===0){

removeItem(id);

    }


    }


 //Gestion de l'affichage du bouton en fonction de la quantité de l'item dans le panier   
    useEffect(() => {

        setLocalQte(newQte);     

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
                <div className='currentCart'>
                
                {<span>Panier : </span>}
                <CustomButton addClass={"visibility"} onClick={(e)=>{decrement(e)}} text={"-"}/>
                <CustomNumberInput id={"cardIpt"+id} change={handleInputChange} value={Number(localQte)} min={0} />
                <span className='substitute'>{Number(localQte)}</span>
                <CustomButton addClass={"visibility"} onClick={(e)=>{increment(e)}} text={"+"}/>
                
                </div>

            )}
        </div>
    );
};

export default NewSmartCartButton;

