import { useState } from "react";
import { useHistory } from "react-router";
import * as S from "./style";

const NewTransactionPage = () => {

  const history = useHistory();
  const [inputFields, setInputFields] = useState({
    value: '',
    description: ''
  });

  const handleChange = (event) => {
    setInputFields({ ...inputFields, [event.target.name]: event.target.value });
  }

  return (
    <S.PageContainer>
      <S.Header>
        Nova Entrada
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
        <S.Button type="submit">Salvar entrada</S.Button>
      </S.Form>
    </S.PageContainer >
  );
}

export default NewTransactionPage;