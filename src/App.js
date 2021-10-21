import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Search from "./components/Search";

const App = () => {
  // State and Effect for the token -- POST request
  const [response, setResponse] = useState({ token: "", error: "" });
  useEffect(() => {
    localStorage.setItem("token", response.token);
  }, [response]);

  // State for the team
  const [team, setTeam] = useState([]);

  const addToTeam = (heroToAdd) => {
    setTeam([...team, heroToAdd]);
  };

  const checkExistence = (heroToAdd) => {
    const heroID = heroToAdd.id;
    for (let i = 0; i < team.length; i++) {
      if (team[i].id === heroID) return true;
    }
    return false;
  };

  // Check if the team already has 3 members of the same alignment
  const checkAlignment = (heroToAdd) => {
    const alignment = heroToAdd.biography.alignment;
    const alignmentArray = team.map((e) => e.biography.alignment === alignment);
    return alignmentArray.length === 3;
  };

  return (
    <>
      <Header token={response.token} setResponse={setResponse} />
      <Switch>
        <Route path="/home">
          <Home team={team} />
        </Route>
        <Route path="/search">
          <Search
            addToTeam={addToTeam}
            checkExistence={checkExistence}
            checkAlignment={checkAlignment}
          />
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
