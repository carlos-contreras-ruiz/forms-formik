import { useField } from "formik";

export const RadiobuttonInput = ({ label, ...props }) => {
  const [field] = useField({ ...props, type: "radio" });
  return (
    <div>
      <label>
        {label}
        <input type="radio" {...field} {...props} />
      </label>
    </div>
  );
};
