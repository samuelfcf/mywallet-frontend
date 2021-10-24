import * as S from "./style";
import { formatDate, formatValue } from "../../services/utils";

const Register = ({ isInflow, register }) => {

  const { date, description, value } = register;

  return (
    <li>
      <div>
        <S.Date>{formatDate(date)}</S.Date>
        <p>{description}</p>
      </div>

      <S.Value isInflow={isInflow}>{formatValue(value)}</S.Value>
    </li>
  );
}

export default Register;