import React, { useState } from "react";

function Item({ name, category }) {
  const [isAdded,addToCart] = useState(false)
  const classCart = isAdded ? "in-cart" : ""

  const handleClick = (event) => {
    addToCart(currentState => !currentState)
  }
  return (
    <li className={classCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className="add"
        onClick={handleClick}>
          {isAdded ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
