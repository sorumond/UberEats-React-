import React from "react";
import "./Dish.css";
import { restaurantMenu } from "../infoRestaurant";

export function Dish(props) {
  const image = restaurantMenu.items[props.id].imageUrl;

  function addToBasket() {
    let isDishInBasket = props.basketOrders.findIndex(basketOrder => {
      return basketOrder.dishInfo.uuid === props.id;
    });
    console.log(isDishInBasket);
    if (isDishInBasket !== -1) {
      props.basketOrders[isDishInBasket].count++;
      return;
    } else {
      props.basketOrders.push({
        dishInfo: restaurantMenu.items[props.id],
        count: 1
      });
    }
  }

  return (
    <div
      className="Dish"
      onClick={() => {
        addToBasket();
      }}
    >
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
