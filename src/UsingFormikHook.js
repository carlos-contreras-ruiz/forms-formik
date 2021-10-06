import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Requerido";
  }
  if (!values.lastname) {
    errors.lastname = "Requerido lastname";
  }
  if (!values.email) {
    errors.email = "Requerido email";
  }
  if (values.email.length < 3) {
    errors.email = "Email mas de 3";
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
      <input type="text" {...formik.getFieldProps("name")} />
      <br />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <label>Appeliido</label>
      <input type="text" {...formik.getFieldProps("lastname")} />
      <br />
      {formik.touched.lastname && formik.errors.lastname ? (
        <div>{formik.errors.lastname}</div>
      ) : null}
      <label>Email</label>
      <input
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
