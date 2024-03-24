import React, { useState, useEffect } from "react";


function Recherche({ onSearchChange }) {

  const handleSearchTerm = (e) => {
    const value = e.target.value.toLowerCase();
    onSearchChange(value);
  };

  return (
    <>
      <div className="flex justify-center">
        <input
          type="text"
          name="recherche"
          id="recherche"
          placeholder="Rechercher par mot-clé"
          onChange={handleSearchTerm}
          className="block w-64 shadow-md p-2 ps-10 text-sm rounded-lg dark:bg-pink-800 dark:placeholder-pink-400 dark:text-white"
        />
      </div>
    </>
  );
}

export default Recherche;
