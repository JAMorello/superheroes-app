import HeroImg from "../Hero/HeroImg";
import HeroTitle from "../Hero/HeroTitle";
import HeroStats from "../Hero/HeroStats";
import DetailButton from "./DetailButton";
import RemoveButton from "./RemoveButton";

/*
ISSUES:
- Not all heroes cards result in the same height
*/

const TeamMember = ({ hero }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div
        className="card border-dark shadow p-2"
        style={{ maxWidth: "340px" }}
      >
        <div className="row g-0">
          <div className="col-md-4 text-center">
            <HeroImg url={hero.image.url} name={hero.name} origin="Home" />
            <div className="card-body">
              <HeroTitle
                name={hero.name}
                alignment={hero.biography.alignment}
              />
              <div className="d-flex d-sm-grid mt-4 justify-content-evenly ">
                <DetailButton hero={hero} />
                <RemoveButton hero={hero} />
              </div>
            </div>
          </div>

          <div className="col-sm-8">
            <div className="card-body">
              <h5 className="card-header text-center">Powerstats</h5>
              <ul className="list-group list-group-flush">
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
