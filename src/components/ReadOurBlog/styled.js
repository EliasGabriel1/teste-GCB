import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
});

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 48px 0 134px 0;
    ${customMedia.lessThan("mobile")`
        background-size: 47vh;
    `};   
`;

export const ContainerText = styled.div`
  margin: 25px 0;
  text-align: center;
  ${customMedia.lessThan("mobile")`
    padding: 0 10px;
  `};   
  h3{
    margin-bottom: 20px;
    font-size: 23px;
  }
  p{
    line-height: 140%;
  }
`;