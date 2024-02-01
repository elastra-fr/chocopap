import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link, useParams } from "react-router-dom";
import Parse from "parse/dist/parse.min.js";
import { useState, useEffect } from "react";
import Panier from "../../components/panier/Panier";
import NewSmartCartButton from "../../components/smartcartbutton/NewSmartCartButton";

const app_id = process.env.REACT_APP_ID;
const host_url = process.env.REACT_APP_HOST_URL;
const javascript_key = process.env.REACT_APP_JAVASCRIPT_KEY;

Parse.initialize(app_id, javascript_key);
Parse.serverURL = host_url;

function FicheProduit(props) {
  const [showPanier, setShowPanier] = useState(false);

//Fonction qui permet d'afficher ou de cacher le panier
  const handleShowPanier = () => {
    setShowPanier(!showPanier);
  };


  document.title = "Fiche produit - CHOCO PAP";

  const { id } = useParams();

  const [product, setProduct] = useState();
  const [qte, setQte] = useState(1);


//Fonction qui récupère le produit en fonction de l'id passé avec useParams
  const fetchProduct = async () => {
    const query = new Parse.Query("products");
    query.contains("objectId", id);

    try {
      const allProducts = await query.find();
      setProduct(allProducts);
    
    } catch (error) {
      console.log(error);
    }
  };

//Met à jour le produit en fonction de l'id passé avec useParams (utile depuis le panier pour revenir sur la fiche produit)
  useEffect(() => {
    fetchProduct();
  }, [id]);


  return (
    <>
      <Header
        close={handleShowPanier}
        showPanier={showPanier}
        cartCount={props.cartCount}
      />

      {product !== undefined && (
        <main id="singleProductMain">
          <div>
            <Link to={"/Boutique"}>
              <span id="backToShop">Retour</span>
            </Link>
          </div>
          <div id="infosWrapper">
            <div id="singleProductInfos">
              <h1 className="singleProductTitle">
                {product[0].attributes.title}
              </h1>
              <span className="singleProductPrice">
                {product[0].attributes.price + " €"}
              </span>
              <p>{product[0].attributes.description}</p>

              <div className="contCartButton">
                <NewSmartCartButton
                  id={id}
                  getQte={props.getQteItem}
                  newQte={props.getQteItem(id)}
                  updateItem={props.updateItem}
                  removeItem={props.removeItem}
                  gestionCart={props.gestionCart}
                  urlImage={product[0].attributes.image}
                  name={product[0].attributes.title}
                  price={product[0].attributes.price}
                />
              </div>
            </div>

            <div id="singleProductImg">
              <img
                src={"." + product[0].attributes.image}
                alt={"Illustration du produit " + product[0].attributes.title}
              ></img>
            </div>
          </div>

          <div id="singleProductIngredients">
            <h4>Ingrédients</h4>
            <p id="ingList">{product[0].attributes.ingredients}</p>
          </div>

          <Panier
            close={handleShowPanier}
            showPanier={showPanier}
            emptyCart={props.emptyCart}
            cartItems={props.cartItems}
            sumCart={props.sumCart}
            removeItem={props.removeItem}
            updateItem={props.updateItem}
          />
        </main>
      )}

      <Footer />
    </>
  );
}

export default FicheProduit;
