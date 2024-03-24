import React from 'react';

// Composant pour afficher une note sous forme d'étoiles
const StarRating = ({ rating }) => {
  const starFull = '★';
  const starEmpty = '☆';
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(i <= rating ? starFull : starEmpty);
  }

  return <div className="text-yellow-500 text-xl">{stars.join(' ')}</div>;
};

// Composant pour afficher les avis clients
function CustomersReview() {
  // Exemple de données d'avis mis à jour
  const reviews = [
    { id: 1, name: 'Jean D.', rating: 5, comment: 'Excellent service et produits de qualité !', date: '12 Mars 2023' },
    { id: 2, name: 'Marie C.', rating: 4, comment: 'Très bonne expérience, je recommande !', date: '8 Avril 2023' },
    { id: 3, name: 'Lucas B.', rating: 4, comment: 'Livraison rapide, vins excellents.', date: '15 Mai 2023' },
    { id: 4, name: 'Sophie E.', rating: 5, comment: 'Sélection impressionnante et conseils utiles.', date: '21 Juin 2023' },
  ];

  return (
    <div className="my-12 px-8 py-8"> {/* Augmentation des marges et des paddings */}
      <h2 className="text-3xl font-bold text-center mb-8">Avis Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> {/* Ajustement de l'espacement entre les cartes */}
        {reviews.map((review) => (
          <div key={review.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"> {/* Ombre plus prononcée et padding augmenté */}
            <div>
              <h3 className="text-xl font-semibold">{review.name} <span className="text-sm text-gray-500">{review.date}</span></h3>
              <StarRating rating={review.rating} />
              <p className="mt-2 text-gray-700">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomersReview;
