import * as S from "./style";

const Register = ({ isInflow }) => {
  return (
    <li>
      <div>
        <S.Date>30/11</S.Date>
        <p>Almoço</p>
      </div>

      <S.Value isInflow={isInflow}>39,90</S.Value>
    </li>
  );
}

export default Register;