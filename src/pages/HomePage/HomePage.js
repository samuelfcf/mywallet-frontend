import * as S from "./style";
import { Link, useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getTransactions } from "../../services/api";
import { calcBalance } from "../../services/utils";
import Swal from 'sweetalert2';
import UserContext from "../../context/UserContext";
import Transaction from "../../components/Transaction/Transaction";

const HomePage = () => {

  const history = useHistory();
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalence] = useState(0);
  const { user } = useContext(UserContext);
  
  useEffect(() => {
    if (!user) {
      return Swal.fire({
        title: 'Login necessário',
        text: 'Para acessar essa página, você precisa estar logado',
        icon: 'warning',
        confirmButtonText: 'Fazer Login',
        confirmButtonColor: '#2A6DB0',
      }).then((result) => {
        if (result.isConfirmed) {
          history.push('/');
        }
    });
  }
  getTransactions(user.id, user.token)
    .then(res => {
      setTransactions(res.data);
      const registers = transactions
      const currentBalance = calcBalance(registers);
      setBalence(currentBalance);
    })
    .catch(err => console.log(err));
  }, [balance]);

  const logout = () => {
    localStorage.clear();
    history.push("/")
  }

  return (
    <S.PageContainer>
      <S.Header>
        Olá, {user?.name}
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