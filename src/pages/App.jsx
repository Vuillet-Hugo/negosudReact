import "/styles/App.css";
// import styled from "styled-components";
import Navbar from "../components/Navbar";
import PageProduits from "../components/PageProduits";
import Accueil from "../components/Accueil"
import { PanierProvider } from "../components/Panier/Context";



//import ContactForm from "../components/ContactForm";

function App() {
  return (
    <PanierProvider>
    <main>
      <div className="App">
        <Navbar />
      </div>
      <div>
       
      </div>
    </main>
    </PanierProvider>
  );
}

export default App;
