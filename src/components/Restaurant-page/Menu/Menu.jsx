import React from 'react';
import './Menu.css';
import {Dish} from "../Dish/Dish";

export function Menu() {
    return (
        <section className="menu">
            <div className="Menu__wrapper">
                <span className="Menu__type">Закуски</span>
                <div className="Menu__list">
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
