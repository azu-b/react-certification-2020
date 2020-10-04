import React from 'react';
import { Container, Title } from './Home.styled';
// import youtube from '../../utils/youtube';

const Home = () => {
  // const [videos, setVideos] = useState([]);

  // const getSearchResults = async () => {
  //   try {
  //     const response = await youtube.get('/search', {
  //       params: {
  //         q: 'cats',
  //         maxResults: 30,
  //       },
  //     });
  //     console.log(response.data.items);
  //     setVideos(response.data.items);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // getSearchResults();

  return (
    <Container>
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      <Title>🚧 Work in progress: Azu&apos;s React Certification Challenge</Title>
    </Container>
  );
};

export default Home;
