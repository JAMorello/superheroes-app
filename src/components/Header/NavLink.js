import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavLink = ({ goToPage }) => {
  const currentPage = useSelector((state) => state.page.currentPage);

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
