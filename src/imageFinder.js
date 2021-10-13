import { Formik, Form, Field } from "formik";
import { useState } from "react";
import "./header.css";
import "./content.css";

function App() {
  const [photos, setphotos] = useState([]);
  console.log(photos);

  const callApi = async (values) => {
    console.log(values);
    const APIKEY = "217cabb933b0898f3500da3a6d9bd013";
    const resp = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${values.search}`
    );
    const data = await resp.json();
    setphotos(data.results);
  };

  const getUri = (poster_path) =>
    `https://image.tmdb.org/t/p/w500${poster_path}`;

  const open = (url) => window.open(url);

  return (
    <div>
      <header>
        <Formik initialValues={{ search: "" }} onSubmit={callApi}>
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
      <div className="container">
        <div className="center">
          {photos.map((movie) => (
            <article
              key={movie.title}
              onClick={() =>
                open("https://developers.themoviedb.org/3/search/search-movies")
              }
            >
              <img alt={movie.title} src={getUri(movie.poster_path)} />
              <p>{movie.overview}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
