import React from 'react';
import { Title, Subtitle } from './Home.styled';
import Video from '../../components/Video';
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
    <main>
      <Title>React Certification 2020</Title>
      <Subtitle>Welcome to Azu&apos;s challenge</Subtitle>
      <Video
        id="hY7m5jjJ9mM"
        title="CATS will make you LAUGH YOUR HEAD OFF - Funny CAT compilation"
        description="Cats are amazing creatures because they make us laugh all the time! Watching funny cats is the hardest try not to laugh challenge! Just look how all these cats ..."
      />
    </main>
  );
};

export default Home;
