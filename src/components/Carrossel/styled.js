import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
});

export const Carrossel = styled.div`
    display: flex;
    justify-content: space-between;
    ${customMedia.lessThan("mobile")`
        
    `};
`;