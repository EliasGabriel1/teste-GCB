import styled from 'styled-components';

const Button = styled.button`
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

export default Button;