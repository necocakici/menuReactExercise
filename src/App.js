import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    if (typeof category === "string") {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    } else {
      setMenuItems(items);
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
          <Categories filterItems={filterItems} />
          <Menu items={menuItems} />
        </div>
      </section>
    </main>
  );
}

export default App;
