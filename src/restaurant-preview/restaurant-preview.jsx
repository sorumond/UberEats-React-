import React from 'react';
import './restaurant-preview.css';

export function RestaurantPreview() {
    return (<section className="restaurant-preview__background">
        <div className="restaurant-preview__wrapper--big">
            <div className="restaurant-preview restaurant-preview--big">
                <span className="restaurant-preview__name restaurant-preview__name--big">Трактир «Пушкин»</span>
                <span className="restaurant-preview__about restaurant-preview__about--big">₴₴₴ • Европейская</span>
                <span
                    className="restaurant-preview__delivery-time restaurant-preview__delivery-time--big">40-50 Min</span>
            </div>
        </div>
    </section>)
}