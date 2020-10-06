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

const Error = styled.div`
  font-family: 'Folks Normal';
  color: #9c0000;
  font-size: 32px;
  margin: 20px;

  @media (min-width: 768px) {
    font-size: 36px;
    margin: 20px auto;
  }
`;

const Load = styled.div`
  font-family: 'Heebo Regular';
  color: #0093ff;
  font-size: 28px;
  margin: 20px;

  @media (min-width: 768px) {
    font-size: 32px;
    margin: 20px auto;
  }
`;

const LoadRelated = styled(Load)`
  font-size: 20px;
  margin: 10px;

  @media (min-width: 768px) {
    font-size: 24px;
    margin: 10px auto;
  }
`;

export { Container, VideoContainer, RelatedVideosContainer, Error, Load, LoadRelated };
