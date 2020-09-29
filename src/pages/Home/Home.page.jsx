import React from 'react';
import Navbar from '../../components/Navbar';
import { Container, Title } from './Home.styled';
import SearchResults from '../../components/SearchResults';
import mockVideos from '../../components/VideoList/mock';
// import youtube from '../../utils/youtube';

const Home = () => {
  // const getSearchResults = async () => {
  //   try {
  //     const response = await youtube.get('/search', {
  //       params: {
  //         q: 'cats',
  //       },
  //     });
  //     console.log(response.data.items);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // getSearchResults();

  return (
    <>
      <Navbar />
      <Container>
        <Title>Welcome to Azu&apos;s React Certification Challenge 2020</Title>
        <SearchResults videos={mockVideos} />
      </Container>
    </>
  );
};

export default Home;
