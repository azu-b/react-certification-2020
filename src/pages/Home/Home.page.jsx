/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react';
import SearchResults from '../../components/SearchResults';
import { Container, Title, Load, Error } from './Home.styled';
import { homeTitle, buildTitle } from '../../utils/pagesTitles';
import YouTubeAPI from '../../utils/youtube';
import { cleanYouTubeResponse } from '../../utils/helpers';

const Home = () => {
  const [videos, setVideos] = useState(undefined);
  const [isLoading, setLoading] = useState(true);

  document.title = buildTitle(homeTitle);

  useEffect(() => {
    const getSearchResults = async () => {
      try {
        const response = await YouTubeAPI.get('/search', {
          params: {
            q: 'cats',
            type: 'video',
            maxResults: 30,
          },
        });
        const cleanVideos = cleanYouTubeResponse(response.data.items);
        setVideos(cleanVideos);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };

    getSearchResults();
  }, []);

  return (
    <Container>
      <Title>🚧 Work in progress: Azu&apos;s React Certification Challenge</Title>
      {isLoading && <Load>Loading search results ⏰</Load>}
      {!isLoading &&
        (videos ? (
          <SearchResults videos={videos} />
        ) : (
          <Error>Ups! Something went wrong 😨</Error>
        ))}
    </Container>
  );
};

export default Home;
