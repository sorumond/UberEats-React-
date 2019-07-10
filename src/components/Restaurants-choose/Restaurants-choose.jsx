import React from "react";
import "./Restaurants-choose.css";
import { Link } from "react-router-dom";

export function RestaurantChoose(props) {
  return (
    <div className="Restaurants-choose">
      <Link
        to={`restaurant-page/${props.uuid}`}
        className="Restaurants-choose__link"
      >
        <div className="restaurants-choose__header">
          <img
            src={props.imageUrl}
            className="Restaurants-choose__photo"
            alt={props.title}
          />
        </div>
        <div className="restaurants-choose__footer">
          <p className="Restaurants-choose__name">{props.title}</p>
          <p className="Restaurants-choose__about">
            {props.priceBucket}{" "}
            {props.categories.map(categorie => {
              return ` • ${categorie.name}`;
            })}{" "}
          </p>
          <p className="Restaurants-choose__delivery-time">
            {props.etaRange.min} - {props.etaRange.max} min
          </p>
        </div>
      </Link>
    </div>
  );
}
