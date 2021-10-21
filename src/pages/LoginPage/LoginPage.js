import { Link } from "react-router-dom";
import * as S from "./style";

const LoginPage = () => {
  return (
    <S.Container>
      <S.Title>MyWallet</S.Title>

      <S.Form>
        <S.Input
          required
          type="email"
          placeholder="Email"
          name="email"
        />
        <S.Input
          required
          type="password"
          placeholder="Senha"
          name="password"
        />
        <S.Button>Entrar</S.Button>
      </S.Form>

      <Link to="sign-up">
        <S.RegisterBtn>Primeira vez? Cadastre-se!</S.RegisterBtn>
      </Link>
    </S.Container>
  );
}



export default LoginPage;