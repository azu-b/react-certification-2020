import React from 'react';
import { Router, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

const renderWithRouterMatch = (
  ui,
  {
    path = '/',
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => {
  return {
    ...render(
      <Router history={history}>
        <Route path={path} component={ui} />
      </Router>
    ),
  };
};

const cleanYouTubeResponse = (videos) => {
  const cleanedVideos = videos.map((video) => {
    return {
      id: video?.id?.videoId || '',
      title: video?.snippet?.title || '',
      description: video?.snippet?.description || '',
      thumbnails: video?.snippet?.thumbnails || '',
    };
  });

  return cleanedVideos;
};

const storage = {
  get(key) {
    try {
      const rawValue = window.localStorage.getItem(key);
      return JSON.parse(rawValue);
    } catch (error) {
      console.error(`Error parsing storage item "${key}".`);
      return null;
    }
  },

  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
};

export { renderWithRouterMatch, cleanYouTubeResponse, storage };
