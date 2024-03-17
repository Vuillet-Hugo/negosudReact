import React from 'react';

const URL_BACK = "http://localhost:3000/";

export async function getAllProduits() {
    try {
      const getAll = await fetch(`http://localhost:3000/produits`);
      const response = await getAll.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  export async function getProduitById(produitId) {
    try {
      const getAllId = await fetch(`http://localhost:3000/produits/${produitId}`);
      const response = await getAllId.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  }