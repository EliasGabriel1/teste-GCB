import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
});

export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    ${customMedia.lessThan("desktop")`
        padding-right: 80px;
    `};   
    ${customMedia.lessThan("mobile")`
        padding-right: unset;
        max-width: 85vw;
        margin: 0 auto;
    `};   
`;

export const ButtonLink = styled.a`
    color: white;
    text-decoration: none;
    font-weight:700;
    text-transform: uppercase;
    font-size: 14px;
`;

export const ButtonCadastro = styled.a`
    color: green;
    background: white;
    padding: 10px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
`;