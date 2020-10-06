import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../state';

const ProtectedRoute = (props) => {
  const { authenticated } = useAuth();

  return authenticated ? <Route {...props} /> : <Redirect to="/login" />;
};

export default ProtectedRoute;
