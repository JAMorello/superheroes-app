import { Link, useHistory } from "react-router-dom";
import Logo from "./Icons/Logo";
import HamburgerMenu from "./Header/HamburgerMenu";
import NavLink from "./Header/NavLink";
import LoginButton from "./Header/LoginButton";

/*
ISSUE
- While in mobile, the menu button can't collapse once clicked and extended
*/

const Header = ({ token, setResponse, currentPage }) => {
  const history = useHistory(); // To redirect
  // LOGOUT
  // Set token to an empty string and redirect to login
  const handleLogout = () => {
    setResponse({ token: "", error: "" });
    localStorage.setItem("token", "");
    history.push("/login");
  };

  /* 
  This component consist on four elements: 
    - two <li> that redirect to Home or Search in case that the login token exist 
    - the logo of the app
    - and the button that takes the user to the login page (that same button turns to a Logout one if the user is already loged)
  */
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <HamburgerMenu />
        <Link to="/home">
          <Logo />
        </Link>
        <div className="collapse navbar-collapse" id="togglerMenu">
          <ul className="navbar-nav ms-auto">
            <NavLink goToPage="Home" currentPage={currentPage} />
            <NavLink goToPage="Search" currentPage={currentPage} />
            <LoginButton
              token={token}
              history={history}
              handleLogout={handleLogout}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
