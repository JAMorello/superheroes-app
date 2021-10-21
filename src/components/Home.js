import TeamList from "./Team/TeamList";
import useToken from "../customHooks/useToken";

const Home = ({ team, removeFromTeam }) => {
  // Check if token from login exist. If not, redirect.
  useToken();

  return (
    <>{team && <TeamList team={team} removeFromTeam={removeFromTeam} />}</>
  );
};

export default Home;
