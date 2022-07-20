import React, { useState } from "react";

function Item({ name, category }) {
const [addedToCart, setAddedToCart] = useState(false)

function dealWithClick() {
  setAddedToCart((!addedToCart))
}
  return (
    <li className={addedToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={dealWithClick} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
