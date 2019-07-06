import React from "react";
import "./Personal-area-bar.css";
import basket from "./image/basket.svg";

export function PersonalAreaBar(props) {
  return (
    <div className="Personal-area-bar">
      <a href="javascript:void(0)" className="Personal-area-bar__sign-in">
        Sign in
      </a>
      <div className="Personal-area-bar__register--wrapper">
        <a href="javascript:void(0)" className="Personal-area-bar__register">
          Register
        </a>
      </div>
      <a
        href="javascript: void (0)"
        className="personal-area-bar__basket"
        onClick={() => {
          props.open(true);
        }}
      >
        <img
          src={basket}
          alt="basket"
          className="personal-area-bar__basket-image"
        />
      </a>
    </div>
  );
}
