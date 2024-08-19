import React from "react";
import ItemListContainer from "../components/ItemListContainer";
const Landing = ({ addToCart }) => {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Bienvenido a Torettos´ Garage</h1>
      <ItemListContainer addToCart={addToCart} />
    </React.Fragment>
  );
};

export default Landing;
