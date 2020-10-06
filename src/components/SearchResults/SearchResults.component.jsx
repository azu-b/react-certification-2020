import React from 'react';
import { Link } from 'react-router-dom';
import VideoCard from '../VideoCard';
import { Container, Error } from './SearchResults.styled';

const SearchResults = (props) => {
  const { videos } = props;
  return (
    <Container>
      {videos.length > 1 ? (
        videos.map((video) => {
          const { id, title, description, thumbnails } = video;
          const { medium } = thumbnails;
          const { url } = medium;
          return (
            <Link key={id} to={`/video/${id}`}>
              <VideoCard title={title} description={description} thumbnail={url} />
            </Link>
          );
        })
      ) : (
        // eslint-disable-next-line jsx-a11y/accessible-emoji
        <Error>No results were found 😢</Error>
      )}
    </Container>
  );
};

export default SearchResults;
