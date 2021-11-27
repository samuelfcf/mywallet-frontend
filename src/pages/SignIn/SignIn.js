import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { logIn } from "../../services/api";
import Swal from 'sweetalert2';
import Loader from 'react-loader-spinner';
import * as S from "../../styles/LoginAndSignUpStyle";

const SignIn = () => {

  const history = useHistory();
  const { setUser } = useContext(UserContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputFields, setInputFields] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    const userLocalStorage = localStorage.getItem("@user");
    if (!userLocalStorage) {
      return
    } else {
      const user = JSON.parse(userLocalStorage);
      setUser(user);
      history.push("/home");
    }
  }, []);

  const handleChange = (event) => {
    setInputFields({ ...inputFields, [event.target.name]: event.target.value });
  }

  const login = (event) => {
    event.preventDefault();
    setIsDisabled(false);
    const { email, password } = inputFields;
    if (!email || !password) {
      setIsDisabled(true);
      return Swal.fire({
        icon: 'warning',
        title: 'Por favor, prencha todos os campos do cadastro.',
      });
    }

    const body = inputFields;
    logIn(body)
      .then(async (res) => {
        const userInfos = res.data;
        const user = {
          token: userInfos.data.token,
          ...userInfos.data,
        }
        setUser(user);
        localStorage.setItem("@user", JSON.stringify(user));
        if (res.status === 200) {
          history.push("/home");
        }
      })
      .catch(async (err) => {
        if (err.response.status === 401) {
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

      <S.Form onSubmit={login}>
        <S.Input
          required
          type="email"
          placeholder="Email"
          name="email"
          value={inputFields.email}
          onChange={handleChange}
          minLength="3"
          autoFocus
          autoComplete="off"
        />
        <S.Input
          required
          type="password"
          placeholder="Senha"
          name="password"
          value={inputFields.password}
          onChange={handleChange}
          minLength="6"
          autoComplete="off"
        />
        <S.Button type="submit" disable={isDisabled}>
        {isDisabled ? (
            'Entrar'
          ) : (
            <Loader type="ThreeDots" color="#F1F5F4" height={50} width={50} />
          )}
        </S.Button>
      </S.Form>

      <Link to="/sign-up">
        <S.RegisterBtn>Primeira vez? Cadastre-se!</S.RegisterBtn>
      </Link>
    </S.Container>
  );
}

export default SignIn;