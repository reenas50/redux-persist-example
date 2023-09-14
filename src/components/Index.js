import React from "react";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";

const ShoppingStore = () => {
  return (
    <div>
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-semibold">E-commerce Website</h1>
        </div>
      </header>
      <ProductList />
      <ShoppingCart />
    </div>
  );
};

export default ShoppingStore;
