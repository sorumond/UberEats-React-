import React from 'react';
import './restaurant-page.css';
import {RestaurantPreview} from "../restaurant-preview/restaurant-preview";
import {PropositionType} from "./proposition-type/proposition-type";
import {Menu} from "./menu/menu";



export function RestaurantPage () {
  return (
      <main className="restaurant-page">
          <RestaurantPreview/>
          <PropositionType/>
          <Menu/>
      </main>
  )
};