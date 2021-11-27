import { useSelector } from "react-redux";
import HeroItem from "./HeroItem";

const HeroResults = () => {
  const results = useSelector((state) => state.results);
  if (!results) return null;
  return (
    <div className="container my-2">
      <div className="row justify-content-center g-4">
        {results.map((e) => (
          <HeroItem key={e.id} hero={e} />
        ))}
      </div>
    </div>
  );
};

export default HeroResults;
