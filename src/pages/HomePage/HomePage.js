import * as S from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {

  const [hasRegister, setHasRegister] = useState(true)

  return (
    <S.PageContainer>
      <S.Header>
        Olá, Fulano
        <ion-icon onClick={() => alert("logout")} name="log-out-outline"></ion-icon>
      </S.Header>

      <S.TransactionsList>
        {
          !hasRegister
            ? <span>Não há registros de entrada ou saída</span>
            :
            <ul>
              <li><div><S.Date>30/11</S.Date> <p>Almoço</p></div> <S.Value>39,90</S.Value></li>
              <li><div><S.Date>30/11</S.Date> <p>Almoço</p></div> <S.Value>39,90</S.Value></li>
              <li><div><S.Date>30/11</S.Date> <p>Almoço</p></div> <S.Value>39,90</S.Value></li>
              <li><div><S.Date>30/11</S.Date> <p>Almoço</p></div> <S.Value>39,90</S.Value></li>
            </ul>
        }
      </S.TransactionsList>

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