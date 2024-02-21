const URL_BACK = "http://localhost:3000";

export async function getAllProduits() {
  try {
    const getAll = await fetch(URL_BACK + "/produits");
    const response = await getAll.json();
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
