import React from 'react';
import './Header.css';
import {OrderDelivery} from "../Order-delivery/Order-delivery.jsx";
import {PersonalAreaBar} from "../Personal-area-bar/Personal-area-bar";
import {Link} from "react-router-dom";

export function Header() {
    return (<header className="Header">
        <div className="Header__wrapper">
            <div className="Header__logo-wrapper">
                <Link className="Header__logo" to={'/'}>
                </Link>
            </div>
            <div className={'header__order-delivery'}>
                <OrderDelivery/>
            </div>
            <PersonalAreaBar/>
        </div>
    </header>)

};