import React from "react";
import "./Main.css";
import { Search } from "../Search/Search";
import { RestaurantChoose } from "../Restaurants-choose/Restaurants-choose";
import { Container } from "../../Container/Container";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      restaurants: []
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount() {
    fetch("https://uber-eats-mates.herokuapp.com/api/v1/restaurants")
      .then(response => {
        return response.json();
      })
      .then(loadedRestaurants => {
        this.setState(state => ({
          restaurants: loadedRestaurants
        }));
      });
  }

  updateSearch(input) {
    this.setState(state => ({
      searchValue: input
    }));
  }

  ifTagsInclude(restaurant) {
    for (let i = 0; i < restaurant.tags.length; i++) {
      if (
        restaurant.tags[i].name
          .toLowerCase()
          .includes(this.state.searchValue.toLocaleLowerCase())
      ) {
        return true;
      }
    }
    return false;
  }

  ifCategoriesInclude(restaurant) {
    for (let i = 0; i < restaurant.categories.length; i++) {
      if (
        restaurant.categories[i].name
          .toLowerCase()
          .includes(this.state.searchValue.toLocaleLowerCase())
      ) {
        return true;
      }
    }
    return false;
  }

  render() {
    return (
      <Container>
        <main className="Main">
          <div className="Main__search">
            <Search updateSearch={this.updateSearch} />
          </div>
          <p className="Main__city">Kyiv Restaurants</p>
          <div className="Main__restaurants-list">
            {this.state.restaurants.length > 0
              ? this.state.restaurants
                  .filter((restaurant, i) => {
                    return (
                      restaurant.title
                        .toLowerCase()
                        .includes(this.state.searchValue.toLocaleLowerCase()) ||
                      (restaurant.tags && this.ifTagsInclude(restaurant)) ||
                      this.ifCategoriesInclude(restaurant)
                    );
                  })
                  .map((restaurant, i) => {
                    return (
                      <RestaurantChoose
                        key={i}
                        title={restaurant.title}
                        categories={restaurant.categories}
                        priceBucket={restaurant.priceBucket}
                        imageUrl={restaurant.imageUrl}
                        etaRange={restaurant.etaRange}
                        uuid={restaurant.uuid}
                      />
                    );
                  })
              : ""}
          </div>
        </main>
      </Container>
    );
  }
}
