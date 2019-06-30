import React from 'react';
import './footer.css';
import whiteLogo from './image/white-logo.svg'

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <img src={whiteLogo} alt="Uber Eats logo" className="footer__logo" />
            </div>
        </footer>
    )
}