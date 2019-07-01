import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Main } from "./components/Main/Main.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { RestaurantPage } from "./components/Restaurant-page/Restaurant-page.jsx";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" exact component={Main} />
        <Route path="/restaurant-page" component={RestaurantPage} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
