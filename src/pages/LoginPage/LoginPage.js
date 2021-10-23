import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { logIn } from "../../services/api";
import * as S from "../../styles/LoginAndSignUpStyle";

const LoginPage = () => {

  const history = useHistory();
  const { setUser } = useContext(UserContext);
  const [inputFields, setInputFields] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    const userLocalStorage = localStorage.getItem("user");
    if (!userLocalStorage) return;
    history.push("/home");
  }, [])

  const handleChange = (event) => {
    setInputFields({ ...inputFields, [event.target.name]: event.target.value });
  }

  const login = (event) => {
    event.preventDefault();

    const { email, password } = inputFields;
    if (!email || !password) {
      return alert("Por favor, preencha todos os campos!!");
    }

    const body = inputFields;
    logIn(body)
      .then(res => {
        const user = {
          id: res.data.id,
          token: res.data.token,
          name: res.data.name,
        }
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        if (res.status === 200) {
          history.push("/home");
        }
      })
      .catch(err => {
        if (err.response.status === 400) return alert("Preencha corretamente os campos")
      });
  }

  return (
    <S.Container>
      <S.Title>MyWallet</S.Title>

      <S.Form onSubmit={login}>
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
        <S.Button type="submit">Entrar</S.Button>
      </S.Form>

      <Link to="/sign-up">
        <S.RegisterBtn>Primeira vez? Cadastre-se!</S.RegisterBtn>
      </Link>
    </S.Container>
  );
}



export default LoginPage;