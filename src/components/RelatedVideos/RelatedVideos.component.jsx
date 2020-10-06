import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Item,
  Thumbnail,
  Title,
  RelatedVideosTitle,
  VideosContainer,
  Error,
} from './RelatedVideos.styled';

const RelatedVideos = (props) => {
  const { videos } = props;

  return videos ? (
    <Container>
      <RelatedVideosTitle>Related Videos</RelatedVideosTitle>
      <VideosContainer data-testid="video-list">
        {videos.map((video) => {
          const { id, title, thumbnails } = video;
          const { default: defaultThumbnail } = thumbnails;
          const { url } = defaultThumbnail;

          return (
            <Link data-testid="link" key={id} to={`/${id}`}>
              <Item data-testid="video-item">
                <Thumbnail data-testid="thumbnail" src={url} />
                <Title data-testid="title">{title}</Title>
              </Item>
            </Link>
          );
        })}
      </VideosContainer>
    </Container>
  ) : (
    // eslint-disable-next-line jsx-a11y/accessible-emoji
    <Error>No related videos were found 😨</Error>
  );
};

export default RelatedVideos;
