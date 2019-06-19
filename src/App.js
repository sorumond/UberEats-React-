import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Header} from "./header/header";
import {Main} from "./main/main";
import {Footer} from "./footer/footer";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
