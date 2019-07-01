import React from "react";
import "./Restaurant-preview.css";

export function RestaurantPreview() {
  return (
    <section className="Restaurant-preview__background">
      <div className="Restaurant-preview__wrapper">
        <div className="restaurant-preview Restaurant-preview">
          <span className="Restaurant-preview__name Restaurant-preview__name">
            Трактир «Пушкин»
          </span>
          <span className="Restaurant-preview__about Restaurant-preview__about">
            ₴₴₴ • Европейская
          </span>
          <span className="Restaurant-preview__delivery-time Restaurant-preview__delivery-time">
            40-50 Min
          </span>
        </div>
      </div>
    </section>
  );
}
