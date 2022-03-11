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
    max-width: 1300px;
    margin: 0 auto;
    padding-top: 10px;
    
  ${customMedia.lessThan("mobile")`
        display:none;
  `};   
`;