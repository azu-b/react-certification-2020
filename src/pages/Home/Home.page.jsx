import React from 'react';
import { Title, Subtitle } from './Home.styled';
import youtube from '../../utils/youtube';

const Home = () => {
  const response = youtube.get('/search', {
    params: {
      q: 'cats',
    },
  });
  console.log(response);

  return (
    <main>
      <Title>React Certification 2020</Title>
      <Subtitle>Welcome to Azu&apos;s challenge</Subtitle>
    </main>
  );
};

export default Home;
