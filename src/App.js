import React, { useState } from "react";
import AppRoutes from "./utils/Routes";
import NavBar from "./components/NavBar";

function App() {
  const [itemsSale, setItemsSale] = useState([]);

  const addToCart = (product) => {
    setItemsSale((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="App">
      <NavBar itemsSale={itemsSale} setItemsSale={setItemsSale} />
      <AppRoutes addToCart={addToCart} />
    </div>
  );
}

export default App;
