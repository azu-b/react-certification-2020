import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import pretty from 'pretty';
import { AuthProvider } from '../../state';
import Video from './index';

describe('<Video>', () => {
  const props = {
    id: 'uE-1RPDqJAY',
    title: 'taking the hobbits to isengard',
    description: `THEY"RE TAKING THE HOBBITS TO ISENGARD

      (not my work)`,
  };

  afterEach(() => {
    cleanup();
  });

  it('renders', () => {
    render(
      <AuthProvider>
        <Video {...props} />
      </AuthProvider>
    );
    const video = screen.getByTestId('video');
    const title = screen.getByTestId('title');
    const description = screen.getByTestId('description');

    expect(video.tagName).toBe('IFRAME');
    expect(title.tagName).toBe('H1');
    expect(description.tagName).toBe('P');
  });

  it('matches snapshot', () => {
    const { container } = render(
      <AuthProvider>
        <Video {...props} />
      </AuthProvider>
    );
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it('renders an error message when no id, title nor description props are provided', () => {
    const { container } = render(
      <AuthProvider>
        <Video />
      </AuthProvider>
    );
    expect(container.innerHTML).toMatch('No video information was provided');
  });
});
