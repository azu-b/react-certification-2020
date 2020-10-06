/* eslint-disable react/no-array-index-key */
import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../state';
import useOutsideClick from '../../utils/hooks/useOutsideClick';
import SearchBar from '../SearchBar';
import {
  Container,
  Menu,
  MenuItem,
  OpenMenu,
  HamburgerButton,
  Welcome,
} from './Navbar.styled';
import { HamburgerIcon } from '../../icons';

const Navbar = () => {
  const openMenuRef = useRef();
  const [isOpen, setOpen] = useState(false);
  const history = useHistory();
  const { authenticated, user, logout } = useAuth();

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const logOut = (event) => {
    event.preventDefault();
    setOpen(false);
    logout();
    history.push('/');
  };

  const isLogin = authenticated
    ? [
        {
          name: 'Favorites',
          link: '/favorites',
        },
        {
          name: 'Log Out',
          link: '/',
          onClick: logOut,
        },
      ]
    : [
        {
          name: 'Log In',
          link: '/login',
        },
      ];

  const menuItems = [{ name: 'Home', link: '/' }].concat(isLogin);

  const welcomeUser = authenticated && user && user.name && (
    <Welcome>Hello {user.name}!</Welcome>
  );

  const mobileMenu = (
    <OpenMenu data-testid="mobile-menu" ref={openMenuRef}>
      {welcomeUser}
      {menuItems.map((item, index) => {
        const { name, link, onClick = toggleMenu } = item;
        return (
          <MenuItem key={index}>
            <Link to={link} onClick={onClick}>
              {name}
            </Link>
          </MenuItem>
        );
      })}
    </OpenMenu>
  );

  const tabletMenu = (
    <Menu data-testid="menu">
      {welcomeUser}
      {menuItems.map((item, index) => {
        const { name, link, onClick = () => {} } = item;
        return (
          <MenuItem key={index}>
            <Link to={link} onClick={onClick}>
              {name}
            </Link>
          </MenuItem>
        );
      })}
    </Menu>
  );

  useOutsideClick(openMenuRef, () => {
    toggleMenu();
  });

  return (
    <>
      {isOpen && mobileMenu}
      <Container data-testid="container">
        <HamburgerButton data-testid="hamburger" onClick={toggleMenu}>
          <HamburgerIcon />
        </HamburgerButton>
        {tabletMenu}
        <SearchBar data-testid="search" />
      </Container>
    </>
  );
};

export default Navbar;
