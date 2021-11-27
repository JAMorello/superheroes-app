import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeCurrentPage } from "../redux/features/pageSlice";
import useToken from "../customHooks/useToken";
import SearchForm from "../components/Search/SearchForm";
import HeroResults from "../components/Search/HeroResults";

const Search = () => {
  const dispatch = useDispatch();
  // Check if token from login exist. If not, redirect.
  useToken();
  useEffect(() => {
    dispatch(changeCurrentPage("Search"));
  });

  return (
    <>
      <SearchForm />
      <HeroResults />
    </>
  );
};

export default Search;
