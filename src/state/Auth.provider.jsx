import React, { useEffect, useState, useCallback } from 'react';
import { AuthContext } from './Auth.context';
import { AUTH_STORAGE_KEY, USER_STORAGE_KEY } from '../utils/constants';
import { storage } from '../utils/helpers';

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);

    const lastUserState = storage.get(USER_STORAGE_KEY);
    const parsedUserState = Object(lastUserState);

    setAuthenticated(isAuthenticated);
    setUser(parsedUserState);
  }, []);

  const login = useCallback((userInfo) => {
    setAuthenticated(true);
    setUser(userInfo);
    storage.set(AUTH_STORAGE_KEY, true);
    storage.set(USER_STORAGE_KEY, userInfo);
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    setUser({});
    storage.set(AUTH_STORAGE_KEY, false);
    storage.set(USER_STORAGE_KEY, {});
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
