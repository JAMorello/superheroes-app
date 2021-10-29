import LoginForm from "./Login/LoginForm";
import Logo from "../images/Logo.png";
import superheroes from "../images/superheroes.jpg";

/*
TODO:
- Alerts when there is an error while login
*/

const Login = ({ setResponse, setCurrentPage }) => {
  setCurrentPage("Login");

  return (
    <div className="container-fluid w-75 bg-white mt-5 rounded shadow">
      <div className="row align-items-stretch rounded">
        <div
          className="col d-none d-sm-block col-md-5 col-lg-5 col-xl-6 rounded"
          style={{
            backgroundImage: `url(${superheroes})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="col p-5 rounded-end">
          <div className="row">
            <div className="col d-none d-sm-block">
              <img src={Logo} alt="Superheroes App" width="200" heigth="50" />
            </div>
            <div className="col">
              <h2 className="fw-bold text-center pt-2 pb-3">Welcome</h2>
            </div>
          </div>
          <LoginForm setResponse={setResponse} />
        </div>
      </div>
    </div>
  );
};

export default Login;
