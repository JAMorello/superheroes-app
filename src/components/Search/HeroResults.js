import HeroItem from "./HeroItem";

const HeroResults = ({
  results,
  addToTeam,
  checkExistence,
  checkAlignment,
  memberQuantity,
}) => {
  return (
    <div className="container my-2">
      <div className="row justify-content-center g-4">
        {results.map((e) => (
          <HeroItem
            key={e.id}
            hero={e}
            addToTeam={addToTeam}
            checkExistence={checkExistence}
            checkAlignment={checkAlignment}
            memberQuantity={memberQuantity}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroResults;
