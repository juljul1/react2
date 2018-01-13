import React from "react";
import  "./styles.css";

export default ({ onSubmit, onChange }) => {
  let input = null;

  return (
    <div>
      <form
        onSubmit={evt => {
          evt.preventDefault(); onSubmit(input.value);
        }}
      ><h2>Search:</h2>
        <input className="form__input" type="text"
               ref={node => (input = node)}
        />
      </form>
    </div>
  );
};
