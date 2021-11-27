const HeroImg = ({ url, name, origin }) => {
  return (
    <img
      src={url}
      alt={name}
      className={`${
        origin === "Home" ? "img-fluid rounded-start" : "rounded"
      } border border-dark`}
      height={origin === "Search" ? "250rem" : ""}
      width={origin === "Search" ? "100%" : ""}
      object-fit={origin === "Search" ? "cover" : ""}
    />
  );
};

export default HeroImg;
