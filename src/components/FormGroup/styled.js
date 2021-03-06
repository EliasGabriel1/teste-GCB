import styled from 'styled-components';


export const FormuGroup = styled.div`
    display:flex;
    flex-direction:column;
    gap: 5px;   
`;

export const GroupInput = styled.div`
    display:flex;
    gap: 10px;
    button{
        cursor:pointer;
    }
`;

export const Input = styled.input`
    height: 30.06px;
    padding-left: 10px;
    width: 100%;
    max-width: 100%;
    border: 1px solid #0000003d;
`;

export const Button = styled.button`
    background-color: #BADC58;
    padding: 0 18px;
    color: #FFFFFF;
`;