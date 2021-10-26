import { Link, useHistory } from "react-router-dom";
import Logo from "../images/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

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
        <Link to="/home">
          <img
            src={Logo}
            alt="Superheroes App"
            width="200"
            height="50"
            className="d-inline-block align-text-top"
          />
        </Link>
        <div className="collapse navbar-collapse" id="togglerMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item text-light">
              <Link
                to="/home"
                className={`nav-link ${currentPage === "Home" ? "active" : ""}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item text-light">
              <Link
                to="/search"
                className={`nav-link ${
                  currentPage === "Search" ? "active" : ""
                }`}
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              {!token ? (
                <button
                  onClick={() => history.push("/login")}
                  className="btn btn-outline-success"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={handleLogout}
                  className="btn btn-outline-success"
                >
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
