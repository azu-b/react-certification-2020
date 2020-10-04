import styled from 'styled-components';

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  padding: 10px;

  @media (min-width: 1024px) {
    width: 60%;
    padding: 20px;
  }
`;

const RelatedVideosContainer = styled.div`
  width: 100%;
  padding: 10px;

  @media (min-width: 1024px) {
    width: 40%;
    padding: 20px;
  }
`;

export { Container, VideoContainer, RelatedVideosContainer };
