import * as S from "./style";
import { Link, useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { logOut, getTransactions } from "../../services/api";
import { calcBalance } from "../../services/utils";
import UserContext from "../../context/UserContext";
import Transaction from "../../components/Transaction/Transaction";

const HomePage = () => {

  const history = useHistory();
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalence] = useState(0);
  const { user } = useContext(UserContext);

  if (!user.token) {
    history.push("/");
  }

  useEffect(() => {
    getTransactions(user.id, user.token)
      .then(res => {
        setTransactions(res.data);
        const currentBalance = calcBalance(transactions);
        setBalence(currentBalance);
      })
      .catch(err => console.log(err));
  }, [transactions]);

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
                {transactions.map(transaction => (
                  <Transaction
                    register={transaction}
                    isInflow={transaction.inflow} />
                ))}
              </ul>

              <div>
                <S.Saldo>SALDO</S.Saldo>
                <S.Total isPositive={(balance >= 0) ? true : false}>
                  {(balance % 1 === 0 && balance === 0) ? `${balance}.00` : balance}
                </S.Total>
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