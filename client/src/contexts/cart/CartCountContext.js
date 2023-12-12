import React, { createContext, useContext, useState } from 'react';

const CartCountContext = createContext();

export function CartCountProvider({ children }) {
  const [cartItemCount, setCartItemCount] = useState(0);

  return (
    <CartCountContext.Provider value={{ cartItemCount, setCartItemCount }}>
      {children}
    </CartCountContext.Provider>
  );
}

export function useCartCount() {
  return useContext(CartCountContext);
}