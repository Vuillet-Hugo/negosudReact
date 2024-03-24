import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white text-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {/* Section Assistance */}
        <div>
          <h5 className="font-bold mb-2">ASSISTANCE</h5>
          <p>SERVICE CLIENTS</p>
          <p>LIVRAISON</p>
          <p>PAIEMENT</p>
          <p>FAQ</p>
          <p>CARTES CADEAUX</p>
        </div>

        {/* Section À propos */}
        <div>
          <h5 className="font-bold mb-2">QUI SOMMES NOUS ?</h5>
          <p>CONTACT ENTREPRISE</p>
          <p>ESPACE MARIAGE</p>
          <p>POLITIQUE DE CONFIDENTALITÉ</p>
          <p>POLITIQUE DES COOKIES</p>
          <p>MENTIONS LÉGALES ET CGU</p>
          <p>CONDITIONS GENERALES DE VENTE</p>
        </div>

        {/* Section Catégories */}
        <div>
          <h5 className="font-bold mb-2">CATÉGORIES</h5>
          <p>VINS</p>
          <p>CHAMPAGNES</p>
          <p>SPIRITUEUX</p>
          <p>BIÈRES</p>
          <p>ACCESSOIRES</p>
          <p>NOUVEAUTÉS</p>
          <p>COUPS DE COEURS</p>
          <p>PROMOTIONS</p>
          <p>FOIRE AUX VINS</p>
          <p>PRIMEURS</p>
        </div>

        {/* Section Localisation et Réseaux Sociaux */}
        <div>
          <h5 className="font-bold mb-2">NOUS SUIVRE</h5>
          <p>BLOG 💬</p>
          <p>LOCALISATION</p>
          {/* Ajoutez des icônes ou des liens vers des réseaux sociaux si nécessaire */}
        </div>
      </div>
      <div>
         <img src="./src/assets/reglementation-vente-mineur.png" alt="Emballages anti-casse" style={{ width: '500px', height: 'auto', margin: '0 auto' }} />
         <img src="./src/assets/test.png" alt="ethylostest" style={{ width: '300px', height: 'auto', margin: '0 auto' }} />

</div>


      {/* Section Langues et Ethylotest */}
      <div className="mb-4">
        <p>Vous êtes sur la boutique FRANCE</p>
        {/* Ajoutez ici des drapeaux ou des liens pour changer de langue */}
      </div>
      
      {/* Rappel Consommation Responsable */}
      <div className="text-sm">
        <p>L'ABUS D'ALCOOL EST DANGEREUX POUR LA SANTÉ, À CONSOMMER AVEC MODÉRATION</p>
      </div>

      {/* Droits d'auteur */}
      <div className="mt-4">
        <p>© 2016-2024 NEGOSUD</p>
      </div>
      
    </footer>
  );
}

export default Footer;