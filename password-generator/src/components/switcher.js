import React from "react";
// import "../style/switcher.scss";

let Switcher = props => {
  return (
    <div className="row">
      <input
        type="checkbox"
        onChange={e => {
          props.update();
        }}
        id={props.id}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default Switcher;
