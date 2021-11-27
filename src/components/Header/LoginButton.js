import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateResponse } from "../../redux/features/responseSlice";

const LoginButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.response.token);

  // LOGOUT
  // Set token to an empty string and redirect to login
  const handleLogout = () => {
    localStorage.setItem("token", "");
    dispatch(updateResponse({ token: "", error: "", date: Date.now() }));
    history.push("/login");
  };

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
