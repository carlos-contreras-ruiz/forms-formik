import { useField } from "formik";

export const CheckboxInput = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label>
        {label}
        <input type="checkbox" {...field} {...props} />
      </label>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};
