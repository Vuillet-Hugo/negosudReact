import React from "react";
import { Link } from "react-router-dom";

function ButtonPanier(produits) {
  const id_utilisateur = 1;

  const orderPost = async () => {
    console.log(produits.produit);
    const jsonData = {
      id_utilisateur: id_utilisateur, // Inclure l'ID utilisateur dans les données de la commande
      products: produits.produit,
      // Ajoutez d'autres données du panier si nécessaire
    };
    console.log(jsonData);
    try {
      const response = await fetch("http://localhost:3001/orders", {
        method: "post",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la requête");
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  return (
    <Link to="/PageCarte">
      <button
        onClick={orderPost}
        className="bg-transparent hover:bg-pink-800 text-pink-800 font-semibold hover:text-white py-2 px-4 border border-pink-800 hover:border-transparent rounded"
      >
        Valider le panier
      </button>
    </Link>
  );
}

export default ButtonPanier;
