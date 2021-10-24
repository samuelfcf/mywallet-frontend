import * as S from "./style";
import { Link, useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Register from "../../components/Register/Register";
import { logOut, getTransactions } from "../../services/api";
import UserContext from "../../context/UserContext";

const HomePage = () => {

  const history = useHistory();
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalence] = useState(0);
  const { user } = useContext(UserContext);

  if (!user.token) {
    history.push("/");
  }

  const calcBalance = (balance) => {
    let total = 0;
    balance.forEach(e => {
      if (e.inflow) {
        total += parseFloat(e.value);
      } else {
        total -= parseFloat(e.value);
      }
    });
    setBalence(total.toFixed(2));
  }

  useEffect(() => {
    getTransactions(user.id, user.token)
      .then(res => {
        setTransactions(res.data);
        calcBalance(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const logout = () => {
    logOut(user.token);
    localStorage.clear();
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
          transactions.length === 0
            ? <span>Não há registros de entrada ou saída</span>
            :
            <S.TransactionsList>
              <ul>
                {transactions.map(register => (
                  <Register
                    register={register}
                    isInflow={register.inflow} />
                ))}
              </ul>

              <div>
                <S.Saldo>SALDO</S.Saldo>
                <S.Total isPositive={true}>{(balance % 1 === 0) ? `${balance}.00` : balance}</S.Total>
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