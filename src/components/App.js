import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [darkMode, setDarkMode] = useState(false)

  function handleClick() {
    setDarkMode((darkMode) => !darkMode)
  }
  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  return (
    <div className={"App " + (darkMode ? "Dark-Mode" : "Light-Mode")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{darkMode ? "light" : "dark"}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;