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
  display: flex;
  justify-content: space-between;
  font-size: 26px;
  color: #FFFFFF;
  font-weight: bold;
  font-family: Raleway, sans-serif;
  
  ion-icon {
    font-size: 30px;
    cursor: pointer;
  }
`

const TransactionsContainer = styled.div`
  height: 27.875rem;
  width: 20.375rem;
  background-color: #fff5eb;
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
    overflow-y: scroll;
    margin-bottom: 40px;

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

const TransactionsList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 18px;
  padding: 1.438rem 0.700rem 0.625rem;

  div {
    display: flex;
    justify-content: space-between;

    span {
      font-family: Raleway;
      font-weight: bold;
      font-size: 17px;
    }
  }
`

const Saldo = styled.p`
  font-family: Raleway;
  font-weight: bold;
  font-size: 17px;
`

const Total = styled(Saldo)`
  color: ${({ isPositive }) => isPositive ? "#03AC00" : "#C70000"};
  font-weight: normal;
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
  background-color: #2e3029;
  color: #FFFFFF;
  font-family: Raleway, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  font-size: 17px;
  font-weight: bold;
  border-radius: 6px;
  box-shadow: 0 0 40px 40px #2e3029 inset, 0 0 0 0 #2e3029;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;

  :hover {
    box-shadow: 0 0 10px 0 #2e3029 inset, 0 0 10px 4px #2e3029;
  }

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
  TransactionsContainer,
  TransactionsList,
  Saldo,
  Total,
  Footer,
  NewInflow,
  NewOutflow,
};