import React from 'react';
import './Menu.css';
import {Dish} from "../Dish/Dish";
import {restaurantMenu} from "../infoRestaurant";

export function Menu() {
    return (
        <section className="menu">
            <div className="Menu__wrapper">
                {restaurantMenu.sections.map((section, i) => {
                    return (
                        <div>
                            <span className={'Menu__type'}>{section.title}</span>
                            <div className={'Menu__list'}>
                                {section.itemUuids.map((item, i) => {
                                    return <Dish id={item} />
                                })}
                            </div>
                        </div>
                    )
                })
                }
                {/*<span className="Menu__type">Закуски</span>*/}
                {/*<div className="Menu__list">*/}
                {/*    <Dish dish={restaurantMenu.items}*/}
                {/*          image={restaurantMenu.largeImageUrl}*/}
                {/*          title={restaurantMenu.title}*/}
                {/*          sections={restaurantMenu.sections}/>*/}
                {/*    <Dish/>*/}
                {/*    <Dish/>*/}
                {/*    <Dish/>*/}
                {/*    <Dish/>*/}
                {/*    <Dish/>*/}
                {/*</div>*/}
            </div>
        </section>
    )
}
