import StatIcon from "../Icons/StatIcon";

const HeroStats = ({ stats, slice }) => {
  return Object.entries(stats)
    .slice(slice[0], slice[1])
    .map((e) => (
      <li key={e[0]} className="list-group-item">
        <StatIcon stat={e[0]} /> {e[0].charAt(0).toUpperCase() + e[0].slice(1)}:{" "}
        {e[1]}
      </li>
    ));
};

HeroStats.defaultProps = {
  slice: [0, 3],
};

export default HeroStats;
