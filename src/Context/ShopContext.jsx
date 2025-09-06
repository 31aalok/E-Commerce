import React, { createContext, use, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // console.log(cartItems);
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev, [itemId]: prev[itemId] + 1 };
      console.log(updated); // ✅ shows updated state
      return updated;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemsInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemsInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let TotalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        TotalItem += cartItems[item];
      }
    }
    return TotalItem;
  };
  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}{" "}
      {/* 👈 makes the context available to child components */}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
//{props.children} → makes sure any child components wrapped inside ShopContextProvider can access this context.
