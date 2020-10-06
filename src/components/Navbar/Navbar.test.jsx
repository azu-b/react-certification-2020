import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import pretty from 'pretty';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './index';
import { AuthProvider } from '../../state';

describe('<Navbar>', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders', () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthProvider>
    );
    const wrapper = screen.getByTestId('container');
    const hamburger = screen.getByTestId('hamburger');
    const menu = screen.getByTestId('menu');
    const search = screen.getByTestId('search');

    expect(wrapper.tagName).toBe('DIV');
    expect(hamburger.innerHTML).toMatch('<svg');
    expect(menu.children).toHaveLength(2);
    expect(search.innerHTML).toMatch('<input');
    expect(search.innerHTML).toMatch('<svg');
  });

  it('matches snapshot', () => {
    const { container } = render(
      <AuthProvider>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthProvider>
    );
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it('opens the mobile menu when hamburger button is clicked', () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthProvider>
    );

    expect(() => {
      screen.getByTestId('mobile-menu');
    }).toThrow();

    const hamburger = screen.getByTestId('hamburger');
    fireEvent.click(hamburger);
    const mobileMenu = screen.getByTestId('mobile-menu');

    expect(mobileMenu.tagName).toBe('DIV');
    expect(mobileMenu.children).toHaveLength(2);
  });

  it('closes the mobile menu when clicked outside of it', () => {
    const onClick = jest.fn();

    render(
      <AuthProvider>
        <MemoryRouter>
          <button type="button" onClick={onClick}>
            Outside
          </button>
          <Navbar />
        </MemoryRouter>
      </AuthProvider>
    );

    const hamburger = screen.getByTestId('hamburger');
    fireEvent.click(hamburger);
    const mobileMenu = screen.getByTestId('mobile-menu');
    expect(mobileMenu.tagName).toBe('DIV');

    const button = screen.getByText('Outside');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);

    expect(() => {
      screen.getByTestId('mobile-menu');
    }).toThrow();
  });
});
