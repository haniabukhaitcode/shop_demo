import React from "react";
import Styles from "./Checkbox.module.scss";

const Checkbox = props => {
  return (
    <label className={Styles.container}>
      {props.children}
      <input type="checkbox" defaultChecked={props.checked} />
      <span className={Styles.checkmark} />
    </label>
  );
};

export default Checkbox;
