import logo from "../../images/Logo.png";

const Logo = () => {
  return (
    <img
      src={logo}
      alt="Superheroes App"
      width="200"
      heigth="50"
      className="d-inline-block align-text-top"
    />
  );
};

export default Logo;
