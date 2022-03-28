import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
});

export const Header = styled.header`
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 100vh;
    ${customMedia.lessThan("mobile")`
        background-size: 47vh;
    `};   
`;