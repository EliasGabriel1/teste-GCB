import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
});

export const Carrossel = styled.div`
  scroll-behavior: smooth;
  display: flex;
  justify-content: space-between;
  max-width: 1230px;
  overflow: auto;
  padding: 20px 10px;
  width: 100%;
  gap: 30px;
  ${customMedia.lessThan("desktop")`
      &::-webkit-scrollbar-thumb{background-color: blue;}
    `};

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 1300px;
`;

export const ButtonOne = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background-color: #F1f2f3;
  display: flex;
  align-items :center;
  justify-content: center;
  font-size: 30px;  
  cursor: pointer;
  margin-right: 5px;
  color: #11111190
`;

export const ButtonTwo = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 20px;
  background-color: #F1f2f3;
  color: #11111190;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;  
  cursor: pointer;
  margin-left: 5px;
`;
