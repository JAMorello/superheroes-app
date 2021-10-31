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

// SUPERHERO API
// ACCESS TOKEN: 1751652158357148
const accessToken = "1751652158357148";

// CORS ISSUE WORKAROUND
// Go check: https://github.com/Rob--W/cors-anywhere
const corsHelper = "https://cors-anywhere.herokuapp.com/";
/*
Due to issues related to cross-origin requests, for the app running correctly, the user has to go to the [CORS everywere app](https://cors-anywhere.herokuapp.com/corsdemo) and click on the button that says "Request temporary access to the demo server". 
**This will allow making successfull `GET` requests to the SuperHero API.**
*/

const axiosInstance = axios.create({
  baseURL: `${corsHelper}https://superheroapi.com/api/${accessToken}/search`,
});

const searchAPI = async (search) => {
  try {
    const response = await axiosInstance.get(`/${search}`);
    return response.data.results;
  } catch (error) {
    console.log(error.response);
  }
};

export { postLogin, searchAPI };
