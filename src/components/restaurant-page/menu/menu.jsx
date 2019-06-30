import React from 'react';
import './menu.css';
import {Dish} from "../dish/dish";

export function Menu() {
    return (
        <section className="menu">
            <div className="menu__wrapper">
                <span className="menu__type">Закуски</span>
                <div className="menu__list">
                    <Dish/>
                    <Dish/>
                    <Dish/>
                    <Dish/>
                    <Dish/>
                    <Dish/>
                </div>
            </div>
        </section>
    )
}
