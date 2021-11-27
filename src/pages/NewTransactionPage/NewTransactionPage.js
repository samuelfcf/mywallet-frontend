import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import UserContext from "../../context/UserContext";
import Swal from 'sweetalert2';
import Loader from 'react-loader-spinner'
import { postTransactions } from "../../services/api";
import * as S from "./style";

const NewTransactionPage = (props) => {

  const history = useHistory();
  const isInflow = props.location.state?.inflow;
  const { user } = useContext(UserContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputFields, setInputFields] = useState({
    value: '',
    description: ''
  });

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
  }, []);

  const handleChange = (event) => {
    setInputFields({ ...inputFields, [event.target.name]: event.target.value });
  }

  const addNewTransaction = (event) => {
    event.preventDefault();
    setIsDisabled(false);
    const { value, description } = inputFields;
    if (!value || !description) {
      return Swal.fire({
        icon: 'warning',
        title: 'Por favor, prencha todos os campos do cadastro.',
      });
    }

    const body = {
      ...inputFields,
      inflow: isInflow,
      date: new Date()
    }
    postTransactions(body, user.id, user.token)
      .then(async () => {
        await Swal.fire({
          icon: 'success',
          title: 'Registro cadastrado com sucesso!',
        });
        setIsDisabled(true);
      })
      .catch(async () => {
        await Swal.fire({
          icon: 'error',
          title: 'Não foi possível cadastrar o registro, por favor tente novamente',
        });
        setIsDisabled(true);
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
          autoFocus
          autoComplete="off"
        />
        <S.Input required
          name="description"
          value={inputFields.description}
          onChange={handleChange}
          placeholder="Descrição"
          minLength="3"
          autoComplete="off"
        />
        <S.Button type="submit">
          {isDisabled ? (
            `Salvar ${isInflow? "entrada" : "saída"}`
          ) : 
          <Loader type="ThreeDots" color="#F1F5F4" height={50} width={50} />
          }
        </S.Button>
      </S.Form>
    </S.PageContainer >
  );
}

export default NewTransactionPage;