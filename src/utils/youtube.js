import axios from 'axios';
import YOUTUBE_API_KEY from './env';

const YouTubeAPI = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'id,snippet',
    key: YOUTUBE_API_KEY,
  },
});

const cleanYouTubeResponse = (videos) => {
  const cleanedVideos = videos.map((video) => {
    return {
      id: video?.id?.videoId || '',
      title: video?.snippet?.title || '',
      description: video?.snippet?.description || '',
      thumbnails: video?.snippet?.thumbnails || '',
    };
  });

  return cleanedVideos;
};

export { YouTubeAPI, cleanYouTubeResponse };
