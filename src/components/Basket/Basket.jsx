import React, { useState } from "react";
import "./Basket.css";
import basketImage from "./image/basket.svg";
import { DishInBasket } from "../DishInBasket/DishInBasket";

export function Basket(props) {
  return (
    <div className="Basket">
      <div className="Basket__wrapper">
        <div className="Basket__block">
          <div className="Basket__header">
            <img src={basketImage} alt="basketImage" />
            <span className="basket__order-amount">
              Ваш заказ <b>({3})</b>
            </span>
            <svg
              width="24px"
              height="24px"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                props.setOpenBasket(false);
              }}
              className={"Basket__close"}
            >
              <path
                d="m19.5831 6.24931-1.8333-1.83329-5.75 5.83328-5.75-5.83328-1.8333 1.83329 5.8333 5.74999-5.8333 5.75 1.8333 1.8333 5.75-5.8333 5.75 5.8333 1.8333-1.8333-5.8333-5.75z"
                fill="#1F1F1F"
              ></path>
            </svg>
          </div>

          <div className="Basket__main">
            {props.basketOrders.map((basketOrder, i) => {
              return (
                <DishInBasket
                  basketOrder={basketOrder}
                  basketOrders={props.basketOrders}
                  setBasketArray={props.setBasketArray}
                  index={i}
                />
              );
            })}
          </div>
        </div>
        <div className=" Basket__payment">
          <div className="Basket__amount-dishes">3</div>
          <span className="basket__next-step">Далее: оплата</span>
          <span className="basket__price basket__price--payment">
            440,00грн.
          </span>
        </div>
      </div>
    </div>
  );
}
