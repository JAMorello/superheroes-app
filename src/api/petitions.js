import axios from "axios";

const postLogin = async (values, setIsDisabled) => {
  const url = "http://challenge-react.alkemy.org/";

  /* VALID DATA
  email = challenge@alkemy.org
  password = react
  */
  setIsDisabled(true);

  const res = { token: "", error: "", date: Date.now() };

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
  return res;
};

// SUPERHERO API
// ACCESS TOKEN: 1751652158357148
const accessToken = "1751652158357148";

const axiosInstance = axios.create({
  baseURL: `https://superheroapi.com/api.php/${accessToken}/search`,
});

const searchAPI = async (search) => {
  try {
    const response = await axiosInstance.get(`/${search}`);
    return response.data.results;
  } catch (error) {
    console.log(error.response);
    return null;
  }
};

export { postLogin, searchAPI };
