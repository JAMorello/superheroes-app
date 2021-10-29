import HeroImg from "../Hero/HeroImg";
import HeroTitle from "../Hero/HeroTitle";

const HeroItem = ({
  hero,
  addToTeam,
  checkExistence,
  checkAlignment,
  moreThanThree,
  memberQuantity,
}) => {
  return (
    <div className={`col col-sm-6 col-md-4 ${moreThanThree ? "col-lg-3" : ""}`}>
      <div
        className="card border-dark shadow text-center p-2 h-70"
        style={{ width: "15rem" }}
      >
        <div className="card-img-top">
          <HeroImg hero={hero} origin="Search" />
          <div className="card-body">
            <HeroTitle hero={hero} />
          </div>
          <div className="d-grid">
            <button
              className="btn text-white fw-bold"
              style={{
                backgroundColor: `#${
                  checkExistence(hero) ? "7DDE33" : "563091"
                }`,
              }}
              disabled={checkExistence(hero) || checkAlignment(hero)}
              onClick={() => addToTeam(hero)}
            >
              {memberQuantity === 6
                ? "Team Filled"
                : checkExistence(hero)
                ? "On Team"
                : checkAlignment(hero)
                ? "Axis filled"
                : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
