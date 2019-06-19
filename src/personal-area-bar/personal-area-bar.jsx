import React from 'react';
import './personal-area-bar.css';
import basket from './image/basket.svg';

export function PersonalAreaBar() {
    return (<div className="personal-area-bar">
        <a href="javascript:void(0)" className="personal-area-bar__sign-in">Sign in</a>
        <div className="personal-area-bar__register--wrapper">
            <a href="javascript:void(0)" className="personal-area-bar__register">Register</a>
        </div>
        <a href="javascript: void (0)" className="personal-area-bar__basket">
            <img src={basket} alt="basket" className="personal-area-bar__basket-image" />
        </a>
    </div>);
}