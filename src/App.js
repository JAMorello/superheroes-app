import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Search from "./components/Search";

const App = () => {
  const [response, setResponse] = useState({ token: "", error: "" });

  useEffect(() => {
    localStorage.setItem("token", response.token);
  }, [response]);

  return (
    <>
      <Header token={response.token} setResponse={setResponse} />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/login">
          <Login setResponse={setResponse} />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          {
            // PAGE 404
          }
        </Route>
      </Switch>
    </>
  );
};

export default App;
