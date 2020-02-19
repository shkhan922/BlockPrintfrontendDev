import React from "react";

export default ({ name, type = "text", id, label, ...restProps }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        className="form-control"
        id={id}
        placeholder={label}
        {...restProps}
      />
    </div>
  );
};
