import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoComponent from '../../components/Video';
import { Container } from './Video.styled';
import youtube from '../../utils/youtube';

const Video = () => {
  const { id: videoId } = useParams();
  const [video, setVideo] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getVideoInfo = async () => {
      try {
        const response = await youtube.get('/videos', {
          params: {
            id: videoId,
          },
        });
        console.log(response.data.items);
        setVideo(response.data.items[0]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getVideoInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {isLoading && <div>Loading video info...</div>}
      {video ? (
        <VideoComponent
          id={videoId}
          title={video.snippet.title}
          description={video.snippet.description}
        />
      ) : (
        <div>Ups! No video with this id found</div>
      )}
    </Container>
  );
};

export default Video;
