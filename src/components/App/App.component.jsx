import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import Home from '../../pages/Home';
import Video from '../../pages/Video';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/:id">
        <Video />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
