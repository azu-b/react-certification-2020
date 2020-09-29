import React from 'react';
import Navbar from '../../components/Navbar';
// import { Title, Subtitle } from './Home.styled';
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

  return <Navbar />;
};

export default Home;
