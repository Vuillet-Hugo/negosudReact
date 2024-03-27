import React, { useState, useEffect } from "react";


const Filtres = ({ produits, onFilterChange }) => {
  const [filtres, setFiltres] = useState({ rouge: false, blanc: false, bourgogne: false, prix:false });
 
  
  const handleFilterChange = (event) => {
    
    const { name, checked } = event.target;
    setFiltres(prevState => ({
      ...prevState,
      [name]: checked
    }));

    // Appeler la fonction onFilterChange avec les filtres mis à jour
    onFilterChange({ ...filtres, [name]: checked });
  };

  const filteredProduits = produits.filter((produit) => {
    return (!filtres.rouge || produit.couleur === "rouge") &&
           (!filtres.blanc || produit.couleur === "blanc") &&
           (!filtres.bourgogne || produit.region === "bourgogne")
  });
  
  return (
    <div className="space-y-4 flex flex-col items-center">
      <p>Sélectionner un cépage</p>
      <div className="space-y-2 flex flex-col">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="rouge"
            checked={filtres.rouge}
            onChange= {handleFilterChange}
          />
          <span className="ml-2">Rouge</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="blanc"
            checked={filtres.blanc}
            onChange= {handleFilterChange}
          />
          <span className="ml-2">Blanc</span>
        </label>
      </div>
      <p>Sélectionner une Région</p>
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          name="bourgogne"
          checked={filtres.bourgogne}
          onChange= {handleFilterChange}
        />
        <span className="ml-2">Bourgogne</span>
      </label>
    </div>
  );
};

export default Filtres;
