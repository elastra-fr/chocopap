import React from 'react'
import Acc1 from '../images/accueil1.jpg'
import Acc2 from '../images/accueil2.jpg'
import Acc3 from '../images/accueil3.jpg'


const CurrentImg=(props)=>{

return(

<img className='imgAcc' src={props.src} alt='Acceuil 1'/>

);


}








const Carousel=()=>{

    const [toShow, setToShow]=React.useState('');   

    function handleClick(){

        setToShow(Acc2);
        
        
        }

        slideShow();
       
        function slideShow(){

            let slide =[Acc1, Acc2, Acc3];
            let count=0;
            
            

            console.log("Chargement");
            
            function cycle(){

                let image = slide[count];

                setToShow(image);

               


              
                // increment our counter
                count++;
              
                // reset counter if we reach end of array
                if (count === slide.length) {
                  count = 0;
                }

              

            }

        
        
            }    
    



return(
<div>
<CurrentImg src={toShow}/>

<a href='#'>VOIR LA BOUTIQUE</a>

<div>
 <a href='#' onClick={handleClick}>1</a>
 <a href='#'>2</a>
 <a href='#'>3</a>   
</div>



</div>





);


}

export default Carousel;