import React from 'react';
import './header.css';
import {OrderDelivery} from "../order-delivery/order-delivery.jsx";
import {PersonalAreaBar} from "../personal-area-bar/personal-area-bar";
import {Link} from "react-router-dom";

export function Header() {
    return (<header className="header">
        <div className="header__wrapper">
            <div className="header__logo--wrapper">
                <Link className="header__logo" to={'/'}>
                </Link>
            </div>
            <div className={'header__order-delivery'}>
                <OrderDelivery/>
            </div>
            <PersonalAreaBar/>
        </div>
    </header>)

};