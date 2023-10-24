import React from 'react'
import Acc1 from '../images/accueil1.jpg'
import Acc2 from '../images/accueil2.jpg'
import Acc3 from '../images/accueil3.jpg'


const CurrentImg=(props)=>{

return(

<img className='imgAcc' src={props.src} alt='Accueil 1'/>

);


}








const Carousel=()=>{

    const [toShow, setToShow]=React.useState(Acc1);   
    //setToShow(Acc1);

    function handleClick(bt,e){
       e.preventDefault();
    //console.log(bt);
switch(bt){
case 0:
    setToShow(Acc1);
break;

case 1:
    setToShow(Acc2);
break;

case 2:
    setToShow(Acc3);
break;




}

    
        
        
        }

        //slideShow();
       
       /* function slideShow(){

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

              

            }*/

        
        
           // }    
    



return(
<div>
<CurrentImg src={toShow}/>

<a href='#'>VOIR LA BOUTIQUE</a>

<div>
 <a href='#' onClick={(e)=>handleClick(0,e)}>1</a>
 <a href='#' onClick={(e)=>handleClick(1,e)}>2</a>
 <a href='#' onClick={(e)=>handleClick(2,e)}>3</a>   
</div>



</div>





);


}

export default Carousel;