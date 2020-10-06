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

  const menuItems = (
    <>
      <MenuItem>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
      </MenuItem>
      <MenuItem>Log In</MenuItem>
    </>
  );

  useOutsideClick(openMenuRef, () => {
    toggleMenu();
  });

  return (
    <>
      {isOpen && (
        <OpenMenu data-testid="mobile-menu" ref={openMenuRef}>
          {menuItems}
        </OpenMenu>
      )}
      <Container data-testid="container">
        <HamburgerButton data-testid="hamburger" onClick={toggleMenu}>
          <HamburgerIcon />
        </HamburgerButton>
        <Menu data-testid="menu">{menuItems}</Menu>
        <SearchBar data-testid="search" />
      </Container>
    </>
  );
};

export default Navbar;
