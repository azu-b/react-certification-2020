import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  align-items: start;
  height: 90px;
`;

const Thumbnail = styled.img`
  width: 120px;
  height: 90px;
`;

const Title = styled.h3`
  color: black;
`;

export { Container, Item, Thumbnail, Title };
