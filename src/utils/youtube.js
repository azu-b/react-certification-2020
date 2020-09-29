import axios from 'axios';
import YOUTUBE_API_KEY from './env';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'id,snippet',
    key: YOUTUBE_API_KEY,
  },
});
