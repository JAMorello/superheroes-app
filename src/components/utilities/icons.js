import { BiBrain, BiWind } from "react-icons/bi";
import { IoBarbellOutline } from "react-icons/io5";
import {
  GiAngelWings,
  GiDevilMask,
  GiBrokenBone,
  GiMagicPalm,
  GiPunchBlast,
} from "react-icons/gi";

const getAllegianceIcon = (hero) => {
  if (hero.biography.alignment === "good") {
    return <GiAngelWings color="blue" size="2em" />;
  }
  return <GiDevilMask color="red" size="2em" />;
};

const getIcon = (stat) => {
  switch (stat.toLowerCase()) {
    case "intelligence":
      return <BiBrain />;
    case "strength":
      return <IoBarbellOutline />;
    case "speed":
      return <BiWind />;
    case "durability":
      return <GiBrokenBone />;
    case "power":
      return <GiMagicPalm />;
    case "combat":
      return <GiPunchBlast />;
    default:
      return "";
  }
};

export { getIcon, getAllegianceIcon };
