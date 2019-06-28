import React from 'react';
import './restaurants-choose.css';
import {Link} from "react-router-dom";
import {restaurants} from '../info.js';

export function RestaurantChoose(props) {
    return (<div className="restaurants-choose__wrapper">
            <Link to={`restaurant-page`} className="restaurants-choose">
                <div className="restaurants-choose__header">
                    <img src={props.imageUrl} className="restaurants-choose__photo" alt={props.title}/>
                </div>
                <div className="restaurants-choose__footer">
                    <p className="restaurants-choose__name">{props.title}</p>
                    <p className="restaurants-choose__about">{props.priceBucket} {props.categories.map((categorie) => {
                        return ` • ${categorie.name}`
                    })} </p>
                    <p className="restaurants-choose__delivery-time">{props.etaRange.min} - {props.etaRange.max} min</p>
                </div>
            </Link>
        </div>)
}