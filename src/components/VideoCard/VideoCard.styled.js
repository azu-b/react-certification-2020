import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 320px;
  height: 320px;
  border: 1px solid grey;
  overflow-y: hidden;
  margin: 15px;
`;

const Thumbnail = styled.img`
  width: 320px;
  height: 180px;
`;

const Title = styled.h3`
  color: black;
  padding: 10px 5px;
  margin: 0;
`;

const Description = styled.p`
  color: grey;
  font-size: 13px;
  padding: 10px 5px;
  margin: 0;
`;

export { Card, Thumbnail, Title, Description };
