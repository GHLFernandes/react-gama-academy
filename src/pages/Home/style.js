import styled from "styled-components";

export const HomeContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Content = styled.div `
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input `
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;

    //sintaxe SAS
    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button `
    height: 1.6rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
    margin-left: -2px;

    &:hover{
        cursor: pointer;
        background: #565656;
        border: 1px solid #565656;
    }
`;

export const ErrorMsg = styled.span `
    display: block;
    font-size: 0.65rem;
    color: red;
    margin-top: 1rem;
    font-weight: 600;
`;