import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";


function App() {
  return (
    <>
      <GlobalStyle />
      <Title>My Wallet</Title>
      <Subtitle>My wallet</Subtitle>
    </>
  );
}

const Title = styled.h1`
  font-family: Raleway, sans-serif;
`

const Subtitle = styled.h2`
  font-family: Saira Stencil One, sans-serif;
`

export default App;
