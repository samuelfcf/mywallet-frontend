import styled from "styled-components";

const Date = styled.p`
  display: inline;
  font-family: Raleway, sans-serif;
  color: #C6C6C6;
  margin-right: 10px;
  font-size: 16px;
`

const Value = styled.p`
  font-family: Raleway;
  display: inline;
  color: ${({ isInflow }) => isInflow ? "#03AC00" : "#C70000"};
`

export {
  Date,
  Value
}