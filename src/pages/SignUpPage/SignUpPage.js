import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signUp } from "../../services/api";
import * as S from "../../styles/LoginAndSignUpStyle";

const SignUpPage = () => {

  const history = useHistory();

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

    const { name, email, password, passwordConfirm } = inputFields;
    if (!name || !email || !password || !passwordConfirm) {
      return alert("Por favor, prencha todos os campos do cadastro.");
    }
    if (password.length < 6) {
      return alert("A senha deve conter no mínimo 6 caracteres");
    }
    if (password !== passwordConfirm) {
      return alert("Senhas não conferem");
    }

    const body = inputFields;

    signUp(body)
      .then(res => {
        if (res.status === 201) {
          history.push("/");
        }
        console.log(res)
      })
      .catch(err => {
        console.log(err.response);
        if (err.response.status === 409) return alert("Usuário já cadastrado.")
        if (err.response.status === 400) return alert("Preencha corretamente os campos.")
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
        />
        <S.Input
          required
          type="email"
          placeholder="Email"
          name="email"
          value={inputFields.email}
          onChange={handleChange}
        />
        <S.Input
          required
          type="password"
          placeholder="Senha"
          name="password"
          value={inputFields.password}
          onChange={handleChange}
        />
        <S.Input
          required
          type="password"
          placeholder="Confirme a senha"
          name="passwordConfirm"
          value={inputFields.passwordConfirm}
          onChange={handleChange}
        />
        <S.Button type="submit">Cadastrar</S.Button>
      </S.Form>

      <Link to="/">
        <S.RegisterBtn>Já tem uma conta? Entre agora!</S.RegisterBtn>
      </Link>
    </S.Container>
  );
}

export default SignUpPage;