import useToken from "../customHooks/useToken";

const Search = () => {
  // Check if token from login exist. If not, redirect.
  useToken();

  return <div></div>;
};

export default Search;
