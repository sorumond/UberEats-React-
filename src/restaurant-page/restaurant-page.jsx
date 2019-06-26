import React from 'react';
import './restaurant-page.css';
import {RestaurantPreview} from "../restaurant-preview/restaurant-preview";



export function RestaurantPage () {
  return (
      <main className="restaurant-page">
          <RestaurantPreview/>
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

          <section className="menu">
              <div className="menu__wrapper">
                  <span className="menu__type">Закуски</span>
                  <div className="dish__list">
                      <div className="dish">
                          <div className="dish__about">
                              <div className="dish__header">
                                  <span className="dish__name">Сельдь на бородинско</span>
                                  <span className="dish__recipe">С яйцом и огурцом</span>
                              </div>
                              <div className="dish__footer">
                                  <span className="dish__price">100₴</span>
                              </div>
                          </div>
                          <img src="restaurant-page/dish/image/dish_1.png" alt="" className="dish__photo"/>
                      </div>

                      <div className="dish">
                          <div className="dish__about">
                              <div className="dish__header">
                                  <span className="dish__name">Сельдь на бородинско</span>
                                  <span className="dish__recipe">С яйцом и огурцом</span>
                              </div>
                              <div className="dish__footer">
                                  <span className="dish__price">100₴</span>
                              </div>
                          </div>
                          <img src="restaurant-page/dish/image/dish_1.png" alt="" className="dish__photo"/>
                      </div>

                      <div className="dish">
                          <div className="dish__about">
                              <div className="dish__header">
                                  <span className="dish__name">Сельдь на бородинско</span>
                                  <span className="dish__recipe">С яйцом и огурцом</span>
                              </div>
                              <div className="dish__footer">
                                  <span className="dish__price">100₴</span>
                              </div>
                          </div>
                          <img src="restaurant-page/dish/image/dish_1.png" alt="" className="dish__photo"/>
                      </div>

                      <div className="dish">
                          <div className="dish__about">
                              <div className="dish__header">
                                  <span className="dish__name">Сельдь на бородинско</span>
                                  <span className="dish__recipe">С яйцом и огурцом</span>
                              </div>
                              <div className="dish__footer">
                                  <span className="dish__price">100₴</span>
                              </div>
                          </div>
                          <img src="restaurant-page/dish/image/dish_1.png" alt="" className="dish__photo"/>
                      </div>

                      <div className="dish">
                          <div className="dish__about">
                              <div className="dish__header">
                                  <span className="dish__name">Сельдь на бородинско</span>
                                  <span className="dish__recipe">С яйцом и огурцом</span>
                              </div>
                              <div className="dish__footer">
                                  <span className="dish__price">100₴</span>
                              </div>
                          </div>
                          <img src="restaurant-page/dish/image/dish_1.png" alt="" className="dish__photo"/>
                      </div>

                      <div className="dish">
                          <div className="dish__about">
                              <div className="dish__header">
                                  <span className="dish__name">Сельдь на бородинско</span>
                                  <span className="dish__recipe">С яйцом и огурцом</span>
                              </div>
                              <div className="dish__footer">
                                  <span className="dish__price">100₴</span>
                              </div>
                          </div>
                          <img src="restaurant-page/dish/image/dish_1.png" alt="" className="dish__photo"/>
                      </div>
                  </div>
              </div>
          </section>
      </main>
  )
};