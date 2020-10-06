/* eslint-disable react/no-array-index-key */
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import useOutsideClick from '../../utils/hooks/useOutsideClick';
import SearchBar from '../SearchBar';
import { Container, Menu, MenuItem, OpenMenu, HamburgerButton } from './Navbar.styled';
import { HamburgerIcon } from '../../icons';

const Navbar = () => {
  const openMenuRef = useRef();
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Log In', link: '/login' },
  ];

  const mobileMenu = (
    <OpenMenu data-testid="mobile-menu" ref={openMenuRef}>
      {menuItems.map(({ name, link }, index) => {
        return (
          <MenuItem key={index}>
            <Link to={link} onClick={toggleMenu}>
              {name}
            </Link>
          </MenuItem>
        );
      })}
    </OpenMenu>
  );

  const tabletMenu = (
    <Menu data-testid="menu">
      {menuItems.map(({ name, link }, index) => {
        return (
          <MenuItem key={index}>
            <Link to={link}>{name}</Link>
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
