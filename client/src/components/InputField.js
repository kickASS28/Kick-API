import React from "react";
import classes from "./InputField.module.css";

const InputField = ({ id, value, changeHandler, error, type, label }) => {
  if (type === "submit") {
    return (
      <div className={classes.actions}>
        <input type="submit" value={value} />
      </div>
    );
  }
  return (
    <div className={classes.inputField}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={changeHandler} />
      {error && <span>{error}</span>}
    </div>
  );
};

export default InputField;
