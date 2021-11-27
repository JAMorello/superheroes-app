import { useSelector } from "react-redux";

const HeroDetail = () => {
  const hero = useSelector((state) => state.details);
  if (!hero) return null;

  return (
    <div
      className="modal fade"
      id="heroDetailModal"
      tabIndex="-1"
      aria-labelledby="heroDetailModal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="heroDetailModal">
              Details of {hero.name}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <table className="table table-striped table-bordered">
              <tbody>
                <tr>
                  <th scope="row">Full Name</th>
                  <td>{hero.biography["full-name"]}</td>
                </tr>
                <tr>
                  <th scope="row">Alias</th>
                  <td>{hero.biography.aliases.join(" - ")}</td>
                </tr>
                <tr>
                  <th scope="row">Height</th>
                  <td>{hero.appearance.height[1]}</td>
                </tr>
                <tr>
                  <th scope="row">Weight</th>
                  <td>{hero.appearance.weight[1]}</td>
                </tr>
                <tr>
                  <th scope="row">Eye color</th>
                  <td>{hero.appearance["eye-color"]}</td>
                </tr>
                <tr>
                  <th scope="row">Hair color</th>
                  <td>{hero.appearance["hair-color"]}</td>
                </tr>
                <tr>
                  <th scope="row">Workplace</th>
                  <td>{hero.work.base}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;
