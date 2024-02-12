import "/styles/App.css";
// import styled from "styled-components";
import Navbar from "../components/Navbar";
//import Produits from "../components/Produits";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";



function App() {
  return (
    <main>
    <div className="App">
      <Navbar />
    </div>
    <div>
      <ContactForm />
      </div>
      <div>
        <Footer />
      </div>


    </main>

  );
}


export default App;

