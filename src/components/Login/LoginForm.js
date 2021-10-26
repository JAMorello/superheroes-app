import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { postLogin } from "../../api/petitions";

const LoginForm = ({ setResponse }) => {
  // State to control the "Send" button. Disable when is submiting a HTTP
  // petition
  const [isDisabled, setIsDisabled] = useState(false);

  let history = useHistory(); // To redirect

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
        await postLogin(values, setIsDisabled, setResponse);
        history.push("/home");
      }}
    >
      <Form>
        <label htmlFor="email">Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />

        <button type="submit" disabled={isDisabled}>
          Send
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
