import React from "react";
import BasketImage from "./image/basket.svg";
import "./Basket.css";

export function Basket() {
  return (
    <div className="Basket">
      <div className="Basket__header">
        <div>
          <img className={"Basket__icon"} src={BasketImage} />
          Your Order
        </div>
        <button className="Basket__close-button">X</button>
      </div>
    </div>
  );
}
