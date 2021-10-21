import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { searchAPI } from "../../api/petitions";

const SearchForm = ({ setResults }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <Formik
      initialValues={{ hero: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.hero) {
          errors.hero = "Please, enter a search term";
        } else if (values.hero.length < 4) {
          errors.hero = "The search term must have at least 4 characters";
        }

        return errors;
      }}
      onSubmit={async (values) => {
        setIsDisabled(true);
        const results = await searchAPI(values.hero);
        setResults(results);
        setIsDisabled(false);
      }}
    >
      <Form>
        <label htmlFor="hero">Enter a hero name</label>
        <Field name="hero" type="hero" />
        <ErrorMessage name="hero" />
        <button type="submit" disabled={isDisabled}>
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
