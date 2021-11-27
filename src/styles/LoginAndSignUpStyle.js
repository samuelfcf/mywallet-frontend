import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  max-width: 630px;
  height: 100vh;
  background-color: #4c624f;
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
  color: #000;
  font-size: 20px;
  font-family: Raleway, sans-serif;
  padding-left: 10px;
  background-color: #fff5eb;

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
  background-color: #2e3029;
  color: #FFF;
  font-size: 20px;
  font-family: Raleway, sans-serif;
  font-weight: bold;
  box-shadow: 0 0 40px 40px #2e3029 inset, 0 0 0 0 #2e3029;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;

  :hover {
    box-shadow: 0 0 10px 0 #2e3029 inset, 0 0 10px 4px #2e3029;
  }
`

export {
  Container,
  Title,
  RegisterBtn,
  Form,
  Input,
  Button
}