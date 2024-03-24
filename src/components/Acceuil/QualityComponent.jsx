import React from 'react';

const QualityComponent = () => {
  return (
    <div className="flex justify-center items-center space-x-8">
      <div className="w-1/3">
        <img
          src="src\assets\du-vin.png"
          alt="Vins de qualité"
          className="w-full h-auto max-w-xs mx-auto" // Adjusted size
        />
        <p className="text-center font-semibold mt-8">Qualité exceptionnelle</p>
      </div>
      <div className="w-1/3">
        <img
          src="src\assets\expedie.png"
          alt="Livraison rapide"
          className="w-full h-auto max-w-xs mx-auto" // Adjusted size
        />
        <p className="text-center font-semibold mt-8">Livraisons rapides</p>
      </div>
      <div className="w-1/3">
        <img
          src="src\assets\boite-demballage.png"
          alt="Emballage recyclable"
          className="w-full h-auto max-w-xs mx-auto" // Adjusted size
        />
        <p className="text-center font-semibold mt-8">Emballage 100% recyclable</p>
      </div>
    </div>
  );
};

export default QualityComponent;
