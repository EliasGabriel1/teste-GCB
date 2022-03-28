import styled from 'styled-components';


export const Background = styled.div`
    background-repeat: no-repeat;
    background-position: center left;
    background-size: 100vh;
`;

export const Container = styled.div`
    height: 100vh;
    margin-top:10px;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content:end;
`;

export const Bloco = styled.div`
    max-widtj:500px;
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: center;
    height:100%;
    max-width: 800px;
    text-align:start;
    line-height: 140%;
    p{
        color: #00000090;
    }
    h3{
        font-size:22px;
    }
`;