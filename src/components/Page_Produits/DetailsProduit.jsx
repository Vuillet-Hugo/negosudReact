// DetailsProduit.js
import React, { useState, useEffect } from "react";
import { getProduitById } from "./AppelAPIProduits";
import Panier from "../Panier/Panier";
import { usePanier } from "../Panier/Context";


export function DetailsProduit({ produitId, onClose }) {
  const [produit, setProduit] = useState(null);
  const [selectedProduitId, setSelectedProduitId] = useState(null);
  const [produits, setProduits] = useState([]);
  const [idProduit, setIdProduit] = useState(null);
  const { ajouterProduitPanier } = usePanier();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchProduitDetails = async () => {
      try {
        const produitDetails = await getProduitById(produitId);
        setProduit(produitDetails);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails du produit:",
          error
        );
      }
    };

    fetchProduitDetails();
  }, [produitId]);

  const handleAjoutProduit = () => {
    ajouterProduitPanier(produit);
    alert("Produit ajout avec succès");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg p-8 max-w-md">
        {produit ? (
          <div>
            <img
              src={`../src/assets/${produit.nom}.png`}
              alt={produit.imageAlt}
              className="w-full h-auto"
            />
            <h2 className="text-lg font-bold mb-4">{produit.nom}</h2>
            <p className="mb-2">Description: {produit.description}</p>
            <p className="mb-4">Prix: {produit.prix}€</p>
            <p className="mb-4">{produit.millesime}</p>
            {/* Afficher d'autres détails du produit si nécessaire */}
            <div className="flex space-x-4 flex justify-center">
              <button
                className="px-4 py-2 text-sm rounded-lg dark:bg-pink-800 dark:placeholder-pink-400 dark:text-white"
                onClick={onClose}
              >
                Fermer
              </button>
              <button
                className="px-4 py-2 text-sm rounded-lg dark:bg-pink-800 dark:placeholder-pink-400 dark:text-white"
                onClick={handleAjoutProduit} // Pas d'argument ici
              >
                Ajouter au panier
              </button>
              {isPopupOpen && (
                  <div className="popup">
                    <p>Produit ajouté avec succès !</p>
                  </div>
                )}
            </div>
          </div>
        ) : (
          <p>Chargement des détails du produit...</p>
        )}
      </div>
    </div>
  );
}

export default DetailsProduit;
