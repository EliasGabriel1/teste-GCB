import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
});

export const Container = styled.div`
    /* max-width:1250px;
    margin:0 auto; */
    display: flex;
    justify-content:space-between;
    
  ${customMedia.lessThan("mobile")`
    flex-direction:column-reverse;
    align-items:center;
  `};   
`;

export const Limit = styled.div`
    max-width:1300px;
    margin:0 auto;
`;

export const Img = styled.img`
    max-height: 99.75vh;
`;

export const MaxHeightForm = styled.div`
    max-height: 695px;
`;

export const MaxHeightcontent = styled.div`
    height: 95vh;
    display:flex;
    justify-content:center;
    flex-direction:column;
`;

export const DivForm = styled.div`
    display: flex;
    height: 600px;
    justify-content: space-between;
    flex-direction: column;
`;

export const SpaceLogo = styled.div`
    height: 5vh;
    ${customMedia.lessThan("mobile")`
      margin-bottom: 20px;
  `};   
`;