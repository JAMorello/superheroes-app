import TeamList from "./Team/TeamList";
import useToken from "../customHooks/useToken";

const Home = ({ team }) => {
  // Check if token from login exist. If not, redirect.
  useToken();

  return <>{team && <TeamList team={team} />}</>;
};

export default Home;
