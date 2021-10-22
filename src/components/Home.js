import {useState} from "react"
import TeamList from "./Team/TeamList";
import TeamStats from "./Team/TeamStats"
import HeroDetail from "./Team/HeroDetail"
import useToken from "../customHooks/useToken";

const Home = ({ team, removeFromTeam }) => {
  // Check if token from login exist. If not, redirect.
  useToken();

  const [showDetails, setShowDetails] = useState(null)

  return (
    <>{team && <TeamStats team={team}/>}
    {team && <TeamList team={team} removeFromTeam={removeFromTeam} setShowDetails={setShowDetails}/>}
    {showDetails && <HeroDetail hero={showDetails}/>}
    </>
  );
};

export default Home;
