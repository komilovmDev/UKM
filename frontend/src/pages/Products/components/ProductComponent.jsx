import React from "react";

const ProductComponent = ({ name, desc, img, onDetailsClick, onOrderClick }) => {
  return (
    <article className="product-container">
      <div className="product-content">
        <div className="product-text">
          <h1 className="product-title">{name}</h1>
          <p className="product-description">{desc}</p>
        </div>
        <div className="product-buttons">
          <button className="product-button" onClick={onDetailsClick}>
            Подробнее
          </button>
          <button className="product-button" onClick={onOrderClick}>
            Заказать
          </button>
        </div>
      </div>
      <div className="product-image-container">
        <img src={img} alt={name || "Product image"} className="product-image" />
      </div>
    </article>
  );
};

export default ProductComponent;
