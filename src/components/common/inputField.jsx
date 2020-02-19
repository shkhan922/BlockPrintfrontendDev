import React from "react";
import { useField } from "formik";
import Input from "./input";

export default ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className="col-md-6">
      <Input label={label} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
