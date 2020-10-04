import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoComponent from '../../components/Video';
import VideoList from '../../components/VideoList';
import { Container, VideoContainer, RelatedVideosContainer } from './Video.styled';
import { YouTubeAPI, cleanYouTubeResponse } from '../../utils/youtube';

const Video = () => {
  const { id: videoId } = useParams();
  const [video, setVideo] = useState(undefined);
  const [relatedVideos, setRelatedVideos] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getVideoInfo = async () => {
      try {
        const response = await YouTubeAPI.get('/videos', {
          params: {
            id: videoId,
          },
        });
        const cleanVideos = cleanYouTubeResponse(response.data.items);
        console.log(cleanVideos);
        setVideo(cleanVideos[0]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    const getRelatedVideos = async () => {
      try {
        const response = await YouTubeAPI.get('/search', {
          params: {
            relatedToVideoId: videoId,
            type: 'video',
            maxResults: 25,
          },
        });
        const cleanVideos = cleanYouTubeResponse(response.data.items);
        setRelatedVideos(cleanVideos);
      } catch (error) {
        console.log(error);
      }
    };

    getVideoInfo();
    getRelatedVideos();
  }, [videoId]);

  return (
    <Container>
      {isLoading && <div>Loading video info...</div>}
      {video ? (
        <VideoContainer>
          <VideoComponent
            id={videoId}
            title={video.title}
            description={video.description}
          />
        </VideoContainer>
      ) : (
        <div>Ups! No video with this id found</div>
      )}
      {relatedVideos && (
        <RelatedVideosContainer>
          <VideoList videos={relatedVideos} />
        </RelatedVideosContainer>
      )}
    </Container>
  );
};

export default Video;
