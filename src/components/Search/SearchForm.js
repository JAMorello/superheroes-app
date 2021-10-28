import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { searchAPI } from "../../api/petitions";

const SearchForm = ({ setResults }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col col-sm-8 col-md-6 col-lg-4">
          <Formik
            initialValues={{ hero: "" }}
            onSubmit={async (values) => {
              setIsDisabled(true);
              const results = await searchAPI(values.hero);
              setResults(results);
              setIsDisabled(false);
            }}
          >
            <Form>
              <div className="input-group mb-3">
                <label
                  htmlFor="hero"
                  className="input-group-text visually-hidden"
                  id="search-bar"
                >
                  Enter a hero name
                </label>
                <Field
                  name="hero"
                  type="hero"
                  placeholder="Enter a hero name"
                  className="form-control"
                  aria-label="Superhero"
                  aria-describedby="search-bar"
                />
                <button
                  type="submit"
                  disabled={isDisabled}
                  className="btn btn-secondary"
                  id="search-bar"
                >
                  Search
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
