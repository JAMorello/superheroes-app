import { useState, useEffect } from "react";
import { BiBrain, BiWind } from "react-icons/bi";
import { IoBarbellOutline } from "react-icons/io5";
import { GiBrokenBone, GiMagicPalm, GiPunchBlast } from "react-icons/gi";

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
        (sum, sumHero) =>
          sum +
          parseInt(
            sumHero.powerstats[stat] !== "null" ? sumHero.powerstats[stat] : 0
          ),
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

    setWeight(Math.round(reduceMeasure(team, "weight")));
    setHeight(Math.round(reduceMeasure(team, "height")));
  }, [team]);

  const getIcon = (stat) => {
    switch (stat) {
      case "Intelligence":
        return <BiBrain />;
      case "Strength":
        return <IoBarbellOutline />;
      case "Speed":
        return <BiWind />;
      case "Durability":
        return <GiBrokenBone />;
      case "Power":
        return <GiMagicPalm />;
      case "Combat":
        return <GiPunchBlast />;
      default:
        return "";
    }
  };

  const getStats = (stats, slice = [0, 3]) => {
    return Object.entries(stats)
      .slice(slice[0], slice[1])
      .map((e) => (
        <li class="list-group-item">
          {getIcon(e[0])} {e[0]}: {e[1]}
        </li>
      ));
  };

  return (
    <div className="container my-4">
      <div className="justify-content-center">
        <div className="row">
          <div className="col text-center ">
            {/* // CARD GROUP */}
            <div class="card-group ">
              {/* // TEAM SPECIALITY AND OVERALLS CARD */}
              <div class="card text-dark bg-light">
                <div class="card-body">
                  <h5 class="card-header">Team Specialty</h5>
                  <ul class="list-group list-group-flush">
                    {team && <li class="list-group-item">{teamSpeciality}</li>}
                  </ul>
                  <h5 class="card-header">Overalls</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Weight: {weight} kg</li>
                    <li class="list-group-item">Height: {height} cm</li>
                    <li class="list-group-item"></li>
                  </ul>
                </div>
              </div>
              {/* // POWERSTATS CARD */}
              <div class="card text-dark bg-light">
                <div class="card-body">
                  <h5 class="card-header">Team Powerstats</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <div className="row g-2">
                        <div className="col">
                          <h5 class="card-header">Primary</h5>
                          {getStats(stats)}
                        </div>
                        <div className="col">
                          <h5 class="card-header">Secondary</h5>
                          {getStats(stats, [3, 6])}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamStats;
