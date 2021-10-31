import LoginForm from "../Login/LoginForm";
import LoginImg from "../Login/LoginImg";
import Logo from "../Icons/Logo";
/*
TODO:
- Alerts when there is an error while login
*/

const Login = ({ setResponse, setCurrentPage }) => {
  setCurrentPage("Login");

  return (
    <div className="container-fluid w-75 bg-white mt-5 rounded shadow">
      <div className="row align-items-stretch rounded">
        <LoginImg />
        <div className="col p-5 rounded-end">
          <div className="row">
            <div className="col d-none d-sm-block">
              <Logo />
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
