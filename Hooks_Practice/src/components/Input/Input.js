import React from "react";
import classes from "./Input.module.css";
const Input = (props) => {
  <div>
    <div
      className={`${classes.control} ${
        emailState.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor="email">E-Mail</label>
      <input
        type="email"
        id="email"
        value={emailState.value}
        onChange={emailChangeHandler}
        onBlur={validateEmailHandler}
      />
    </div>
    <div
      className={`${classes.control} ${
        passwordState.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={passwordState.value}
        onChange={passwordChangeHandler}
        onBlur={validatePasswordHandler}
      />
    </div>
  </div>;
};
export default Input;
