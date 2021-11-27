import HeroImg from "../Hero/HeroImg";
import HeroTitle from "../Hero/HeroTitle";
import AddButton from "./AddButton";

const HeroItem = ({ hero }) => {
  return (
    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
      <div
        className="card border-dark shadow text-center p-2 h-70"
        style={{ width: "15rem" }}
      >
        <div className="card-img-top">
          <HeroImg url={hero.image.url} name={hero.name} origin="Search" />
          <div className="card-body">
            <HeroTitle name={hero.name} alignment={hero.biography.alignment} />
          </div>
          <AddButton hero={hero} />
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
