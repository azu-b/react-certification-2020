import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import VideoComponent from '../../components/Video';
import { Container } from './Video.styled';
import youtube from '../../utils/youtube';

const Video = () => {
  const { id: videoId } = useParams();
  const [video, setVideo] = useState(undefined);

  const getVideoInfo = async () => {
    try {
      const response = await youtube.get('/videos', {
        params: {
          id: videoId,
        },
      });
      console.log(response.data.items[0]);
      setVideo(response.data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  getVideoInfo();

  return (
    <Container>
      {video ? (
        <Video
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
