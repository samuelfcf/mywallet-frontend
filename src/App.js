
import { useState } from "react";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import UserContext from "./context/UserContext";
import Pages from "./Pages";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  const userStorage = JSON.parse(localStorage.getItem("@user"));
  const [user, setUser] = useState(userStorage);

  return (
    <Routes>
      <UserContext.Provider value={{ user, setUser }}>
        <GlobalStyle />
        <Pages />
      </UserContext.Provider>
    </Routes>
  );
}

export default App;
