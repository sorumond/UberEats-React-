import React, { useState, useEffect } from "react";
import "./Restaurant-page.css";
import { RestaurantPreview } from "../Restaurant-preview/Restaurant-preview";
import { PropositionType } from "./Proposition-type/Proposition-type";
import { Menu } from "./Menu/Menu";

export class RestaurantPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantMenu: false,
      id: props.match.params.id
    };
  }

  componentDidMount() {
    fetch(
      `https://uber-eats-mates.herokuapp.com/api/v1/restaurants/${this.state.id}`
    )
      .then(response => {
        return response.json();
      })
      .then(loadedRestaurant => {
        this.setState(state => ({
          restaurantMenu: loadedRestaurant
        }));
      });
  }

  render() {
    return (
      <main className="Restaurant-page">
        {this.state.restaurantMenu ? (
          <RestaurantPreview restaurantMenu={this.state.restaurantMenu} />
        ) : (
          ""
        )}
        {this.state.restaurantMenu ? (
          <PropositionType restaurantMenu={this.state.restaurantMenu} />
        ) : (
          ""
        )}
        <Menu
          addToBasket={this.props.addToBasket}
          basketOrders={this.props.basketOrders}
          restaurantMenu={this.state.restaurantMenu}
        />
      </main>
    );
  }
}
