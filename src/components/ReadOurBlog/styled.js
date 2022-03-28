import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
});

export const Container = styled.figure`
    max-width: 1200px;
    margin: 0 auto;
    padding: 48px 0 134px 0;
    ${customMedia.lessThan("mobile")`
        background-size: 47vh;
    `};   
`;