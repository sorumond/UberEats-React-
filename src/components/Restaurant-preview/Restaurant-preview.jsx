import React from "react";
import "./Restaurant-preview.css";
import { restaurantMenu } from "../Restaurant-page/infoRestaurant";

export function RestaurantPreview() {
  const background = `url(${restaurantMenu.largeImageUrl})`;
  return (
    <section
      className="Restaurant-preview__background"
      style={{ background: background, backgroundPosition: `center center` }}
    >
      <div className="Restaurant-preview__wrapper">
        <div className="restaurant-preview Restaurant-preview">
          <span className="Restaurant-preview__name Restaurant-preview__name">
            {restaurantMenu.title}
          </span>
          <span className="Restaurant-preview__about Restaurant-preview__about">
            {restaurantMenu.priceBucket}{" "}
            {restaurantMenu.categories.map(categorie => {
              return ` • ${categorie.name}`;
            })}{" "}
          </span>
          <span className="Restaurant-preview__delivery-time Restaurant-preview__delivery-time">
            {restaurantMenu.etaRange.min} - {restaurantMenu.etaRange.max} min
          </span>
        </div>
      </div>
    </section>
  );
}
