import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Icons/Logo";
import HamburgerMenu from "../components/Header/HamburgerMenu";
import NavLink from "../components/Header/NavLink";
import LoginButton from "../components/Header/LoginButton";
import "../components/Header/Navbar.css";

/*
ISSUE
- While in mobile, the menu button can't collapse once clicked and extended
*/

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <div onClick={() => setShowMenu(!showMenu)}>
          <HamburgerMenu />
        </div>
        <Link to="/home">
          <Logo />
        </Link>
        <div
          className={`collapse navbar-collapse ${
            showMenu ? "hidden" : "active"
          }`}
        >
          <ul className="navbar-nav ms-auto">
            <NavLink goToPage="Home" />
            <NavLink goToPage="Search" />
            <LoginButton />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
