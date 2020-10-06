import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchContext from '../state/SearchContext';
import Home from '../pages/Home';
import Video from '../pages/Video';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('cats');

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/:id" component={Video} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </SearchContext.Provider>
  );
};

export default App;
