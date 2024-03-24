import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import AboutNegosud from "../components/Acceuil/Aboutnegosud";
import CustomersReview from "../components/Acceuil/CustomersReview";
import Footer from "../components/Acceuil/Footer";
import ChatButton from "../components/Acceuil/ChatButton";
import QualityComponent from "../components/Acceuil/QualityComponent";
import HomeBanner from "../components/Acceuil/HomeBanner";
import LoginPage from "../components/Login/LoginPage"; // Adjust the import path as needed
import ContactPage from "../components/Acceuil/ContactPage"; // Ajustez le chemin selon votre structure de dossier


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HomeBanner />
              <div className="my-12"><AboutNegosud /></div>
              <div className="my-12"><QualityComponent /></div>
              <div className="my-12"><CustomersReview /></div>
              <div className="my-12"><ChatButton /></div>
              <Footer className="mt-12">Footer</Footer>
            </>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          {/* Define other routes here */}
         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
