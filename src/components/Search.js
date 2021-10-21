import { useState } from "react";
import useToken from "../customHooks/useToken";
import SearchForm from "./Search/SearchForm";
import HeroResults from "./Search/HeroResults";

const Search = ({ addToTeam, checkExistence, checkAlignment }) => {
  // Check if token from login exist. If not, redirect.
  useToken();

  const [results, setResults] = useState(null);

  return (
    <>
      <SearchForm setResults={setResults} />
      {results && (
        <HeroResults
          results={results}
          addToTeam={addToTeam}
          checkExistence={checkExistence}
          checkAlignment={checkAlignment}
        />
      )}
    </>
  );
};

export default Search;
