import React from 'react';
import './restaurant-preview.css';

export function RestaurantPreview() {
    return (<div className="restaurant-preview">
        <p className="restaurant-preview__name">Макдональдс</p>
        <p className="restaurant-preview__about">₴₴ • Бургеры</p>
        <p className="restaurant-preview__delivery-time">25-35 Min</p>
    </div>)
}