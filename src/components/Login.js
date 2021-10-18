import { Formik, Field, Form, ErrorMessage } from "formik";

const Login = () => {
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
      onSubmit={(values) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 200);
      }}
    >
      <Form>
        <label htmlFor="email">Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />

        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
};

export default Login;
