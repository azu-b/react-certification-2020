import React from 'react';
import { Container, VideoContainer, Title, Description, Error } from './Video.styled';

const Video = (props) => {
  const { id, title, description } = props || null;

  return id && title && description ? (
    <Container>
      <VideoContainer data-testid="video" src={`https://www.youtube.com/embed/${id}`} />
      <Title data-testid="title">{title}</Title>
      <Description data-testid="description">{description}</Description>
    </Container>
  ) : (
    <Error>No video information was provided</Error>
  );
};

export default Video;
