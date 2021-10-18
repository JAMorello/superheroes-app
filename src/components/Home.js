import useToken from "../customHooks/useToken";

const Home = () => {
  // Check if token from login exist. If not, redirect.
  useToken();
  return <div></div>;
};

export default Home;
