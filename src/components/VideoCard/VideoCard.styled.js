import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 320px;
  height: 320px;
  box-shadow: 2px 2px 30px -15px black;
  overflow: hidden;
  margin: 15px 0;

  @media (min-width: 768px) {
    margin: 30px;
  }

  @media (min-width: 1024px) {
    margin: 10px;
  }

  @media (min-width: 1440px) {
    margin: 20px;
  }
`;

const Thumbnail = styled.img`
  width: 320px;
  height: 180px;
`;

const Title = styled.h3`
  font-family: 'Folks Normal';
  color: black;
  padding: 10px 5px;
  margin: 0;
`;

const Description = styled.p`
  font-family: 'Heebo Light';
  color: grey;
  font-size: 13px;
  padding: 10px 5px;
  margin: 0;
`;

export { Card, Thumbnail, Title, Description };
