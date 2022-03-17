import styled from 'styled-components';

export const Container = styled.div`
  max-width:1200px;
  margin: 0 auto; 
  height: 90vh;
  display: flex;
  align-items: center;
`;

export const BoxDados = styled.div`
  max-width:500px;
  display:flex;
  flex-direction:column;
  gap: 25px;
  h1{
    font-size: 50px;
    line-height: 125%;
  }
`;