import React from 'react';
import { Container, Item, Thumbnail, Title } from './VideoList.styled';

const VideoList = (props) => {
  const { videos } = props;

  return (
    <Container>
      {videos.map((video) => {
        const { snippet, id } = video;
        const { videoId } = id;
        const { title, thumbnails } = snippet;
        const { default: defaultThumbnail } = thumbnails;
        const { url } = defaultThumbnail;

        return (
          <Item key={videoId}>
            <Thumbnail src={url} />
            <Title>{title}</Title>
          </Item>
        );
      })}
    </Container>
  );
};

export default VideoList;
