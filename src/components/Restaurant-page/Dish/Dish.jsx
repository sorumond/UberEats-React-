import React from "react";
import "./Dish.css";
import dishImage from "./image/dish_1.png";
import { restaurantMenu } from "../infoRestaurant";

export function Dish(props) {
  const image = restaurantMenu.items[props.id].imageUrl;
  return (
    <div className="Dish">
      <div className="Dish__about">
        <div className="Dish__header">
          <span className="Dish__name">
            {restaurantMenu.items[props.id].title}
          </span>
          <span className="Dish__recipe">
            {restaurantMenu.items[props.id].itemDescription}
          </span>
        </div>
        <div className="dish__footer">
          <span className="dish__price">
            {restaurantMenu.items[props.id].price / 100}₴
          </span>
        </div>
      </div>
      {image && <img src={image} alt="" className="Dish__photo" />}
    </div>
  );
}
