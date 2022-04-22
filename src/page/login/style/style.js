import styled from "styled-components";

export const Form = styled.form`
    width: 300px;
    height: 400px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Title = styled.h1`
    margin: 0;
    font-size: 25px;
    color: black;
    margin-bottom: 20px;
    text-align: center;
    padding-top: 10px;
    text-transform: uppercase;
`

export const TitleInput = styled.p`
    margin: 0;
    font-size: 13px;
    margin-bottom: 5px;
    color: gray;
    padding: 0px 20px;
`
export const Input = styled.input`
    margin: 0px 20px;
    margin-bottom: 20px;
    padding: 0px 10px;
    color: black;
    outline: none;
    height: 30px;
    border-radius: 5px;
`

export const Btn = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;

    .BtnRegister{
        color: black;
        font-size: 14px;
        display: flex;
        align-items: center;

        &:hover{
            color: black;
        }
    }
`

export const BtnLogin = styled.button`
    padding: 10px 11px;
    max-width: 100px;
    background-color: green;
    color: white;
    border: none;
    font-size: 14px;
    outline: none;
    text-dicoration: none;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover{
        opacity: .8;
        text-dicoration: none;
        color: white;
    }
`