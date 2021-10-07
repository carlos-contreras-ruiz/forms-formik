import { Formik, Form, Field, ErrorMessage } from "formik";
import { CheckboxInput } from "./components/CheckboxInput";
import { RadiobuttonInput } from "./components/RadiobuttonInput";
import { SelectInput } from "./components/SelectInput";
import { TextInput } from "./components/TextInput";

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
  if (!values.selectc) {
    errors.selectc = "Requerido select";
  }
  if (!values.radio2) {
    errors.radio2 = "Requerido radio";
  }

  return errors;
};

function App() {
  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        email: "",
        selectc: "",
        radio2: "",
      }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="Nombre" />
        {/* <label>Nombre</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" /> 
        <label>Appellido</label>
        <Field type="text" name="lastname" />
        <ErrorMessage name="lastname" />*/}
        <TextInput name="lastname" label="Apellido" />
        <br />
        <label>Email</label>
        <Field type="text" name="email" />
        <ErrorMessage name="email" />
        <br />
        <label>Otros campos</label>
        <Field type="text" as="textarea" className="inputClass" name="area" />
        {/* <Field type="text" as="select" className="inputClass" name="select">
          <option value="1">uno</option>
          <option value="2">dos</option>
          <option value="3">tres</option>
        </Field> */}

        <SelectInput name="selectc" label="Seleccionnnn">
          <option value="">Seleccione</option>
          <option value="1">uno</option>
          <option value="2">dos</option>
          <option value="3">tres</option>
        </SelectInput>
        {/* <Field type="radio" name="rrrr" className="inputClass" value="One" />
        <Field type="radio" name="rrrr" className="inputClass" value="Two" /> */}

        <RadiobuttonInput name="radio2" label="Chanchito1" value="Chanchito1" />
        <RadiobuttonInput name="radio2" label="Chanchito2" value="Chanchito2" />
        <RadiobuttonInput name="radio2" label="Chanchito3" value="Chanchito3" />
        <RadiobuttonInput name="radio2" label="Chanchito4" value="Chanchito4" />
        <ErrorMessage name="radio2" />

        <CheckboxInput label="Aceptar terminos" name="checkbox1" />

        <br />
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
