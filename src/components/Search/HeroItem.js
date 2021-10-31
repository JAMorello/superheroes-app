import HeroImg from "../Hero/HeroImg";
import HeroTitle from "../Hero/HeroTitle";
import AddButton from "./AddButton";

const HeroItem = ({
  hero,
  addToTeam,
  checkExistence,
  checkAlignment,
  memberQuantity,
}) => {
  return (
    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
      <div
        className="card border-dark shadow text-center p-2 h-70"
        style={{ width: "15rem" }}
      >
        <div className="card-img-top">
          <HeroImg hero={hero} origin="Search" />
          <div className="card-body">
            <HeroTitle hero={hero} />
          </div>
          <AddButton
            hero={hero}
            checkExistence={checkExistence}
            checkAlignment={checkAlignment}
            memberQuantity={memberQuantity}
            addToTeam={addToTeam}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
