import React from 'react';
import { Title, Subtitle } from './Home.styled';
import VideoCard from '../../components/VideoCard';
// import Video from '../../components/Video';
// import VideoList from '../../components/VideoList';
// import mockVideos from '../../components/VideoList/mock';
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
      {/* <Video
        id="hY7m5jjJ9mM"
        title="CATS will make you LAUGH YOUR HEAD OFF - Funny CAT compilation"
        description="Cats are amazing creatures because they make us laugh all the time! Watching funny cats is the hardest try not to laugh challenge! Just look how all these cats ..."
      />
      <VideoList videos={mockVideos} /> */}
      <VideoCard
        title="Two Cats and 500 Balls in a Ball Pit !!"
        thumbnail="https://i.ytimg.com/vi/BwSQyuUxYfI/mqdefault.jpg"
        description="I surprised my two cats with a huge ball pit filled with 500 multi-colored balls! My cats went wild and played like crazy in that pit! My email address: ..."
      />
    </main>
  );
};

export default Home;
