import useToken from "../customHooks/useToken";
import SearchForm from "./Search/SearchForm";
import HeroResults from "./Search/HeroResults";

const Search = ({
  results,
  setResults,
  addToTeam,
  checkExistence,
  checkAlignment,
  setCurrentPage,
}) => {
  // Check if token from login exist. If not, redirect.
  useToken();
  setCurrentPage("Search");

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
