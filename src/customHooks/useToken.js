import { useHistory } from "react-router-dom";

const useToken = () => {
  const history = useHistory();
  // Get the token from local storage
  const token = localStorage.getItem("token");

  // TODO: Throw message error and redirect if token is empty
  if (!token) {
    history.push("/login");
  }
};

export default useToken;
