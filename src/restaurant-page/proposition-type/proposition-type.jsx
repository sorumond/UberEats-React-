import React from 'react';
import './proposion-type.css';

export function PropositionType() {
    return (
        <section className="proposition-type">
            <div className="proposition-type__wrapper">
                <ul className="proposition-type__list">
                    <li className="proposition-type__item proposition-type__item--active">Закуски</li>
                    <li className="proposition-type__item">Салаты</li>
                    <li className="proposition-type__item">Супы</li>
                    <li className="proposition-type__item">Горячие блюда</li>
                    <li className="proposition-type__item">Гарниры</li>
                    <li className="proposition-type__item">Десерты</li>
                </ul>
            </div>
        </section>
    )
}
