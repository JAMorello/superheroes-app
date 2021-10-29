import { GiHamburgerMenu } from "react-icons/gi";

const HamburgerMenu = () => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#togglerMenu"
      aria-controls="togglerMenu"
      aria-expanded={false}
      aria-label="Toggle navigation"
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default HamburgerMenu;
