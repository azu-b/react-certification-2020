/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoComponent from '../../components/Video';
import RelatedVideos from '../../components/RelatedVideos';
import {
  Container,
  VideoContainer,
  RelatedVideosContainer,
  Error,
  Load,
  LoadRelated,
} from './Video.page.styled';
import YouTubeAPI from '../../utils/youtube';
import { cleanYouTubeResponse } from '../../utils/helpers';

const Video = () => {
  const { id: videoId } = useParams();
  const [video, setVideo] = useState(undefined);
  const [relatedVideos, setRelatedVideos] = useState(undefined);
  const [isLoadingVideoInfo, setIsLoadingVideoInfo] = useState(true);
  const [isLoadingRelatedVideos, setIsLoadingRelatedVideos] = useState(true);

  useEffect(() => {
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
        setIsLoadingRelatedVideos(false);
      } catch (error) {
        console.log(error.message);
        setIsLoadingRelatedVideos(false);
      }
    };

    const getVideoInfo = async () => {
      try {
        const response = await YouTubeAPI.get('/videos', {
          params: {
            id: videoId,
          },
        });
        const cleanVideos = cleanYouTubeResponse(response.data.items);
        setVideo(cleanVideos[0]);
        setIsLoadingVideoInfo(false);
        getRelatedVideos();
      } catch (error) {
        console.log(error.message);
        setIsLoadingVideoInfo(false);
      }
    };

    getVideoInfo();
  }, [videoId]);

  return (
    <Container>
      {isLoadingVideoInfo && <Load>Loading video info 👀</Load>}
      {!isLoadingVideoInfo &&
        (video ? (
          <>
            <VideoContainer>
              <VideoComponent
                id={videoId}
                title={video.title}
                description={video.description}
              />
            </VideoContainer>
            <RelatedVideosContainer>
              {isLoadingRelatedVideos && (
                <LoadRelated>Loading related videos ⏰</LoadRelated>
              )}
              {!isLoadingRelatedVideos && <RelatedVideos videos={relatedVideos} />}
            </RelatedVideosContainer>
          </>
        ) : (
          <Error>Ups! No video with this id was found 😰</Error>
        ))}
    </Container>
  );
};

export default Video;
