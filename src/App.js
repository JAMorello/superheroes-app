import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Search from "./components/Search";
import ToastError from "./components/Alerts/ToastError";
import PageNotFound from "./components/Pages/PageNotFound";

/*
ISSUES
- Bottom of app is always white except when in Search page with more than 4 hero cards
*/

const App = () => {
  // State for current page name
  const [currentPage, setCurrentPage] = useState("Home");

  let history = useHistory(); // To redirect

  // State and Effect for the token -- POST request
  const [response, setResponse] = useState({ token: "", error: "" });
  useEffect(() => {
    localStorage.setItem("token", response.token);
    if (response.token !== "") history.push("/home");
    // eslint-disable-next-line
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
    <div style={{ backgroundColor: "#911322" }}>
      <Header
        token={response.token}
        setResponse={setResponse}
        currentPage={currentPage}
      />
      <Switch>
        <Route path="/home">
          <Home
            team={team}
            removeFromTeam={removeFromTeam}
            setCurrentPage={setCurrentPage}
          />
        </Route>
        <Route path="/search">
          <Search
            results={results}
            setResults={setResults}
            addToTeam={addToTeam}
            checkExistence={checkExistence}
            checkAlignment={checkAlignment}
            setCurrentPage={setCurrentPage}
            memberQuantity={team.length}
          />
        </Route>
        <Route path="/login">
          <Login setResponse={setResponse} setCurrentPage={setCurrentPage} />
        </Route>
        <Route path="/" exact>
          <Home
            team={team}
            removeFromTeam={removeFromTeam}
            setCurrentPage={setCurrentPage}
          />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <ToastError response={response} />
    </div>
  );
};

export default App;
