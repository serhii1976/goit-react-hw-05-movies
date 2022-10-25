import styled from 'styled-components';

export const Section = styled.div`
  padding: 30px;
`;
export const Form = styled.form`
  & input {
    width: 300px;
    font-size: 20px;
    padding: 5px;
  }
  & button {
    font-size: 20px;
    padding: 5px;
  }
`;
export const Li = styled.li`
  margin-bottom: 10px;
  font-size: 20px;
  & a:hover {
    color: blue;
  }
`;
