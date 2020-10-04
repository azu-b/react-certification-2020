import React from 'react';
import { render } from '@testing-library/react';
import Video from './index';

describe('<Video>', () => {
  const props = {
    id: 'uE-1RPDqJAY',
    title: 'taking the hobbits to isengard',
    description: `THEY"RE TAKING THE HOBBITS TO ISENGARD

      (not my work)`,
  };

  it('renders', () => {
    const { getByTestId } = render(<Video {...props} />);
    const video = getByTestId('video');
    const title = getByTestId('title');
    const description = getByTestId('description');

    expect(video.tagName).toBe('IFRAME');
    expect(title.tagName).toBe('H1');
    expect(description.tagName).toBe('P');
  });

  it('matches snapshot', () => {
    const { container } = render(<Video {...props} />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('renders a message when no props are provided', () => {
    const { container } = render(<Video />);
    expect(container.innerHTML).toMatch('No video information was provided');
  });
});
