import React, { createContext, useReducer } from "react";
import reducer from "./CartReducer";
export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cart, cartdispatch] = useReducer(reducer, []);
  return (
    <CartContext.Provider value={{ cart, cartdispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
