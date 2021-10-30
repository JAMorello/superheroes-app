import HeroImg from "../Hero/HeroImg";
import HeroTitle from "../Hero/HeroTitle";
import DetailButton from "./DetailButton";
import RemoveButton from "./RemoveButton";
import HeroStats from "../Hero/HeroStats";
/*
ISSUES:
- Not all heroes cards result in the same height
*/

const TeamMember = ({ hero, removeFromTeam, setShowDetails }) => {
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
              <HeroTitle hero={hero} />
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
                <HeroStats
                  stats={hero.powerstats}
                  slice={[0, hero.powerstats.length]}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
