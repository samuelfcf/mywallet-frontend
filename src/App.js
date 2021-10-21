
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NewTransactionPage from "./pages/NewTransactionPage/NewTransactionPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/sign-up" exact component={SignUpPage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/new-transaction" exact component={NewTransactionPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
