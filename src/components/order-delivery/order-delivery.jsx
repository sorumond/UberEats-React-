import React from 'react';
import './order-delivery.css';
import group from './image/Group.svg';


export function OrderDelivery() {
    return (<div className="order-delivery">
            <button className="order-delivery__time" type="button">ASAP</button>
            <span className="order-delivery__to">to</span>
            <div className="order-delivery__location">
                <img src={group} alt="" className="order-delivery__location-arow" />
                    <input type="text" placeholder="Your location" className="order-delivery__location-enter" />
            </div>
        </div>)
}
