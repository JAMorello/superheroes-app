import { BiBrain, BiWind } from "react-icons/bi";
import { IoBarbellOutline } from "react-icons/io5";
import { GiBrokenBone, GiMagicPalm, GiPunchBlast } from "react-icons/gi";

const StatIcon = ({ stat }) => {
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

export default StatIcon;
