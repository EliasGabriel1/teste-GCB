import styled from 'styled-components';

export const Button = styled.button`
    cursor:pointer;
    border-radius:20px;
    background: rgba(186, 220, 88, 0.83);
    width: 187px;
    height: 29px;
    border:none;
    color:white;
    font-size: 20px;
    line-height: 23px;
    text-transform: uppercase;

    &:hover{
        background:#9FDB22;
    }
`;

export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
`;

export const Form = styled.form`
    max-width: 314px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 10px 0 30px 0;
`;

export const FormContent = styled.div`
    display:flex;
    flex-direction:column;
    gap: 10px;
    margin-top: 10px;
`;

export const FormGroupSpecial = styled.div`
    display: grid;
    gap: 5%;
    grid-template-columns: 60% 35%;
`;

