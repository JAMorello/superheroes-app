import axios from "axios";

const postLogin = async (values, setIsDisabled, setResponse) => {
  const url = "http://challenge-react.alkemy.org/";

  /* VALID DATA
  email = challenge@alkemy.org
  password = react
  */
  setIsDisabled(true);

  const res = { token: "", error: "" };

  try {
    const response = await axios.post(url, {
      email: values.email,
      password: values.password,
    });
    res.token = response.data.token;
  } catch (error) {
    if (error.response.status === 401) {
      // WRONG CREDENTIALS
      res.error = error.response.data.error;
    } else if (error.response.status === 404) {
      res.error = "Page not Found";
    } else if (error.request) {
      res.error = "Request was made but got no response";
    } else {
      console.log(error);
    }
  }
  setIsDisabled(false);
  setResponse(res);
};

export default postLogin;
