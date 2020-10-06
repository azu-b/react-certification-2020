import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { SearchContext, AuthProvider } from '../state';
import Home from '../pages/Home';
import Video from '../pages/Video';
import LogIn from '../pages/LogIn';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('cats');

  return (
    <BrowserRouter>
      <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route path="/video/:id" component={Video} />
            <Route path="/login" component={LogIn} />
            <Route path="/" component={Home} />
          </Switch>
        </AuthProvider>
      </SearchContext.Provider>
    </BrowserRouter>
  );
};

export default App;
