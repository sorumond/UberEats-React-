import React from 'react';
import './search.css'
import search from './image/search.svg';


export function Search() {
    return (
        <div className="search__wrapper">
            <div className="search">
                <img src={search} alt="" className="search__button"/>
                <input type="text" className="search__text" placeholder="Search for restaurant or cuisine"/>
            </div>
        </div>
    );
}
