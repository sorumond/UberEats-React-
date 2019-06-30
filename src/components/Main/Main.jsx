import React from 'react';
import './Main.css'
import {Search} from "../Search/Search";
import {RestaurantChoose} from "../Restaurants-choose/Restaurants-choose";
import {restaurants} from '../info.js';

export function Main() {
    return (<main className="Main">
            <Search/>
            <p className="Main__city">Kyiv Restaurants</p>
            <div className="Main__restaurants-list">
                {restaurants.map((restaurant, i) => {
                    return <RestaurantChoose key={i} title={restaurant.title}
                                             categories={restaurant.categories}
                                             priceBucket={restaurant.priceBucket}
                                             imageUrl={restaurant.imageUrl}
                                             etaRange={restaurant.etaRange}
                    />
                })}
            </div>
        </main>
    )
}