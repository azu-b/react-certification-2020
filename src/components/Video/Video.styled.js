import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoContainer = styled.iframe`
  width: 100%;
  height: 250px;

  @media (min-width: 768px) {
    height: 500px;
  }
`;

const Title = styled.h1`
  margin: 10px;
  font-family: 'Folks Normal';
  font-size: 36px;
  color: #330080;
`;

const Description = styled.p`
  margin: 10px;
  font-family: 'Heebo Light';
  color: grey;
  height: 200px;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export { Container, VideoContainer, Title, Description };
