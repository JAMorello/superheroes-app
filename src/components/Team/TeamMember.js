import { getIcon, getAllegianceIcon } from "../utilities/icons.js";
/*
ISSUES:
- Not all heroes cards result in the same height
*/

const TeamMember = ({ hero, removeFromTeam, setShowDetails, modalID }) => {
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
            <img
              src={hero.image.url}
              alt={hero.name}
              className="img-fluid rounded-start border border-dark"
            ></img>
            <div className="card-body">
              {getAllegianceIcon(hero)}
              <h5 className="card-title">{hero.name}</h5>
              <div className="d-flex d-sm-grid mt-4 justify-content-evenly ">
                <button
                  className="btn text-white fw-bold "
                  style={{ backgroundColor: "#7DDE33" }}
                  onClick={() => setShowDetails(hero)}
                  data-bs-toggle="modal"
                  data-bs-target={`#${modalID}`}
                >
                  Details
                </button>
                <button
                  className="btn text-white fw-bold mt-sm-2"
                  style={{ backgroundColor: "#563091" }}
                  onClick={() => removeFromTeam(hero)}
                >
                  Remove
                </button>
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
