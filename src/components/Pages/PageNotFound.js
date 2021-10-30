import { Link } from "react-router-dom";
import { BiError } from "react-icons/bi";

const PageNotFound = ({ setCurrentPage }) => {
  setCurrentPage("Page404");
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="alert alert-info text-center" role="alert">
            <h4 className="alert-heading">
              <BiError width="24" height="24" /> Error 404: Page not found
            </h4>
            <p>The page you tried to go to does not exist!</p>
            <hr />
            <p className="mb-0">
              You may try going to our <Link to="/home"> Home page</Link> or our{" "}
              <Link to="/search">Search section</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
