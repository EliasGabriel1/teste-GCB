import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
});

export const Background = styled.div`
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 100vh;
    height: 100vh;
    ${customMedia.lessThan("mobile")`
        background-size: 47vh;
    `};   
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


export const Container = styled.div`
  max-width:1200px;
  margin: 0 auto; 
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: start;
  ${customMedia.lessThan("mobile")`
    align-items: flex-end;
    height: 58vh;
    margin-bottom:60px;
  `};   
`;