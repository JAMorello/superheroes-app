import { Link, useHistory } from "react-router-dom";

const Header = ({ token, setResponse }) => {
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
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>
      <h1>Superheroes App</h1>
      {!token ? (
        <button onClick={() => history.push("/login")}>Login</button>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
};

export default Header;
