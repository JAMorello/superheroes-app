import { useState } from "react";
import TeamList from "./Team/TeamList";
import TeamStats from "./Team/TeamStats";
import HeroDetail from "./Team/HeroDetail";
import useToken from "../customHooks/useToken";

const Home = ({ team, removeFromTeam, setCurrentPage }) => {
  // Check if token from login exist. If not, redirect.
  useToken();
  setCurrentPage("Home");
  const [showDetails, setShowDetails] = useState(null);

  return (
    <>
      {team && <TeamStats team={team} />}
      {team && (
        <TeamList
          team={team}
          removeFromTeam={removeFromTeam}
          setShowDetails={setShowDetails}
          modalID="heroDetailModal"
        />
      )}
      {showDetails && <HeroDetail hero={showDetails} id="heroDetailModal" />}
    </>
  );
};

export default Home;
