import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
// import pretty from 'pretty';
import SearchContext from '../../state/SearchContext';
import SearchBar from './index';

describe('<SearchBar>', () => {
  const contextValue = {
    searchTerm: 'dogs',
    setSearchTerm: (inputValue) => console.log('search term', inputValue),
  };

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('renders', () => {
    render(
      <SearchContext.Provider value={contextValue}>
        <SearchBar />
      </SearchContext.Provider>
    );
    screen.debug();
  });
});
