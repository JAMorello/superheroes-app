import { GiAngelWings, GiDevilMask } from "react-icons/gi";

const Allegiance = ({ hero }) => {
  if (hero.biography.alignment === "good") {
    return <GiAngelWings color="blue" size="2em" />;
  }
  return <GiDevilMask color="red" size="2em" />;
};

export default Allegiance;
