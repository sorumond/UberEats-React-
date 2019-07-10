import React from "react";
import "./Proposion-type.css";
import { Container } from "../../../Container/Container";

export function PropositionType(props) {
  const restaurantMenu = props.restaurantMenu;
  return (
    <section className="Proposition-type">
      <Container>
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
      </Container>
    </section>
  );
}
