//const someCommonValues = ['common', 'values'];
    
/*export const doSomethingWithInput = (theInput) => {
   //Do something with the input
   return theInput;
};*/
    
export const justAnAlert = () => {
   alert('hello');
};

export const gestionCart=(id, urlImage, name, pu, nb)=>{
    
//alert(id + " " + urlImage + " "+ name + " "+ pu + " "+ nb + " ");



if(localStorage.getItem("myCart"))
{
  let cart = JSON.parse(localStorage.getItem("myCart"));
//  let count=Object.values(cart).length;  

//Recherche si article existe déjà dans le panier



/*const index = cart.findIndex(object => {
   return object.num === id;
 });
*/
 const index2 = cart.map(object => object.num).indexOf(id);


 console.log(index2);

  if (index2>=0) {
  //    console.log("La valeur existe");
      //let oldItem=JSON.stringify(cart[index2]);
    //  console.log("avant"+oldItem);
      cart[index2].qte=cart[index2].qte+nb;
      //console.log(JSON.stringify(cart));
      localStorage.setItem("myCart", JSON.stringify(cart));
      
   } 
   
   else {
console.log("execution else " + 1);
      let newItem={num:id, img:urlImage, nom:name, prix:pu, qte:nb };
      cart.push(newItem);
      localStorage.setItem("myCart", JSON.stringify(cart));
   //console.log(JSON.parse(localStorage.getItem("myCart")));

      
   }

console.log("variable cart = " + JSON.stringify(cart));



}

else

{
let newItem={num:id, img:urlImage, nom:name, prix:pu, qte:nb };
let newCart=[newItem];
//let myCart= [{id:"3", qte:"4"}, {id:"2", qte:"5"}, {id:"2", qte:"4"} ];
//myCart.push({id:"12", qte:"3"});

localStorage.setItem("myCart", JSON.stringify(newCart));
//console.log(JSON.parse(localStorage.getItem("myCart")));



}



    
console.log(JSON.parse(localStorage.getItem("myCart")));
    
    };

export const insertItemCart=()=>{
alert("ajout");


};

export const removeItemCart=()=>{



};

export const updateItemCart=()=>{



};

export const emptyItemsCart=()=>{

localStorage.removeItem("myCart");
console.clear();
console.log("Panier vidé");

};