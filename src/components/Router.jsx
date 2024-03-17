import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageAccueil from './Accueil';
import ListeProduits from './ListeProduits';
import Panier from './Panier/Panier';
import PageCarte from './stripe/PageCarte';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PageAccueil} />
        <Route path="/ListeProduits" component={ListeProduits} />
        <Route path="/Panier/:id" component={Panier} />
        <Route path="/PageCarte" component={PageCarte} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
