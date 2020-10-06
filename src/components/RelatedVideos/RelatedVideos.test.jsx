import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import pretty from 'pretty';
import RelatedVideos from './index';
import searchResponse from '../../mocks/searchResponse';
import { cleanYouTubeResponse } from '../../utils/helpers';

describe('<RelatedVideos>', () => {
  const cleanSearchResponse = cleanYouTubeResponse(searchResponse.items);
  const mockResponseLength = cleanSearchResponse.length;

  afterEach(() => {
    cleanup();
  });

  it('renders', () => {
    render(
      <MemoryRouter>
        <RelatedVideos videos={cleanSearchResponse} />
      </MemoryRouter>
    );

    const title = screen.getByText('Related Videos');
    expect(title.tagName).toBe('H2');

    const links = screen.queryAllByTestId('link');
    expect(links[0].tagName).toBe('A');
    expect(links).toHaveLength(mockResponseLength);

    const videoItems = screen.queryAllByTestId('video-item');
    expect(videoItems[0].tagName).toBe('DIV');
    expect(videoItems).toHaveLength(mockResponseLength);

    const thumbnails = screen.queryAllByTestId('thumbnail');
    expect(thumbnails[0].tagName).toBe('IMG');
    expect(thumbnails).toHaveLength(mockResponseLength);

    const titles = screen.queryAllByTestId('title');
    expect(titles[0].tagName).toBe('H4');
    expect(titles).toHaveLength(mockResponseLength);
  });

  it('matches snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <RelatedVideos videos={cleanSearchResponse} />
      </MemoryRouter>
    );

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it('renders an error message when no videos prop is provided', () => {
    const { container } = render(
      <MemoryRouter>
        <RelatedVideos />
      </MemoryRouter>
    );

    expect(container.innerHTML).toMatch('No related videos were found');
  });
});
