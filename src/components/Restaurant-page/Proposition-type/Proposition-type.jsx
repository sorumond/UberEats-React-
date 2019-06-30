import React from 'react';
import './Proposion-type.css';

export function PropositionType() {
    return (
        <section className="Proposition-type">
            <div className="Proposition-type__wrapper">
                <ul className="Proposition-type__list">
                    <li className="Proposition-type__item Proposition-type__item--active">Закуски</li>
                    <li className="Proposition-type__item">Салаты</li>
                    <li className="Proposition-type__item">Супы</li>
                    <li className="Proposition-type__item">Горячие блюда</li>
                    <li className="Proposition-type__item">Гарниры</li>
                    <li className="Proposition-type__item">Десерты</li>
                </ul>
            </div>
        </section>
    )
}
