import HeroImg from "../Hero/HeroImg";
import DetailButton from "./DetailButton";
import RemoveButton from "./RemoveButton";
import { getIcon, getAllegianceIcon } from "../utilities/icons.js";
/*
ISSUES:
- Not all heroes cards result in the same height
- In every hero card, DetailsButton always throw error at the first click. After that, works fine. There is a problem with Bootstrap.
*/

const TeamMember = ({ hero, removeFromTeam, setShowDetails }) => {
  const getStats = (stats) => {
    return Object.entries(stats).map((e) => (
      <li class="list-group-item">
        {getIcon(e[0])} {e[0].charAt(0).toUpperCase() + e[0].slice(1)}: {e[1]}
      </li>
    ));
  };

  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div
        className="card border-dark shadow p-2"
        style={{ "max-width": "340px" }}
      >
        <div class="row g-0">
          <div className="col-md-4 text-center">
            <HeroImg hero={hero} origin="Home" />
            <div className="card-body">
              {getAllegianceIcon(hero)}
              <h5 className="card-title">{hero.name}</h5>
              <div className="d-flex d-sm-grid mt-4 justify-content-evenly ">
                <DetailButton hero={hero} setShowDetails={setShowDetails} />
                <RemoveButton hero={hero} removeFromTeam={removeFromTeam} />
              </div>
            </div>
          </div>

          <div class="col-sm-8">
            <div className="card-body">
              <h5 class="card-header text-center">Powerstats</h5>
              <ul class="list-group list-group-flush">
                {getStats(hero.powerstats)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
