import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import Home from '../../pages/Home';
import Video from '../../pages/Video';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/:id" component={Video} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
