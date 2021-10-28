import { GiAngelWings, GiDevilMask } from "react-icons/gi";

const HeroItem = ({
  hero,
  addToTeam,
  checkExistence,
  checkAlignment,
  moreThanThree,
}) => {
  return (
    <div className={`col col-sm-6 col-md-4 ${moreThanThree ? "col-lg-3" : ""}`}>
      <div
        className="card border-dark shadow text-center p-2 h-70"
        style={{ width: "15rem" }}
      >
        <div className="card-img-top">
          <img
            src={hero.image.url}
            alt={hero.name}
            className="rounded border border-dark"
            height="250rem"
            width="100%"
            object-fit="cover"
          ></img>
          <div className="card-body">
            {hero.biography.alignment === "good" ? (
              <GiAngelWings color="blue" size="2em" />
            ) : (
              <GiDevilMask color="red" size="2em" />
            )}
            <h5 className="card-title">{hero.name}</h5>
          </div>
          <div className="d-grid">
            <button
              className="btn text-white fw-bold"
              style={{ backgroundColor: "#563091" }}
              disabled={checkExistence(hero) || checkAlignment(hero)}
              onClick={() => addToTeam(hero)}
            >
              {checkExistence(hero) || checkAlignment(hero) ? "On Team" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
