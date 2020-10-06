import React from 'react';
import {
  Container,
  VideoContainer,
  Title,
  Description,
  Error,
  FavoriteButton,
} from './Video.styled';

const Video = (props) => {
  const { id, title, description, authenticated = true } = props || null;
  const action = (isFavorite) => (!isFavorite ? 'Remove from' : 'Add to');

  return id && title && description ? (
    <Container>
      <VideoContainer data-testid="video" src={`https://www.youtube.com/embed/${id}`} />
      <Title data-testid="title">{title}</Title>
      <Description data-testid="description">{description}</Description>
      {authenticated && <FavoriteButton add>{action(false)} Favorites</FavoriteButton>}
    </Container>
  ) : (
    <Error>No video information was provided</Error>
  );
};

export default Video;
