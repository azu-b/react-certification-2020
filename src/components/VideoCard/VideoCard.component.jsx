import React from 'react';
import { Card, Thumbnail, Title, Description } from './VideoCard.styled';

const VideoCard = (props) => {
  const { thumbnail, title, description } = props;
  return (
    <Card>
      <Thumbnail src={thumbnail} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default VideoCard;
