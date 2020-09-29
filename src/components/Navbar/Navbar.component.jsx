import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import useOutsideClick from '../../utils/hooks/useOutsideClick';
import {
  Container,
  SearchContainer,
  SearchBar,
  Menu,
  MenuItem,
  OpenMenu,
  HamburgerButton,
} from './Navbar.styled';
import { HamburgerIcon, SearchIcon } from '../Icons';

const Navbar = () => {
  const openMenuRef = useRef();
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const menuItems = (
    <>
      <MenuItem>
        <Link to="/">Home</Link>
      </MenuItem>
      <MenuItem>Log In</MenuItem>
    </>
  );

  useOutsideClick(openMenuRef, () => {
    toggleMenu();
  });

  return (
    <>
      {isOpen && <OpenMenu ref={openMenuRef}>{menuItems}</OpenMenu>}
      <Container>
        <HamburgerButton onClick={toggleMenu}>
          <HamburgerIcon />
        </HamburgerButton>
        <Menu>{menuItems}</Menu>
        <SearchContainer>
          <SearchBar />
          <SearchIcon />
        </SearchContainer>
      </Container>
    </>
  );
};

export default Navbar;
