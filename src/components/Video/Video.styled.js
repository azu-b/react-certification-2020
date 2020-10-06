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

  @media (min-width: 1440px) {
    height: 600px;
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
  max-height: 200px;
  overflow-y: scroll;
  white-space: pre-wrap;
`;

const Error = styled.h2`
  font-family: 'Folks Normal';
  color: #9c0000;
  padding: 10px;
`;

const FavoriteButton = styled.button`
  font-size: 16px;
  font-family: 'Heebo Medium';
  background-color: ${(props) => (props.add ? '#00a541' : '#e27800')};
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

export { Container, VideoContainer, Title, Description, Error, FavoriteButton };
