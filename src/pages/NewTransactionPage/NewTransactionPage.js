import { useContext, useState } from "react";
import { useHistory } from "react-router";
import UserContext from "../../context/UserContext";
import { postTransactions } from "../../services/api";
import * as S from "./style";

const NewTransactionPage = (props) => {

  const history = useHistory();
  const { user } = useContext(UserContext);
  const isInflow = props.location.state?.inflow;
  const [inputFields, setInputFields] = useState({
    value: '',
    description: ''
  });

  if (!user.token) {
    history.push("/");
  }

  const handleChange = (event) => {
    setInputFields({ ...inputFields, [event.target.name]: event.target.value });
  }

  const addNewTransaction = (event) => {
    event.preventDefault();

    const { value, description } = inputFields;
    if (!value || !description) {
      return alert("Por favor, preencha todos os campos!!");
    }
    const body = {
      ...inputFields,
      inflow: isInflow,
      date: new Date()
    }

    postTransactions(body, user.id, user.token)
      .then(res => {
        alert("Registro cadastrado!!");
      })
      .catch(err => {
        console.log(err)
      });
  }

  return (
    <S.PageContainer>
      <S.Header>
        {isInflow ? "Nova entrada" : "Nova saída"}
        <ion-icon onClick={() => history.push("/home")} name="arrow-back-outline"></ion-icon>
      </S.Header>

      <S.Form onSubmit={addNewTransaction}>
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