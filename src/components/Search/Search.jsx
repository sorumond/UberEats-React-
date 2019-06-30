import React from 'react';
import './Search.css'
import search from './image/search.svg';


export function Search() {
    return (
            <div className="Search">
                <img src={search} alt="" className="Search__button"/>
                <input type="text" className="Search__text" placeholder="Search for restaurant or cuisine"/>
            </div>
    );
}
