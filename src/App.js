import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/home">
          {
            // HOME
          }
        </Route>
        <Route path="/search">
          {
            // SEARCH
          }
        </Route>
        <Route path="/login">
          {
            // LOGIN
          }
        </Route>
        <Route path="/" exact>
          {
            // HOME
          }
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
