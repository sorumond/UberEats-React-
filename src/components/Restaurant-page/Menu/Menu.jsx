import React from "react";
import "./Menu.css";
import { Dish } from "../Dish/Dish";
import { restaurantMenu } from "../infoRestaurant";

export function Menu() {
  return (
    <section className="menu">
      <div className="Menu__wrapper">
        {restaurantMenu.sections.map((section, i) => {
          return (
            <div>
              <span className={"Menu__type"} id={`${section.title}`}>
                {section.title}
              </span>
              <div className={"Menu__list"}>
                {section.itemUuids.map((item, i) => {
                  return <Dish id={item} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
