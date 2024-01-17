

const Cart=(props)=>{




    return(
    <div>
      <a href="#"><span>{props.count}</span><img className='icCart' src={props.src} alt='Panier'/></a>
      
    </div>
    
    );
    
    
    }

    export default Cart;