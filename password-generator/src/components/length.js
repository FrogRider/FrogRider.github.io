import React from "react";

function Length(props) {
  return (
    <div className="pwd-generator__row pwd-generator__row_length">
      <input
        type="number"
        id="length"
        min="4"
        max="20"
        defaultValue="20"
        onChange={e => {
          props.update(e.target.value);
        }}
      />
      <p>Length</p>
    </div>
  );
}

export default Length;
