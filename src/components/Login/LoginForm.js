import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateResponse } from "../../redux/features/responseSlice";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { postLogin } from "../../api/petitions";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [res, setRes] = useState(null);
  const history = useHistory(); // to redirect

  useEffect(() => {
    dispatch(updateResponse(res));
    if (res && res.token) {
      localStorage.setItem("token", res.token);
      history.push("/home");
    }
  }, [res, dispatch, history]);

  // State to control the "Send" button. Disable when is submiting a HTTP
  // petition
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Please, enter your email";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.password) {
          errors.password = "Please, enter your password";
        }

        return errors;
      }}
      onSubmit={async (values) => {
        const response = await postLogin(values, setIsDisabled);
        setRes(response);
      }}
    >
      <Form>
        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <Field name="email" type="email" className="form-control" />
          <ErrorMessage
            name="email"
            component="p"
            className="fst-italic text-danger"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <Field name="password" type="password" className="form-control" />
          <ErrorMessage
            name="password"
            component="p"
            className="fst-italic text-danger"
          />
        </div>

        <div className="d-grid">
          <button
            type="submit"
            disabled={isDisabled}
            className="btn text-white fw-bold"
            style={{ backgroundColor: "#563091" }}
          >
            Send
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
