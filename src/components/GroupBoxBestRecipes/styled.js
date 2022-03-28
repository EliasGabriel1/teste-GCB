import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
});
export const H3 = styled.h3`
    font-size: 20px;
    max-width: 160px;
    margin-bottom:15px;
`;

export const Content = styled.div`
    ${customMedia.lessThan("mobile")`
        padding-right: 5px;
    `};
`;
