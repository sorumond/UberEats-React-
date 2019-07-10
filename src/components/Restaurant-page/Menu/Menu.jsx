import React, { useState, useEffect } from "react";
import "./Menu.css";
import { Dish } from "../Dish/Dish";
// import { restaurantMenu } from "../infoRestaurant";

export function Menu(props) {
  console.log(props.restaurantMenu);
  return (
    <section className="menu">
      <div className="Menu__wrapper">
        {props.restaurantMenu
          ? props.restaurantMenu.sections.map((section, i) => {
              return (
                <div key={section.uuid}>
                  <span className={"Menu__type"} id={`${section.title}`}>
                    {section.title}
                  </span>
                  <div className={"Menu__list"}>
                    {section.itemUuids.map((item, i) => {
                      console.log("item=", item);
                      return (
                        <Dish
                          restaurantMenu={props.restaurantMenu}
                          id={item}
                          basketOrders={props.basketOrders}
                          key={item}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })
          : ""}
        ;
      </div>
    </section>
  );
}
