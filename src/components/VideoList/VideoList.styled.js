import styled from 'styled-components';

const RelatedVideosTitle = styled.h2`
  font-family: 'Folks Normal';
  padding: 10px 0;
  color: black;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideosContainer = styled(Container)`
  height: 250px;
  overflow-y: scroll;

  @media (min-width: 768px) {
    height: 350px;
  }

  @media (min-width: 1024px) {
    height: 600px;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100px;
  padding: 5px 0;
  border-bottom: 1px solid #d6d6f5;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #eee6ff;
    cursor: pointer;
  }
`;

const Thumbnail = styled.img`
  width: 120px;
  height: 90px;
`;

const Title = styled.h4`
  font-family: 'Heebo Medium';
  font-size: 13px;
  color: #191966;
  margin: 5px 10px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export { Container, Item, Thumbnail, Title, RelatedVideosTitle, VideosContainer };
