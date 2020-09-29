import React from 'react';
import Navbar from '../../components/Navbar';
import { Title, Subtitle, Container } from './Home.styled';
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
        <Title>React Certification 2020</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu elit nisl. Ut
          et ultricies sem, sit amet lacinia orci. Donec finibus dignissim ullamcorper.
          Phasellus nec ante porttitor, vestibulum velit ac, fringilla ligula. Sed
          eleifend sollicitudin augue id suscipit. Suspendisse venenatis pulvinar arcu et
          ultricies. Suspendisse vestibulum faucibus nisi, quis egestas nisl sollicitudin
          eu. Suspendisse egestas euismod odio at pharetra. Suspendisse potenti. Sed sed
          arcu vel ligula facilisis elementum. Phasellus dignissim congue sapien, ut
          semper odio. In in lectus tempor, egestas est ut, pretium arcu. Quisque at
          tincidunt lorem, venenatis euismod leo. Donec non tortor sit amet diam
          condimentum consectetur eu quis sem. Nullam commodo purus et commodo aliquam.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Ut eu nibh congue ante convallis malesuada a quis massa. Nam
          pharetra condimentum quam vel lacinia. Nam vitae ante commodo est aliquam
          sodales. Aliquam hendrerit dictum nulla, mollis commodo nisl placerat ac.
          Phasellus quis velit suscipit erat hendrerit eleifend ac ut felis. Integer ut
          tellus in velit iaculis elementum sed ut lectus. In in pulvinar tortor, vitae
          venenatis orci. Donec placerat scelerisque magna, eget hendrerit sem laoreet
          bibendum. Praesent sollicitudin euismod diam a accumsan. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed in
          rutrum arcu, vel scelerisque nulla. Maecenas suscipit sagittis tempus. Quisque
          venenatis venenatis pellentesque. Fusce non hendrerit odio, id vulputate nunc.
          In pulvinar elit in lectus blandit commodo. Pellentesque facilisis pulvinar
          ullamcorper. Nulla semper feugiat pulvinar. In eleifend sapien gravida elementum
          gravida.
        </Subtitle>
      </Container>
    </>
  );
};

export default Home;
