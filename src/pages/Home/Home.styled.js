import styled from 'styled-components';

export const Section = styled.div`
  padding-left: 50px;
`;

export const Title = styled.p`
  font-size: 34px;
  font-weight: bold;
  padding-left: 20px;
`;

export const Li = styled.li`
  margin-bottom: 10px;
  font-size: 20px;
  & a:hover {
    color: blue;
  }
`;
