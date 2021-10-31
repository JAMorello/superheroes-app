import { useState, useEffect } from "react";
import TeamList from "../Team/TeamList";
import TeamStats from "../Team/TeamStats";
import HeroDetail from "../Hero/HeroDetail";
import useToken from "../../customHooks/useToken";
import { dummyStats } from "../utilities/stats.js";

const Home = ({ team, removeFromTeam, setCurrentPage }) => {
  // Check if token from login exist. If not, redirect.
  useToken();
  useEffect(() => {
    setCurrentPage("Home");
  });
  const [showDetails, setShowDetails] = useState(dummyStats);

  return (
    <>
      {team && <TeamStats team={team} />}
      {team && (
        <TeamList
          team={team}
          removeFromTeam={removeFromTeam}
          setShowDetails={setShowDetails}
        />
      )}
      {showDetails && <HeroDetail hero={showDetails} />}
    </>
  );
};

export default Home;
