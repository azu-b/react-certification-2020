import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoContainer = styled.iframe`
  width: 100%;
  height: 500px;
`;

const Title = styled.h1`
  color: black;
`;

const Description = styled.p`
  color: grey;
`;

export { Container, VideoContainer, Title, Description };
