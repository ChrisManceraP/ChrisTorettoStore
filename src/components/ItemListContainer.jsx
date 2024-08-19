import React, { useState } from "react";

const ItemListContainer = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      title: "Filtro de Aceite",
      description:
        "Filtro de aceite de alta calidad para mantener el motor de tu carro limpio y funcionando correctamente.",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Batería Automotriz",
      description:
        "Batería de larga duración con alta capacidad de arranque para todo tipo de vehículos.",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Juego de Pastillas de Freno",
      description:
        "Pastillas de freno resistentes al desgaste, garantizan una frenada segura y eficiente.",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Juego de Neumáticos",
      description:
        "Neumáticos de alta resistencia, ideales para todo tipo de clima y terrenos.",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Filtro de Aire",
      description:
        "Filtro de aire que mejora el rendimiento del motor al mantenerlo libre de polvo y partículas.",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Bujías de Encendido",
      description:
        "Bujías de encendido de alto rendimiento para una mejor eficiencia de combustible y arranque rápido.",
      img: "https://via.placeholder.com/150",
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="container" style={{ marginTop: "3rem" }}>
      <div className="row">
        {products.map((product) => (
          <div
            className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4"
            key={product.id}
          >
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={product.img}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="btn btn-primary"
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
