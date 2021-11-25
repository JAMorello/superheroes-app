import { useEffect } from "react";
import useToken from "../customHooks/useToken";
import SearchForm from "../components/Search/SearchForm";
import HeroResults from "../components/Search/HeroResults";

const Search = ({
  results,
  setResults,
  addToTeam,
  checkExistence,
  checkAlignment,
  setCurrentPage,
  memberQuantity,
}) => {
  // Check if token from login exist. If not, redirect.
  useToken();
  useEffect(() => {
    setCurrentPage("Search");
  });

  return (
    <>
      <SearchForm setResults={setResults} />
      {results && (
        <HeroResults
          results={results}
          addToTeam={addToTeam}
          checkExistence={checkExistence}
          checkAlignment={checkAlignment}
          memberQuantity={memberQuantity}
        />
      )}
    </>
  );
};

export default Search;
