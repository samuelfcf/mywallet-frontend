import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  max-width: 630px;
  height: 100vh;
  background-color: #8C11BE;
`

const Title = styled.h1`
  font-size: 32px;
  color: #FFF;
  font-family: Saira Stencil One, sans-serif;
`

const RegisterBtn = styled.span`
  font-size: 15px;
  color: #FFF;
  font-weight: bold;
  font-family: Raleway, sans-serif;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  width: 326px;
  height: 58px;
  border-radius: 3px;
  border: 0;
  margin-bottom: 13px;

  &::placeholder {
    color: #000;
    font-size: 20px;
    font-family: Raleway, sans-serif;
    padding-left: 10px;
  }
`

const Button = styled.button`
  width: 326px;
  height: 46px;
  border: 0;
  border-radius: 3px;
  background-color: #A328D6;
  color: #FFF;
  font-size: 20px;
  font-family: Raleway, sans-serif;
  font-weight: bold;
`

export {
  Container,
  Title,
  RegisterBtn,
  Form,
  Input,
  Button
}