import React, { useState } from "react";

export function DishInBasket(props) {
  const [count, setCount] = useState(props.basketOrder.count);

  function onSelectChange(event) {
    if (event.target.value === "delete") {
      props.basketOrders.splice(props.index, 1);
      let newArray = props.basketOrders.filter(basketOrder => {
        return basketOrder !== props.basketOrders[props.index];
      });
      props.setBasketArray(newArray);
    } else {
      setCount(event.target.value);
      props.basketOrders[props.index].count = event.target.value;
    }
  }

  return (
    <div className="Basket__choose" key={props.basketOrder.dishInfo.uuid}>
      <select
        onChange={onSelectChange}
        className="Basket__select"
        defaultValue={props.basketOrder.count}
      >
        <option value={"delete"}>Удалить</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
      </select>
      <span className="basket__dish">{props.basketOrder.dishInfo.title}</span>
      <span className="basket__price">
        {(props.basketOrder.dishInfo.price / 100) * count}грн.
      </span>
    </div>
  );
}
