import React, { useState } from 'react';

const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [signupData, setSignupData] = useState({
    nom: '',
    prenom: '',
    adresse: '',
    email: '',
    telephone: '',
    password: '',
    civilite: '',
    dateNaissance: '',
    role: 2,
  });

  const handleSigninSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3001/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Erreur de connexion: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Réponse de connexion:', data);
  
      // Gérer ici la sauvegarde des informations de connexion retournées, comme le token JWT
      // Par exemple, sauvegarder le token dans le localStorage ou le contexte de l'application
  
      alert('Connexion réussie !');
      // Redirection de l'utilisateur ou mise à jour de l'interface utilisateur après connexion réussie
    } catch (error) {
      console.error('Erreur lors de la tentative de connexion:', error);
      alert('Erreur lors de la connexion. Veuillez réessayer.');
    }
  };
  

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    // Logic for signing up
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col md:flex-row justify-around items-center min-h-screen bg-gray-100 p-4">
      <div className="signin-form bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Connexion</h2>
        <form onSubmit={handleSigninSubmit} className="space-y-4">
          <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="Email" className="w-full px-4 py-2 border rounded-md"/>
          <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="Mot de passe" className="w-full px-4 py-2 border rounded-md"/>
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Se connecter</button>
        </form>
      </div>

      <div className="signup-form bg-white p-6 rounded-lg shadow-md mt-10 md:mt-0">
        <h2 className="text-2xl font-semibold mb-4">Créer un compte</h2>
        <form onSubmit={handleSignupSubmit} className="space-y-4">
          {/* Repeat this structure for other required fields */}
          <input type="text" name="nom" value={signupData.nom} onChange={handleSignupChange} placeholder="Nom" className="w-full px-4 py-2 border rounded-md"/>
          {/* Add other signup fields here */}
          <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">S'inscrire</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
