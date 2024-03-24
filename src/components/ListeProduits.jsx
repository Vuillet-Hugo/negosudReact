import React, { useEffect, useState } from "react";
import Recherche from "./Recherche";
import Filtres from "./Filtres";
import { getAllProduits } from "./Page_Produits/AppelAPIProduits";
import DetailsProduit from "./Page_Produits/DetailsProduit";

const ListeProduits = () => {
  const [selectedProduitId, setSelectedProduitId] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [filtres, setFiltres] = useState({
    rouge: false,
    blanc: false,
    bourgogne: false,
  });
  const [filteredProduits, setFilteredProduits] = useState([]);
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const produitsData = await getAllProduits();
        if (Array.isArray(produitsData)) {
          setProduits(produitsData);
          setFilteredProduits(produitsData); // Initialiser filteredProduits avec tous les produits
        } else {
          console.error("Erreur: produitsData n'est pas un tableau");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
      }
    };

    fetchProduits();
  }, []);

  useEffect(() => {
    // Filtrer les produits en fonction des filtres sélectionnés
    const newFilteredProduits = produits.filter((produit) => {
      return (
        (!filtres.rouge || produit.couleur === "rouge") &&
        (!filtres.blanc || produit.couleur === "blanc") &&
        (!filtres.bourgogne || produit.region === "bourgogne")
      );
    });
    setFilteredProduits(newFilteredProduits);
  }, [produits, filtres]);



  const handleButtonClick = (produitId) => {
    setSelectedProduitId(produitId);
    setIsPopupOpen(true);
  };

  const handleFilterChange = (newFilters) => {
    setFiltres(newFilters);
  };

  const handleSearchChange = (searchTerm) => {
    const filtered = produits.filter((produit) => {
      const nomMatch = produit.nom.toLowerCase().includes(searchTerm);
      const couleurMatch = produit.couleur.toLowerCase().includes(searchTerm);
      const regionMatch = produit.region.toLowerCase().includes(searchTerm);
      return nomMatch || couleurMatch || regionMatch;
    });
    setFilteredProduits(filtered);
  };

  return (
    <div className="flex pb-20">
      <div className="w-1/4 bg-gray-100 p-4 rounded-lg mr-4 border-x-4 space-y-4">
        <div>
          <h1 className="text-lg">Rechercher par filtres</h1>
        </div>
        <Recherche produits={produits} onSearchChange={handleSearchChange} />
        <Filtres produits={produits} onFilterChange={handleFilterChange} />
      </div>

      <div className="flex flex-wrap w-3/4 ">
        {Array.isArray(filteredProduits) &&
          filteredProduits.map((produit) => (
            <div
              key={produit.id}
              className="max-w-80 bg-white p-4 rounded-lg mb-4 mr-4 flex-grow flex flex-col justify-between items-center "
            >
              {/* Contenu du produit */}
              <div className="flex justify-between w-full mb-4">
                <div className="w-1/3 mt-2">
                  <img
                    src={`../src/assets/${produit.nom}.png`}
                    alt={produit.imageAlt}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-2/3 pl-4">
                  <h3 className="text-2xl">{produit.nom}</h3>
                  <p>{produit.region}</p>
                  <p>{produit.couleur}</p>
                  <p>{produit.volume}</p>
                  <p>{produit.prix}€</p>
                </div>
              </div>
              <button
                className="bg-transparent hover:bg-pink-800 text-pink-800 font-semibold hover:text-white py-2 px-4 border border-pink-800 hover:border-transparent rounded"
                onClick={() => handleButtonClick(produit.id)}
              >
                <p className="text-sm">Détails de l'article</p>
              </button>
            </div>
          ))}
      </div>
      {isPopupOpen && (
        <DetailsProduit
          produitId={selectedProduitId}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </div>
  );
};

export default ListeProduits;
