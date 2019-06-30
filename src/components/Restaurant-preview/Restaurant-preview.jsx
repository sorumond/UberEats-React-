import React from 'react';
import './Restaurant-preview_big.css';

export function RestaurantPreview() {
    return (<section className="Restaurant-preview__background">
        <div className="Restaurant-preview__wrapper--big">
            <div className="restaurant-preview Restaurant-preview--big">
                <span className="Restaurant-preview__name Restaurant-preview__name--big">Трактир «Пушкин»</span>
                <span className="Restaurant-preview__about Restaurant-preview__about--big">₴₴₴ • Европейская</span>
                <span
                    className="Restaurant-preview__delivery-time Restaurant-preview__delivery-time--big">40-50 Min</span>
            </div>
        </div>
    </section>)
}