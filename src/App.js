import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Header} from "./components/header/header";
import {Main} from "./components/main/main";
import {Footer} from "./components/footer/footer";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {RestaurantPage} from "./components/restaurant-page/restaurant-page";


function App() {
    return (
        <div>
            <Router>
                <Header/>
                <Route path='/' exact component={Main}/>
                <Route path='/restaurant-page' component={RestaurantPage}/>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
