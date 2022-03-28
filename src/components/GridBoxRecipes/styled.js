import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
});

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;;
    grid-gap: 35px;
    ${customMedia.lessThan("mobile")`
        grid-template-columns: 1fr;
    `};
`;