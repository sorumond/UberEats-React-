import React from 'react';
import './dish.css';
import dishImage from './image/dish_1.png';


export function Dish() {
    return (
        <div className="dish">
            <div className="dish__about">
                <div className="dish__header">
                    <span className="dish__name">Сельдь на бородинско</span>
                    <span className="dish__recipe">С яйцом и огурцом</span>
                </div>
                <div className="dish__footer">
                    <span className="dish__price">100₴</span>
                </div>
            </div>
            <img src={dishImage} alt="" className="dish__photo"/>
        </div>
    )
}
