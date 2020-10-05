import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './index';

describe('<Navbar>', () => {
  it('renders', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
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
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('opens the mobile menu when hamburger button is clicked', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
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
      <MemoryRouter>
        <button type="button" onClick={onClick}>
          Outside
        </button>
        <Navbar />
      </MemoryRouter>
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
