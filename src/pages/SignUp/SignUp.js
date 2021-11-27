import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signUp } from "../../services/api";
import Swal from 'sweetalert2';
import Loader from 'react-loader-spinner';
import * as S from "../../styles/LoginAndSignUpStyle";

const SignUp = () => {

  const history = useHistory();
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputFields, setInputFields] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const handleChange = (event) => {
    setInputFields({ ...inputFields, [event.target.name]: event.target.value });
  }

  const register = (event) => {
    event.preventDefault();
    setIsDisabled(false);
    const { name, email, password, passwordConfirm } = inputFields;
    if (!name || !email || !password || !passwordConfirm) {
      setIsDisabled(true);
      return Swal.fire({
        icon: 'warning',
        title: 'Por favor, prencha todos os campos do cadastro.',
      });
    }
    if (password.length < 6) {
      setIsDisabled(true);
      return Swal.fire({
        icon: 'warning',
        title: 'A senha deve conter no mínimo 6 caracteres',
      });
    }
    if (password !== passwordConfirm) {
      setIsDisabled(true);
      return Swal.fire({
        icon: 'warning',
        title: 'Senhas não conferem, tente novamente',
      });
    }

    const body = inputFields;
    signUp(body)
      .then(async (res) => {
        if (res.status === 201) {
          await Swal.fire({
            icon: 'success',
            title: 'Usuário cadastrado com sucesso!',
          });
          history.push("/");
        }
      })
      .catch(async (err) => {
        if (err.response.status === 409) {
          await Swal.fire({
            icon: 'error',
            title: 'Usuário já cadastrado',
          });
          setIsDisabled(true);
        }
        if (err.response.status === 400) {
          await Swal.fire({
            icon: 'error',
            title: 'Preencha corretamente os campos.',
          });
          setIsDisabled(true);
        }
      });
  }

  return (
    <S.Container>
      <S.Title>MyWallet</S.Title>

      <S.Form onSubmit={register}>
        <S.Input
          required
          type="text"
          placeholder="Nome"
          name="name"
          value={inputFields.name}
          onChange={handleChange}
          minLength="3"
          autoFocus
          autoComplete="off"
        />
        <S.Input
          required
          type="email"
          placeholder="Email"
          name="email"
          value={inputFields.email}
          onChange={handleChange}
          minLength="3"
          autoComplete="off"
        />
        <S.Input
          required
          type="password"
          placeholder="Senha"
          name="password"
          value={inputFields.password}
          onChange={handleChange}
          autoComplete="off"
          minLength="6"
        />
        <S.Input
          required
          type="password"
          placeholder="Confirme a senha"
          name="passwordConfirm"
          value={inputFields.passwordConfirm}
          onChange={handleChange}
          autoComplete="off"
          minLength="6"
        />
        <S.Button type="submit" disable={isDisabled}>
        {isDisabled ? (
            'Cadastrar'
          ) : (
            <Loader type="ThreeDots" color="#F1F5F4" height={50} width={50} />
          )}
        </S.Button>
      </S.Form>

      <Link to="/">
        <S.RegisterBtn>Já tem uma conta? Entre agora!</S.RegisterBtn>
      </Link>
    </S.Container>
  );
}

export default SignUp;