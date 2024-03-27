import React from 'react';

const URL_BACK = "http://localhost:3001/";

export async function getAllProduits() {
    try {
      const getAll = await fetch(`http://localhost:3001/produits`);
      const response = await getAll.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  export async function getProduitById(produitId) {
    try {
      const getAllId = await fetch(`http://localhost:3001/produits/${produitId}`);
      const response = await getAllId.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  export async function order(){
    try {
      const orderClient = await fetch (`http://localhost:3001/orders`);
      const response = await orderClient.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  }