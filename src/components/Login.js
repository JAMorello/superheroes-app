import LoginForm from "./Login/LoginForm";

const Login = ({ setResponse, setCurrentPage }) => {
  setCurrentPage("Login");

  return <LoginForm setResponse={setResponse} />;
};

export default Login;
