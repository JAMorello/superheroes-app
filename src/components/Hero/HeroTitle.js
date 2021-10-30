import Allegiance from "../Icons/Allegiance";
const HeroTitle = ({ hero }) => {
  return (
    <>
      <Allegiance hero={hero} />
      <h5 className="card-title">{hero.name}</h5>
    </>
  );
};

export default HeroTitle;
