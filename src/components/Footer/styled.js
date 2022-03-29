import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
});

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px 0;
    ${customMedia.lessThan("mobile")`
        padding: 15px 20px;
        flex-direction:column;
        gap: 10px;
    `};   
`;

export const ContentFooter = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 15px;

    a{
        color: #00000090;
        text-decoration:none
    }
`;

