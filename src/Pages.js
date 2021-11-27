import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import HomePage from "./pages/HomePage/HomePage";
import NewTransactionPage from "./pages/NewTransactionPage/NewTransactionPage";

const Pages = () => {
  return (
    <Routes>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/new-transaction" exact component={NewTransactionPage} />
        </Switch>
    </Routes>
  );
}

export default Pages;