import styled from "styled-components"

const Input = styled.input`
    max-width: 100%;
    padding: 10px;
    padding-left: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
    background: #5A63B1;
    border-radius: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    transition: 0.4s ease-in;
    &::placeholder {
        color: #FFFFFF;
    }
    &:focus {
        border: 1px solid #4f5158;
        transition: 0.4s;
    }
`

export default Input