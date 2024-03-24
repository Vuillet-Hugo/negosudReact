import React, { useState } from 'react';

const SignupPage = () => {
  const [formState, setFormState] = useState({
    nom: '',
    prenom: '',
    adresse: '',
    email: '',
    telephone: '',
    password: '',
    civilite: '',
    dateNaissance: '',
    role: 2 // Défini en dur comme spécifié
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la création du compte');
      }

      const data = await response.json();
      console.log('Compte créé avec succès :', data);
      // Gérer la redirection ou l'affichage d'un message de succès ici
    } catch (error) {
      console.error('Erreur lors de la création du compte :', error);
    }
  };

  return (
    <div>
      <h2>Créer un compte</h2>
      <form onSubmit={handleSubmit}>
        {/* Ajoutez des champs de formulaire ici en utilisant handleChange pour chaque input */}
        <input type="text" name="nom" value={formState.nom} onChange={handleChange} placeholder="Nom" />
        {/* Répétez pour les autres champs du formulaire */}
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default SignupPage;
