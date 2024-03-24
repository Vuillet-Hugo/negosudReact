// Dans votre fichier de contexte Panier
import React, { createContext, useContext, useState } from 'react';

const PanierContext = createContext();


export const usePanier = () => useContext(PanierContext);

export const PanierProvider = ({ children }) => {
  const [produitDansPanier, setProduitDansPanier] = useState([]);
  const [quantite, setQuantite] = useState(0);



  const ajouterProduitPanier = (produit) => {
    const existingProductIndex = produitDansPanier.findIndex(item => item.id === produit.id);

    if (existingProductIndex !== -1) {
      const updatedProduitDansPanier = [...produitDansPanier];
      updatedProduitDansPanier[existingProductIndex].quantite += 1;
      setProduitDansPanier(updatedProduitDansPanier);
    } else {
      setProduitDansPanier([...produitDansPanier, { ...produit, quantite: 1 }]);
    }
  };

  const supprimerProduitPanier = (produitId) => {
    const nouveauPanier = produitDansPanier.filter(produit => produit.id !== produitId);
    setProduitDansPanier(nouveauPanier);
  };

  const incrementQuantite = (produitId) => {
    const updatedProduitDansPanier = produitDansPanier.map(produit => {
      if (produit.id === produitId) {
        return { ...produit, quantite: produit.quantite + 1 };
      }
      return produit;
    });
    setProduitDansPanier(updatedProduitDansPanier);
    setQuantite(quantite + 1); 
  };

  const decrementQuantite = (produitId) => {
    const updatedProduitDansPanier = produitDansPanier.map(produit => {
      if (produit.id === produitId && produit.quantite > 1) {
        return { ...produit, quantite: produit.quantite - 1 };
      }
      return produit;
    });
    setProduitDansPanier(updatedProduitDansPanier);
    setQuantite(quantite - 1); 
  };

  return (
    <PanierContext.Provider value={{ produitDansPanier, ajouterProduitPanier, supprimerProduitPanier, incrementQuantite, decrementQuantite }}>
      {children}
    </PanierContext.Provider>
  );
};
