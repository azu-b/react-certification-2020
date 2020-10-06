import React from 'react';
import { useAuth } from '../../state';
import {
  Container,
  VideoContainer,
  Title,
  Description,
  Error,
  FavoriteButton,
} from './Video.styled';

const Video = (props) => {
  const { id, title, description } = props || null;
  const { authenticated } = useAuth();
  const action = (isFavorite) => (!isFavorite ? 'Remove from' : 'Add to');

  return id && title && description ? (
    <Container>
      <VideoContainer data-testid="video" src={`https://www.youtube.com/embed/${id}`} />
      <Title data-testid="title">{title}</Title>
      <Description data-testid="description">{description}</Description>
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      {authenticated && <FavoriteButton add>🚧 {action(false)} Favorites</FavoriteButton>}
    </Container>
  ) : (
    <Error>No video information was provided</Error>
  );
};

export default Video;
