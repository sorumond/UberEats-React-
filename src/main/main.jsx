import React from 'react';
import './main.css'
import {Search} from "../search/search";
import {RestaurantChoose} from "../restaurants-choose/restaurants-choose";
import {restaurants} from '../info.js';

export function Main() {
    return (<main className="main">
            <Search/>
            <p className="main__city">Kyiv Restaurants</p>
            <div className="main__restaurants-list">
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