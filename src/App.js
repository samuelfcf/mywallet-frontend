
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserContext from "./context/UserContext";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NewTransactionPage from "./pages/NewTransactionPage/NewTransactionPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import GlobalStyle from "./styles/GlobalStyle";

function App() {

  const [user, setUser] = useState("");

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <GlobalStyle />
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/sign-up" exact component={SignUpPage} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/new-transaction" exact component={NewTransactionPage} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
