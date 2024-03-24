import React, { useEffect, useState } from "react";
import ListeProduits from "./ListeProduits";
import { getAllProduits } from "../components/Page_Produits/AppelAPIProduits";


const PageProduits = () => {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const produitsData = await getAllProduits();
        setProduits(produitsData);
      } catch (error) {
        console.error("Error fetching produits", error);
      }
    }
    fetchData();
  }, []);


  return (
    <div className="text-center pt-6">
      <h1 className="text-2xl">Page des produits</h1>
      <div className="pt-6">
        <ListeProduits produits={produits} />
      </div>
    </div>
  );
};

export default PageProduits;
