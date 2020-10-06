import React from 'react';
import { cleanup, act, screen } from '@testing-library/react';
import pretty from 'pretty';
import { AuthProvider } from '../../state';
import Video from './index';
import YouTubeAPI from '../../utils/youtube';
import { renderWithRouterMatch } from '../../utils/helpers';
import searchResponse from '../../mocks/searchResponse';

jest.mock('../../utils/youtube');

describe('<VideoPage>', () => {
  const VideoWithAuthProvider = () => (
    <AuthProvider>
      <Video />
    </AuthProvider>
  );

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('renders', async () => {
    YouTubeAPI.get.mockImplementation(() => Promise.resolve({ data: searchResponse }));

    await act(async () => {
      renderWithRouterMatch(VideoWithAuthProvider, {
        route: '/123',
        path: '/:id',
      });
    });

    const video = screen.getByTestId('video');
    const description = screen.getByTestId('description');
    const titles = screen.getAllByTestId('title');
    const links = screen.getAllByTestId('link');
    const thumbnails = screen.getAllByTestId('thumbnail');
    const relatedVideosTitle = screen.getByText('Related Videos');

    expect(video.tagName).toBe('IFRAME');
    expect(description.tagName).toBe('P');
    expect(titles).toHaveLength(searchResponse.items.length + 1);
    expect(links).toHaveLength(searchResponse.items.length);
    expect(thumbnails).toHaveLength(searchResponse.items.length);
    expect(titles[0].tagName).toBe('H1');
    expect(titles[1].tagName).toBe('H4');
    expect(links[0].tagName).toBe('A');
    expect(thumbnails[0].tagName).toBe('IMG');
    expect(relatedVideosTitle.tagName).toBe('H2');
  });

  it('matches snapshot', async () => {
    YouTubeAPI.get.mockImplementation(() => Promise.resolve({ data: searchResponse }));

    let wrapper;

    await act(async () => {
      wrapper = renderWithRouterMatch(VideoWithAuthProvider, {
        route: '/123',
        path: '/:id',
      });
    });

    expect(pretty(wrapper.container.innerHTML)).toMatchSnapshot();
  });

  it('renders an error message when video id is invalid', async () => {
    YouTubeAPI.get.mockImplementationOnce(() =>
      Promise.reject(new Error('Video ID is invalid'))
    );

    let wrapper;

    await act(async () => {
      wrapper = renderWithRouterMatch(VideoWithAuthProvider, {
        route: '/invalid',
        path: '/:id',
      });
    });

    expect(wrapper.container.innerHTML).toMatch('Ups! No video with this id was found');
  });

  it('renders an error message when there are no related videos found', async () => {
    YouTubeAPI.get
      .mockImplementationOnce(() => Promise.resolve({ data: searchResponse }))
      .mockImplementationOnce(() => Promise.reject(new Error('No related videos found')));

    let wrapper;

    await act(async () => {
      wrapper = renderWithRouterMatch(VideoWithAuthProvider, {
        route: '/123',
        path: '/:id',
      });
    });

    expect(wrapper.container.innerHTML).toMatch('No related videos were found');
  });
});
