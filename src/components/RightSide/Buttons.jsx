import React from "react";
import  "./styles.css";

const Buttons = ({ Top, Up, Popular }) => {
  return (
    <div className="Form__buttons">

      <button onClick={Top}>Top rated</button>
      <button onClick={Up}>Upcoming</button>
      <button onClick={Popular}>Popular</button>

    </div>
  );
};

export default Buttons;
