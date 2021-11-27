import styled from "styled-components";

const PageContainer = styled.div`
  background-color: #4c624f;
  height: 100vh;
  max-width: 39.375rem;
  padding: 1.438rem 1.375rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header = styled.header`
  width: 20.375rem;
  font-size: 26px;
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  font-weight: bold;
  font-family: Raleway, sans-serif;

  ion-icon {
    font-size: 30px;
    cursor: pointer;
  }
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
  PageContainer,
  Header,
  Form,
  Input,
  Button
}