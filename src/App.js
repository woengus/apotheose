import React from 'react';
import { } from 'react-dom';
import { Redirect, Route, Switch } from 'react-router-dom';
import Acceuil from './pages/Acceuil';
import Apropos from './pages/Apropos';
import Competences from './pages/Competences';
import Contact from './pages/Contact';
import { Project1, Project2, Project3, Project4 } from './pages/Projects';

const App = () => {
  return (
    <div>
     <Switch>
      <Route exact path="/" component={Acceuil} />
      <Route exact path="/projet1" component={Project1} />
      <Route exact path="/projet2" component={Project2} />
      <Route exact path="/projet3" component={Project3} />
      <Route exact path="/projet4" component={Project4} />
      <Route exact path="/a propos" component={Apropos} />
      <Route exact path="/compétences" component={Competences} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
     </Switch>
    

    </div>
  );
};

export default App;