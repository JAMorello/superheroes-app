import HeroItem from "./HeroItem";

const HeroResults = ({
  results,
  addToTeam,
  checkExistence,
  checkAlignment,
}) => {
  return (
    <ul>
      {results.map((e) => (
        <HeroItem
          key={e.id}
          hero={e}
          addToTeam={addToTeam}
          checkExistence={checkExistence}
          checkAlignment={checkAlignment}
        />
      ))}
    </ul>
  );
};

export default HeroResults;
