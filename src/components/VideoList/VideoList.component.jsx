import React from 'react';
import { Link } from 'react-router-dom';
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
  // const history = useHistory();

  return (
    <Container>
      <RelatedVideosTitle>Related Videos</RelatedVideosTitle>
      <VideosContainer>
        {videos.map((video) => {
          const { id, title, thumbnails } = video;
          const { default: defaultThumbnail } = thumbnails;
          const { url } = defaultThumbnail;

          return (
            <Link key={id} to={`/${id}`}>
              <Item>
                <Thumbnail src={url} />
                <Title>{title}</Title>
              </Item>
            </Link>
          );
        })}
      </VideosContainer>
    </Container>
  );
};

export default VideoList;
