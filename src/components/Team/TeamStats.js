import { useState, useEffect } from "react";
import { initialStats } from "../utilities/stats.js";
import HeroStats from "../Hero/HeroStats";

const TeamStats = ({ team }) => {
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

  return (
    <div className="container my-4">
      <div className="justify-content-center">
        <div className="row">
          <div className="col text-center ">
            {/* // CARD GROUP */}
            <div className="card-group ">
              {/* // TEAM SPECIALITY AND OVERALLS CARD */}
              <div className="card text-dark bg-light">
                <div className="card-body">
                  <h5 className="card-header">Team Specialty</h5>
                  <ul className="list-group list-group-flush">
                    {team && (
                      <li className="list-group-item">{teamSpeciality}</li>
                    )}
                  </ul>
                  <h5 className="card-header">Overalls</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Weight: {weight} kg</li>
                    <li className="list-group-item">Height: {height} cm</li>
                    <li className="list-group-item"></li>
                  </ul>
                </div>
              </div>
              {/* // POWERSTATS CARD */}
              <div className="card text-dark bg-light">
                <div className="card-body">
                  <h5 className="card-header">Team Powerstats</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div className="row g-2">
                        <div className="col">
                          <h5 className="card-header">Primary</h5>
                          <ul className="list-group list-group-flush">
                            <HeroStats stats={stats} />
                          </ul>
                        </div>
                        <div className="col">
                          <h5 className="card-header">Secondary</h5>
                          <ul className="list-group list-group-flush">
                            <HeroStats stats={stats} slice={[3, 6]} />
                          </ul>
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
