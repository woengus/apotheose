import React from 'react';
import { } from 'react-dom';
import { Route, Switch } from 'react-router';
import Acceuil from './pages/Acceuil';
import Apropos from './pages/Apropos';
import Competences from './pages/Competences';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <div>
     <Switch>
      <Route exact path="/" component={Acceuil} />
      <Route exact path="/Portfolio" component={Portfolio} />
      <Route exact path="/A propos" component={Apropos} />
      <Route exact path="/Compétences" component={Competences} />
      <Route exact path="/Contact" component={Contact} />

      
     </Switch>
    

    </div>
  );
};

export default App;