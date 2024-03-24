import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageAccueil from './Accueil';
import ListeProduits from './ListeProduits';
import Panier from './Panier/Panier';
import PageCarte from './stripe/PageCarte';
import LoginPage from './LoginPage'; 
import ContactPage from './Acceuil/ContactPage'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PageAccueil} />
        <Route path="/ListeProduits" component={ListeProduits} />
        <Route path="/Panier/:id" component={Panier} />
        <Route path="/PageCarte" component={PageCarte} />
        <Route path="/login" component={LoginPage} /> 
        <Route path="/ContactPage"component={ContactPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter