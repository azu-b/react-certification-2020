import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { useHistory } from 'react-router-dom';
import pretty from 'pretty';
import { SearchContext } from '../../state';
import SearchBar from './index';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(() => {
      return {
        push: jest.fn((relativePath) => {
          console.log(`I'm pushing "${relativePath}" to history`);
        }),
      };
    }),
  };
});

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

    const form = screen.getByTestId('search');
    const input = form.children[0];
    const button = form.children[1];

    expect(form.tagName).toBe('FORM');
    expect(input.tagName).toBe('INPUT');
    expect(button.tagName).toBe('BUTTON');
    expect(input.outerHTML).toMatch(contextValue.searchTerm);
  });

  it('matches snapshot', () => {
    const { container } = render(
      <SearchContext.Provider value={contextValue}>
        <SearchBar />
      </SearchContext.Provider>
    );

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it('runs the setSearchTerm when the form is submitted', () => {
    render(
      <SearchContext.Provider value={contextValue}>
        <SearchBar />
      </SearchContext.Provider>
    );
    expect(useHistory).toHaveBeenCalledTimes(1);

    const form = screen.getByTestId('search');
    const input = screen.getByDisplayValue(contextValue.searchTerm);

    fireEvent.change(input, { target: { value: 'cats' } });
    fireEvent.submit(form);

    expect(useHistory).toHaveBeenCalledTimes(2);
  });
});
