import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
});

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    height: 10vh;
    display: flex;
    align-items: center;
    
  ${customMedia.lessThan("mobile")`
        display:none;
  `};   
`;