import { useState, useEffect } from "react";

const TeamStats = ({ team }) => {
  let initialStats = {
    Intelligence: 0,
    Strength: 0,
    Speed: 0,
    Durability: 0,
    Power: 0,
    Combat: 0,
  };

  const [stats, setStats] = useState(initialStats);
  const [teamSpeciality, setTeamSpeciality] = useState(Object.keys(stats)[0]);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  // Update Team's sum of powerstats every time it is updated (add or remove hero)
  useEffect(() => {
    const reduceStat = (heroTeam, stat) => {
      return heroTeam.reduce(
        (sum, sumHero) => sum + parseInt(sumHero.powerstats[stat]),
        0
      );
    };

    let newStats = {};

    newStats.Intelligence = reduceStat(team, "intelligence");
    newStats.Strength = reduceStat(team, "strength");
    newStats.Speed = reduceStat(team, "speed");
    newStats.Durability = reduceStat(team, "durability");
    newStats.Power = reduceStat(team, "power");
    newStats.Combat = reduceStat(team, "combat");

    // Sort powerstats - Highest to lowest score
    newStats = Object.fromEntries(
      Object.entries(newStats).sort((a, b) => b[1] - a[1])
    );

    setStats(newStats);
    setTeamSpeciality(Object.keys(newStats)[0]);
  }, [team]);

  // Update overall weight and height of team
  useEffect(() => {
    const reduceMeasure = (heroTeam, measure) => {
      const number =
        heroTeam.reduce(
          (sum, sumHero) =>
            sum + parseInt(sumHero.appearance[measure][1].replace(/kgcm/, "")),
          0
        ) / heroTeam.length;
      return isNaN(number) ? 0 : number;
    };

    setWeight(reduceMeasure(team, "weight"));
    setHeight(reduceMeasure(team, "height"));
  }, [team]);

  return (
    <div>
      <div>
        <h3>Team Specialty</h3>
        {team && <h3>{teamSpeciality}</h3>}
      </div>
      <ul>
        {Object.entries(stats).map((e) => (
          <li key={e[0]}>
            {e[0]}: {e[1]}
          </li>
        ))}
      </ul>
      <div>
        <p>Overall weight: {weight} kg</p>
        <p>Overall height: {height} cm</p>
      </div>
    </div>
  );
};

export default TeamStats;
