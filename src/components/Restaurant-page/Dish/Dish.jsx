import React from 'react';
import './Dish.css';
import dishImage from './image/dish_1.png';


export function Dish() {
    return (
        <div className="Dish">
            <div className="Dish__about">
                <div className="Dish__header">
                    <span className="Dish__name">Сельдь на бородинско</span>
                    <span className="Dish__recipe">С яйцом и огурцом</span>
                </div>
                <div className="dish__footer">
                    <span className="dish__price">100₴</span>
                </div>
            </div>
            <img src={dishImage} alt="" className="Dish__photo"/>
        </div>
    )
}
