import React from "react";

const Switcher = props => (
  <label className="pwd-generator__row">
    <input className="pwd-generator__default-checkbox" type="checkbox" onChange={props.update} checked={props.checked} />
    {props.label}
    <span className="pwd-generator__custom-checkbox"></span>
  </label>
);

export default Switcher;
