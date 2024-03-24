// Dans votre composant Panier
import React, { useState } from "react";
import { usePanier } from "../Panier/Context";
import SelectQuantite from "./SelectQuantite";
import ButtonPanier from "./ButtonPanier";


const Panier = () => {
  const {
    produitDansPanier,
    supprimerProduitPanier,
    quantite,
    incrementQuantite,
    decrementQuantite,
  } = usePanier();

  const handleSupProduit = (produitId) => {
    supprimerProduitPanier(produitId);
  };

  const handleIncrement = (produitId) => {
    incrementQuantite(produitId);
  };

  const handleDecrement = (produitId) => {
    decrementQuantite(produitId);
  };
  const totalArticles = produitDansPanier.reduce(
    (total, produit) => total + produit.quantite,
    0
  );

  const totalCommande = produitDansPanier.reduce(
    (total, produit) => total + produit.prix * produit.quantite,
    0
  );


  return (
    <div className=" m-10 space-x-20 pe-10">
      <div className="text-center pt-6 pb-5">
        <h1 className="text-2xl">Votre panier</h1>
      </div>
      <div className=" w-1/3 bg-white rounded-lg  space-y-4 float-right p-8">
        <p className="text-2xl text-center">Total</p>
        <div className="">
          <p className="border-b-2">
            Vous avez {totalArticles} produits dans votre panier :{" "}
          </p>
          {produitDansPanier.length > 0 && (
            <div className="">
              {produitDansPanier.map((produit) => (
                <div className="" key={produit.id}>
                  <div className="flex items-stretch flow-root ">
                    <h2 className="text-lg mb-1 float-left">{produit.nom}</h2>
                    <p className="float-right">{produit.prix}€</p>
                  </div>
                </div>
              ))}
              <div>
                <p className="border-t-2">
                  Total de la commande : {totalCommande}€ TTC
                </p>
              </div>
              <div className="flex justify-center mt-6 ">
             <ButtonPanier />
              </div>
            </div>
          )}
        </div>
        
      </div>
      {produitDansPanier.length > 0 ? (
        <ul className="">
          <div className=" w-2/3">
            {produitDansPanier.map((produit) => (
              <div
                key={produit.id}
                className=" w-2/3 bg-white p-4 rounded-lg mb-4 flex-grow flex flex-row space-x-4 space-y-4 pe-10"
              >
                <div className="basis-1/3 ">
                  <img
                    src={`../src/assets/${produit.nom}.png`}
                    alt=""
                    className="size-20"
                  />
                </div>
                <div className="basis-1/4">
                  <h3 className="text-xl">{produit.nom}</h3>
                  <p>{produit.prix}€</p>
                  <p>Quantité: {produit.quantite}</p>
                  {/* Affichage de la quantité */}
                </div>
                <div className="space-x-8 basis-1/2 flex items-center">
                  <div className="border border-pink-800 rounded-lg w-32 flex justify-center h-9 text-pink-800 ">
                    <button
                      className=""
                      onClick={() => handleDecrement(produit.id)}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <SelectQuantite
                      className=""
                      quantity={produit.quantite}
                      onQuantityChange={(newQuantity) => {
                        if (newQuantity > produit.quantite) {
                          handleIncrement(produit.id);
                        } else if (newQuantity < produit.quantite) {
                          handleDecrement(produit.id);
                        }
                      }}
                    />
                    <button
                      className=""
                      onClick={() => handleIncrement(produit.id)}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                  <button
                    className="px-4 py-2 text-sm rounded-lg dark:bg-pink-800 dark:placeholder-pink-400 dark:text-white float-right "
                    onClick={() => handleSupProduit(produit.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </ul>
      ) : (
        <p>Aucun produit dans le panier</p>
      )}
    </div>
  );
};

export default Panier;
