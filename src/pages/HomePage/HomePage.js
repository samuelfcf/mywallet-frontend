import * as S from "./style";
import { Link, useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Register from "../../components/Register/Register";
import { logOut } from "../../services/api";
import UserContext from "../../context/UserContext";

const HomePage = () => {

  const history = useHistory();
  const { user } = useContext(UserContext);
  const [hasRegister, setHasRegister] = useState(true)
  const arr = [1, 2, 3, 4];

  useEffect(() => {

  }, [])

  const logout = () => {
    localStorage.clear();
    logOut(user.token);
    history.push("/")
  }

  return (
    <S.PageContainer>
      <S.Header>
        Olá, {user.name}
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