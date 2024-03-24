import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-page bg-gray-100 p-10">
      <h1 className="text-center text-4xl font-bold mb-10">Nous Contacter</h1>
      <div className="md:flex md:items-start md:justify-between">
        <div className="mb-10 md:mb-0 md:flex-1">
          <h2 className="text-2xl font-semibold mb-5">Negosud - Siège à Reims</h2>
          <p><strong>Adresse :</strong> 123 Rue de Vesle, 51100 Reims, France</p>
          <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
          <p><strong>Email :</strong> contact@negosud.fr</p>
          <div className="mt-5">
            <img src="./src/assets/teams.jpg" alt="L'équipe Negosud" className="rounded-lg shadow-lg max-w-full h-auto" />
          </div>
        </div>
        <div className="md:flex-1">
          <h2 className="text-2xl font-semibold mb-5">Localisation</h2>
          <iframe
            className="w-full aspect-video" // `aspect-video` crée un ratio de 16:9, ajustez selon vos besoins
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9977967652414!2d4.033090915675793!3d48.95668207929565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e8d9edf6eaf97f%3A0x40a5fb99a3b3b0!2sReims!5e0!3m2!1sfr!2sfr!4v1640621600000!5m2!1sfr!2sfr"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
