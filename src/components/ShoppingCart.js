import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../reducers/cartSlice";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="my-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="my-6 flex justify-between vertical-middle bg-white shadow-md p-4 rounded-md"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center ">
                <button
                  onClick={() => dispatch(decreaseQuantity(item))}
                  className="bg-yellow-500 text-white px-3.5 py-1 rounded-full hover:bg-yellow-600"
                >
                  -
                </button>
                <p className="mx-2 min-w-[22px] text-center">{item.quantity}</p>
                <button
                  onClick={() => dispatch(increaseQuantity(item))}
                  className="bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item))}
                className="bg-red-500 text-white px-4  rounded-md hover:bg-red-600 py-2 h-fit my-auto"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="fixed bottom-0 left-0 w-full bg-white ">
        <hr className="box-shadow-md" />
        <p className="text-left	px-36 py-10 text-xl font-semibold">
          Total: ${total.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ShoppingCart;
