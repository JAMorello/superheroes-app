import { Link } from "react-router-dom";

const NavLink = ({ goToPage, currentPage }) => {
  return (
    <li className="nav-item text-light">
      <Link
        to={`/${goToPage.toLowerCase()}`}
        className={`nav-link ${currentPage === `${goToPage}` ? "active" : ""}`}
      >
        {`${goToPage}`}
      </Link>
    </li>
  );
};

export default NavLink;
