import React from 'react';
import './Restaurant-page.css';
import {RestaurantPreview} from "../Restaurant-preview/Restaurant-preview";
import {PropositionType} from "./Proposition-type/Proposition-type";
import {Menu} from "./Menu/Menu";


export function RestaurantPage () {
  return (
      <main className="Restaurant-page">
          <RestaurantPreview/>
          <PropositionType/>
          <Menu/>
      </main>
  )
};