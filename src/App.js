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

  const removeFromTeam = (heroToRemove) => {
    const heroID = heroToRemove.id;
    const newTeam = team.filter((e) => e.id !== heroID);
    setTeam(newTeam);
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
    const alignmentArray = team.filter(
      (e) => e.biography.alignment === alignment
    );
    return alignmentArray.length === 3;
  };

  // This is the state of the Search component.
  // It was lifted to avoid losing it/ to avoid reset
  // when navigating to other pages
  const [results, setResults] = useState(null);

  return (
    <>
      <Header token={response.token} setResponse={setResponse} />
      <Switch>
        <Route path="/home">
          <Home team={team} removeFromTeam={removeFromTeam} />
        </Route>
        <Route path="/search">
          <Search
            results={results}
            setResults={setResults}
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
