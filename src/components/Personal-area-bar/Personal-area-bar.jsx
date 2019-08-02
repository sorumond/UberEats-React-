import React from "react";
import "./Personal-area-bar.css";
import basket from "./image/basket.svg";

export function PersonalAreaBar(props) {
  return (
    <div className="Personal-area-bar">
      {/*<button className="Personal-area-bar__sign-in">Sign in</button>*/}
      {/*<div className="Personal-area-bar__register--wrapper">*/}
      {/*  <button className="Personal-area-bar__register">Register</button>*/}
      {/*</div>*/}
      <button
        className="Personal-area-bar__basket"
        onClick={() => {
          props.open(true);
        }}
      >
        <img
          src={basket}
          alt="basket"
          className="Personal-area-bar__basket-image"
        />
      </button>
    </div>
  );
}
