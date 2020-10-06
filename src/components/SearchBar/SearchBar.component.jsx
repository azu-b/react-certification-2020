import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import SearchContext from '../../state/SearchContext';
import { Container, SearchInput, SearchButton } from './SearchBar.styled';
import { SearchIcon } from '../../icons';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState(searchTerm);
  const history = useHistory();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(inputValue);
    history.push('/');
  };

  return (
    <Container data-testid="search" onSubmit={handleSubmit}>
      <SearchInput value={inputValue} onChange={handleInputChange} />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </Container>
  );
};

export default SearchBar;
