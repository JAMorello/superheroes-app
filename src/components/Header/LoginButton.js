const LoginButton = ({ token, history, handleLogout }) => {
  return (
    <li className="nav-item">
      {!token ? (
        <button
          onClick={() => history.push("/login")}
          className="btn btn-outline-success"
        >
          Login
        </button>
      ) : (
        <button onClick={handleLogout} className="btn btn-outline-danger">
          Logout
        </button>
      )}
    </li>
  );
};

export default LoginButton;
