import React from 'react';
import './main.css'
import {Search} from "../search/search";
import {RestaurantChoose} from "../restaurants-choose/restaurants-choose";

export function Main() {
    return (<main class="main">
            <Search/>
            <p className="main__city">Kyiv Restaurants</p>
            <RestaurantChoose/>
        </main>
    )
}