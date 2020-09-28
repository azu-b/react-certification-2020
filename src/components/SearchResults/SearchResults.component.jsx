import React from 'react';
import VideoCard from '../VideoCard';
import { Container } from './SearchResults.styled';

const SearchResults = (props) => {
  const { videos } = props;
  return (
    <Container>
      {videos.map((video) => {
        const { id, snippet } = video;
        const { videoId } = id;
        const { title, description, thumbnails } = snippet;
        const { medium } = thumbnails;
        const { url } = medium;
        return (
          <VideoCard
            key={videoId}
            title={title}
            description={description}
            thumbnail={url}
          />
        );
      })}
    </Container>
  );
};

export default SearchResults;
