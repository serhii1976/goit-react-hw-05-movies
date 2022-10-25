import styled from 'styled-components';

export const Main = styled.main`
  padding: 20px;
`;
export const Button = styled.button`
  padding: 5px;
  margin-bottom: 20px;
  width: 150px;
  font-size: 18px;
  color: #551a8a;
  :hover {
    color: red;
  }
`;
export const Section = styled.div`
  display: flex;
`;
export const Image = styled.img`
  height: 100%;
  margin-right: 20px;
`;
export const Title = styled.h2`
  font-weight: bold;
  font-size: 36px;
`;
export const Text = styled.p`
  font-size: 20px;
`;
export const List = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  & li {
    margin-right: 10px;
  }
`;
export const Div = styled.div`
  margin-top: 10px;
  padding-left: 10px;
  border: 1px solid gray;
`;
export const Item = styled.li`
  & a:hover {
    color: blue;
  }
`;
