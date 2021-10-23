import * as S from "./style";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Register from "../../components/Register/Register";
import { logOut } from "../../services/api";

const HomePage = () => {

  const history = useHistory();
  const [hasRegister, setHasRegister] = useState(true)
  const arr = [1, 2, 3, 4];

  const userLocalStorage = localStorage.getItem("user");
  const name = JSON.parse(userLocalStorage).name;
  const token = JSON.parse(userLocalStorage).token;

  const logout = () => {
    localStorage.clear();
    logOut(token);
    history.push("/")
  }

  return (
    <S.PageContainer>
      <S.Header>
        Olá, {name}
        <ion-icon onClick={logout} name="log-out-outline"></ion-icon>
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
        <Link to={{
          pathname: "/new-transaction",
          state: { inflow: true }
        }}>
          <S.NewInflow>
            <ion-icon name="add-circle-outline"></ion-icon>
            <span>Nova entrada</span>
          </S.NewInflow>
        </Link>

        <Link to={{
          pathname: "/new-transaction",
          state: { inflow: false }
        }}>
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