import { Switch, Route } from "react-router-dom";
import Header from "./Pages/Header";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import ToastError from "./components/Alerts/ToastError";
import PageNotFound from "./Pages/PageNotFound";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <ToastError />
    </div>
  );
};

export default App;
