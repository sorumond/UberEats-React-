import React from "react";
import "./Search.css";
import search from "./image/search.svg";
import { Throttle } from "react-throttle";

export function Search(props) {
  function onInputHandler(event) {
    props.updateSearch(event.target.value);
  }
  return (
    <div className="Search">
      <img src={search} alt="" className="Search__button" />
      <input
        type="text"
        className="Search__text"
        placeholder="Search for restaurant or cuisine"
        onInput={onInputHandler}
      />
    </div>
  );
}
