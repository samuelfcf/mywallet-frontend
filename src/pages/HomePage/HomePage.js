import * as S from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import Register from "../../components/Register/Register";

const HomePage = () => {

  const [hasRegister, setHasRegister] = useState(true)
  const arr = [1, 2, 3, 4];

  return (
    <S.PageContainer>
      <S.Header>
        Olá, Fulano
        <ion-icon onClick={() => alert("logout")} name="log-out-outline"></ion-icon>
      </S.Header>

      <S.TransactionsContainer>
        {
          !hasRegister
            ? <span>Não há registros de entrada ou saída</span>
            :
            <S.TransactionsList>
              <ul>
                {arr.map(register => (
                  <Register isInflow={false} />
                ))}
              </ul>

              <div>
                <S.Saldo>SALDO</S.Saldo>
                <S.Total isPositive={true}>2849,96</S.Total>
              </div>
            </S.TransactionsList>
        }
      </S.TransactionsContainer>

      <S.Footer>
        <Link to="/new-transaction">
          <S.NewInflow>
            <ion-icon name="add-circle-outline"></ion-icon>
            <span>Nova entrada</span>
          </S.NewInflow>
        </Link>

        <Link to="/new-transaction">
          <S.NewOutflow>
            <ion-icon name="remove-circle-outline"></ion-icon>
            <span>Nova saída</span>
          </S.NewOutflow>
        </Link>
      </S.Footer>
    </S.PageContainer>
  );
}

export default HomePage;