import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Main } from "./components/Main/Main.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RestaurantPage } from "./components/Restaurant-page/Restaurant-page.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { Basket } from "./components/Basket/Basket";

let basketOrders = [];

function App() {
  const [basketArray, setBasketArray] = useState(basketOrders);
  const [openBasket, setOpenBasket] = useState(false);
  return (
    <>
      <Router>
        <ScrollToTop>
          {openBasket && (
            <Basket
              basketOrders={basketOrders}
              setOpenBasket={setOpenBasket}
              basketArray={basketArray}
              setBasketArray={setBasketArray}
            />
          )}
          <Header open={setOpenBasket} />
          <Route path="/" exact component={Main} />
          <Route
            path="/restaurant-page"
            component={() => (
              <RestaurantPage
                basketOrders={basketOrders}
                basketArray={basketArray}
                setBasketArray={setBasketArray}
              />
            )}
          />
        </ScrollToTop>
      </Router>
      <Footer />
    </>
  );
}

export default App;
