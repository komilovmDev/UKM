import React from "react";
import ProductComponent from "./components/ProductComponent";

const Products = () => {
  return (
    <div>
      <h1 className="text-xl">Почвообрабатывающая техника</h1>
      <div>
        <ProductComponent
          name="Product Name"
          desc="This is a description of the product."
          img="https://via.placeholder.com/150"
          onDetailsClick={() => console.log("Details button clicked")}
          onOrderClick={() => console.log("Order button clicked")}
        />
        <ProductComponent
          name="Product Name"
          desc="This is a description of the product."
          img="https://via.placeholder.com/150"
          onDetailsClick={() => console.log("Details button clicked")}
          onOrderClick={() => console.log("Order button clicked")}
        />
        <ProductComponent
          name="Product Name"
          desc="This is a description of the product."
          img="https://via.placeholder.com/150"
          onDetailsClick={() => console.log("Details button clicked")}
          onOrderClick={() => console.log("Order button clicked")}
        />
        <ProductComponent
          name="Product Name"
          desc="This is a description of the product."
          img="https://via.placeholder.com/150"
          onDetailsClick={() => console.log("Details button clicked")}
          onOrderClick={() => console.log("Order button clicked")}
        />
      </div>
    </div>
  );
};

export default Products;
