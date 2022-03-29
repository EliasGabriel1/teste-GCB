import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
});

export const Background = styled.div`
  background-repeat: no-repeat;
  background-position: center left;
  background-size: 100vh;
  margin-top: 100px;
`;

export const Container = styled.div`
  height: 100vh;
  margin-top: 10px;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: end;
  ${customMedia.lessThan("mobile")`
        justify-content: center;
    `}
`;

export const Bloco = styled.div`
  max-width: 420px;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  text-align: start;
    p {
        color: #00000090;
        line-height: 140%;
        ${customMedia.lessThan("mobile")`
        color: #000000;
        `}
    }

    h3 {
        line-height: 140%;
        font-size: 22px;
    }

    ${customMedia.lessThan("mobile")`
        background-color: #ffffff90;
        border-radius: 7px;
        max-height: 75%;
        padding: 0 20px;
        max-width: 330px;
    `}
`;
