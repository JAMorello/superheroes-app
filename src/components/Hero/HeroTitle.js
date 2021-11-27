import Allegiance from "../Icons/Allegiance";
const HeroTitle = ({ name, alignment }) => {
  return (
    <>
      <Allegiance alignment={alignment} />
      <h5 className="card-title">{name}</h5>
    </>
  );
};

export default HeroTitle;
