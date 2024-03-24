import React from 'react';

function AboutNegosud() {
  return (
    <section className="bg-black py-12 px-4 rounded-lg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            À propos de Negosud
          </h2>
          <p className="mt-3 max-w-md mx-auto text-xl text-white sm:text-2xl md:mt-5 md:max-w-3xl">
            Nous sommes passionnés par la sélection des meilleurs vins pour nos clients. Découvrez notre histoire et notre engagement envers la qualité.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div className="md:w-1/2 lg:w-1/3 px-4">
            <img src="./src/assets/vignes.png" alt="Vignoble" className="rounded-xl shadow-lg"/>
          </div>
          <div className="md:w-1/2 lg:w-2/3 px-4">
            <div className="text-lg text-white space-y-6">
              <p>
                Créé en 2016, Negosud est devenu un leader incontournable dans l’achat de vins en ligne. Avec des vins (rouge, blanc, rosé ou champagne) proposés à la vente et rigoureusement sélectionnés par nos experts du comité de dégustation.
              </p>
              <p>
                Élu meilleur site de vente de vin en ligne à plusieurs reprises, nous nous engageons de façon permanente sur la qualité, le prix et le service. Plusieurs milliers de clients nous font confiance ! Pourquoi pas vous ?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutNegosud;
