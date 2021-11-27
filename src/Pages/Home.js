import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentPage } from "../redux/features/pageSlice";
import TeamList from "../components/Team/TeamList";
import TeamStats from "../components/Team/TeamStats";
import HeroDetail from "../components/Hero/HeroDetail";
import useToken from "../customHooks/useToken";

const Home = () => {
  // Check if token from login exist. If not, redirect.
  useToken();

  const team = useSelector((state) => state.team);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeCurrentPage("Home"));
  });

  return (
    <>
      {team && <TeamStats team={team} />}
      {team && <TeamList team={team} />}
      <HeroDetail />
    </>
  );
};

export default Home;
