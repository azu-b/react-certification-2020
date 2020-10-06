import React from 'react';
import { Container, Title } from './Favorites.styled';
import SearchResults from '../../components/SearchResults';
import { cleanYouTubeResponse } from '../../utils/helpers';
import searchResponse from '../../mocks/searchResponse';

const Favorites = () => {
  const cleanVideos = cleanYouTubeResponse(searchResponse.items);
  return (
    <Container>
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      <Title>🚧 Favorite Videos</Title>
      <SearchResults videos={cleanVideos} />
    </Container>
  );
};

export default Favorites;
