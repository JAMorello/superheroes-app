import { getAllegianceIcon } from "../utilities/icons.js";
const HeroTitle = ({ hero }) => {
  return (
    <>
      {getAllegianceIcon(hero)}
      <h5 className="card-title">{hero.name}</h5>
    </>
  );
};

export default HeroTitle;
