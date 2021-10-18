import { Link } from "react-router-dom";

const Header = () => {
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
      <button>
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
};

export default Header;
