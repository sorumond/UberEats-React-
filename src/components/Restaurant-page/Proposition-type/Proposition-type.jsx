import React from "react";
import "./Proposion-type.css";
import { restaurantMenu } from "../infoRestaurant";

export function PropositionType() {
  return (
    <section className="Proposition-type">
      <div className="Proposition-type__wrapper">
        <ul className="Proposition-type__list">
          {restaurantMenu.sections.map((section, i) => {
            return (
              <a
                href={`#${section.title}`}
                className={"Proposition-type__link"}
                key={section.title}
              >
                <li className="Proposition-type__item">{section.title}</li>
              </a>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
