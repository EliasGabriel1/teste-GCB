import styled from 'styled-components';


export const Background = styled.div`
    background-repeat: no-repeat;
    background-position: center left;
    background-size: 100vh;
    margin-top: 100px;
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
    max-width:420px;
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: center;
    height:100%;
    text-align:start;
    button{
        margin-top: 48px;
    }
    h3{
        margin-bottom: 32px;
        font-weight: bold;
        font-size: 32px;
    }
`;