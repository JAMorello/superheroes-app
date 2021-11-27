import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeCurrentPage } from "../redux/features/pageSlice";
import LoginForm from "../components/Login/LoginForm";
import LoginImg from "../components/Login/LoginImg";
import Logo from "../components/Icons/Logo";

const Login = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeCurrentPage("Login"));
  });

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
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
