import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../reducers/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  return (
    <div className="container mx-auto py-8 pt-14 ">
      <h1 className="text-3xl font-semibold mb-4">Product Catalog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md p-4 rounded-md">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
