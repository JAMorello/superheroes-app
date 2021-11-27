import { GiAngelWings, GiDevilMask } from "react-icons/gi";

const Allegiance = ({ alignment }) => {
  if (alignment === "good") {
    return <GiAngelWings color="blue" size="2em" />;
  }
  return <GiDevilMask color="red" size="2em" />;
};

export default Allegiance;
