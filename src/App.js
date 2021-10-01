import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Requerido";
  }

  return errors;
};

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
    },
    validate,
    onSubmit: (values) => console.log(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <br />
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <label>Appeliido</label>
      <input
        name="lastname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastname}
      />
      <label>Email</label>
      <input
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
