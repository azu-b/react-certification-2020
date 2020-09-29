import React from 'react';
import { Container, SearchContainer, SearchBar, Menu, MenuItem } from './Navbar.styled';
import { HamburgerIcon, SearchIcon } from '../Icons';

const Navbar = () => (
  <Container>
    <Menu>
      <HamburgerIcon />
      <MenuItem>Home</MenuItem>
      <MenuItem>Log In</MenuItem>
    </Menu>
    <SearchContainer>
      <SearchBar />
      <SearchIcon />
    </SearchContainer>
  </Container>
);

export default Navbar;
