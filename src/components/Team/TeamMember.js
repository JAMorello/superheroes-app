const TeamMember = ({ hero }) => {
  return (
    <li>
      <p>{hero.name}</p>
      <p>{hero.image.url}</p>
      <div>
        <p>Intelligence: {hero.powerstats.intelligence}</p>
        <p>Strength: {hero.powerstats.strength}</p>
        <p>Speed: {hero.powerstats.speed}</p>
        <p>Durability: {hero.powerstats.durability}</p>
        <p>Power: {hero.powerstats.power}</p>
        <p>Combat: {hero.powerstats.combat}</p>
      </div>
      <div>
        <button>Details</button>
        <button>Remove</button>
      </div>
    </li>
  );
};

export default TeamMember;
