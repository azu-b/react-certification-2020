import React from 'react';
import {
  Container,
  Item,
  Thumbnail,
  Title,
  RelatedVideosTitle,
  VideosContainer,
} from './VideoList.styled';

const VideoList = (props) => {
  const { videos } = props;

  return (
    <Container>
      <RelatedVideosTitle>Related Videos</RelatedVideosTitle>
      <VideosContainer>
        {videos.map((video) => {
          const { id, title, thumbnails } = video;
          const { default: defaultThumbnail } = thumbnails;
          const { url } = defaultThumbnail;

          return (
            <Item key={id}>
              <Thumbnail src={url} />
              <Title>{title}</Title>
            </Item>
          );
        })}
      </VideosContainer>
    </Container>
  );
};

export default VideoList;
