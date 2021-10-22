import styled from "styled-components";

const PageContainer = styled.div`
  background-color: #8C11BE;
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
  display: flex;
  justify-content: space-between;
  font-size: 26px;
  color: #FFFFFF;
  font-weight: bold;
  font-family: Raleway, sans-serif;
  
  ion-icon {
    font-size: 30px;
  }
`

const TransactionsList = styled.div`
  height: 27.875rem;
  width: 20.375rem;
  background-color: #FFFFFF;
  margin-top: 18px;
  margin-left: 2px;
  border-radius: 6px;
  position: relative;

  span {
    width: 180px;
    margin: auto;
    position: absolute;
    top: 200px;
    left: 80px;
    text-align: center;
    color: #868686;
    font-size: 20px;
    font-family: Raleway, sans-serif;
  }

  ul {
    padding: 1.438rem 0.688rem;

    div, p {
      display: inline
    }

    p {
      font-family: Raleway, sans-serif;
      font-size: 16px;
    }

    li {
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
  }
`

const Date = styled.p`
  display: inline;
  font-family: Raleway, sans-serif;
  color: #C6C6C6;
  margin-right: 10px;
  font-size: 16px;
`

const Value = styled.p`
  font-family: Raleway;
  display: inline;
  color: #03AC00;
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 13px;
`

const NewInflow = styled.div`
  height: 7.125rem;
  width: 9.75rem;
  background-color: #A328D6;
  color: #FFFFFF;
  font-family: Raleway, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  font-size: 17px;
  font-weight: bold;
  border-radius: 6px;

  ion-icon {
    font-size: 25px;
  }

  span {
    width: 10px;
    line-height: 20px;
  }
`

const NewOutflow = styled(NewInflow)``

export {
  PageContainer,
  Header,
  TransactionsList,
  Date,
  Value,
  Footer,
  NewInflow,
  NewOutflow,
};