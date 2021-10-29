const HeroImg = ({ hero, origin }) => {
  return (
    <img
      src={hero.image.url}
      alt={hero.name}
      className={`${
        origin === "Home" ? "img-fluid rounded-start" : "rounded"
      } border border-dark`}
      height={origin === "Search" && "250rem"}
      width={origin === "Search" && "100%"}
      object-fit={origin === "Search" && "cover"}
    />
  );
};

export default HeroImg;
