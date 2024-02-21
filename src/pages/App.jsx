import "/styles/App.css";
// import styled from "styled-components";
import Navbar from "../components/Navbar";
import { getAllProduits } from "../utils/fetch";
function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="text-3xl font-bold underline">Prout</h1>
      <button onClick={() => getAllProduits()}>CACA DE FOU</button>
    </div>
  );
}
export default App;
