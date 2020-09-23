import React from 'react';
import { Container, VideoContainer, Title, Description } from './Video.styled';

const Video = (props) => {
  const { id, title, description } = props;

  return (
    <Container>
      <VideoContainer src={`https://www.youtube.com/embed/${id}`} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default Video;
