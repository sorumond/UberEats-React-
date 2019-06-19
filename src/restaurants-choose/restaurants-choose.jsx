import React from 'react';
import './restaurants-choose.css';
import MCDonalds from './image/MCdonalds.png';
import {RestaurantPreview} from "../restaurant-preview/restaurant-preview";

const restaurants = [
    {
        title: 'MCDonalds',
        about: '₴₴ • Бургеры',
        time: '25-35min',
    }
];

export function RestaurantChoose(props) {
    return (<div className="restaurants-choose__list">
            <div className="restaurants-choose__wrapper">
                <a href="restaurant-page.html" className="restaurants-choose">
                    <div className="restaurants-choose__header">
                        <img src={MCDonalds} className="restaurants-choose__photo" />
                    </div>
                    <div className="restaurants-choose__footer">
                        <p className="restaurants-choose__name">Макдональдс</p>
                        <p className="restaurants-choose__about">₴₴ • Бургеры</p>
                        <p className="restaurants-choose__delivery-time">25-35 Min</p>
                    </div>
                </a>
            </div>
            <div className="restaurants-choose__wrapper">
                <a href="restaurant-page.html" className="restaurants-choose">
                    <div className="restaurants-choose__header">
                        <img src={MCDonalds} className="restaurants-choose__photo"/>
                    </div>
                    <RestaurantPreview/>
                </a>
            </div>
            <div className="restaurants-choose__wrapper">
                <a href="restaurant-page.html" className="restaurants-choose">
                    <div className="restaurants-choose__header">
                        <img src={MCDonalds} className="restaurants-choose__photo"/>
                    </div>
                    <RestaurantPreview/>
                </a>
            </div>
            <div className="restaurants-choose__wrapper">
                <a href="restaurant-page.html" className="restaurants-choose">
                    <div className="restaurants-choose__header">
                        <img src={MCDonalds} className="restaurants-choose__photo"/>
                    </div>
                    <RestaurantPreview/>
                </a>
            </div>
            <div className="restaurants-choose__wrapper">
                <a href="restaurant-page.html" className="restaurants-choose">
                    <div className="restaurants-choose__header">
                        <img src={MCDonalds} className="restaurants-choose__photo"/>
                    </div>
                    <RestaurantPreview/>
                </a>
            </div>
            <div className="restaurants-choose__wrapper">
                <a href="restaurant-page.html" className="restaurants-choose">
                    <div className="restaurants-choose__header">
                        <img src={MCDonalds} className="restaurants-choose__photo"/>
                    </div>
                    <RestaurantPreview/>
                </a>
            </div>
            <div className="restaurants-choose__wrapper">
                <a href="restaurant-page.html" className="restaurants-choose">
                    <div className="restaurants-choose__header">
                        <img src={MCDonalds} className="restaurants-choose__photo"/>
                    </div>
                    <RestaurantPreview/>
                </a>
            </div>
            <div className="restaurants-choose__wrapper">
                <a href="restaurant-page.html" className="restaurants-choose">
                    <div className="restaurants-choose__header">
                        <img src={MCDonalds} className="restaurants-choose__photo"/>
                    </div>
                    <RestaurantPreview/>
                </a>
            </div>
            <div className="restaurants-choose__wrapper">
                <a href="restaurant-page.html" className="restaurants-choose">
                    <div className="restaurants-choose__header">
                        <img src={MCDonalds} className="restaurants-choose__photo"/>
                    </div>
                    <RestaurantPreview/>
                </a>
            </div>
        </div>
    )
}