const HeroItem = ({ hero, addToTeam, checkExistence, checkAlignment }) => {
  return (
    <li>
      <div>
        <p>{hero.name}</p>
        <p>{hero.image.url}</p>
        <button
          disabled={checkExistence(hero) || checkAlignment(hero)}
          onClick={() => addToTeam(hero)}
        >
          Add
        </button>
      </div>
    </li>
  );
};

export default HeroItem;
