import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import * as S from "./style";

const NewTransactionPage = (props) => {

  const isInflow = props.location.state.inflow;
  const history = useHistory();

  const [transactions, setTransactions] = useState([]);
  const [inputFields, setInputFields] = useState({
    value: '',
    description: ''
  });

  useEffect(() => {

  }, [])

  const handleChange = (event) => {
    setInputFields({ ...inputFields, [event.target.name]: event.target.value });
  }

  return (
    <S.PageContainer>
      <S.Header>
        {isInflow ? "Nova entrada" : "Nova saída"}
        <ion-icon onClick={() => history.push("/home")} name="arrow-back-outline"></ion-icon>
      </S.Header>
      <S.Form>
        <S.Input required
          type="number"
          name="value"
          value={inputFields.value}
          onChange={handleChange}
          placeholder="Valor"
        />
        <S.Input required
          name="description"
          value={inputFields.description}
          onChange={handleChange}
          placeholder="Descrição"
        />
        <S.Button type="submit">Salvar {isInflow ? "entrada" : "saída"}</S.Button>
      </S.Form>
    </S.PageContainer >
  );
}

export default NewTransactionPage;