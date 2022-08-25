import React, { createContext, useState, useEffect } from 'react';
import { CartItem, CartContextValue } from 'types/data';

export const CartContext = createContext<CartContextValue | null>(null);

export function CartContextProvider({ children }: { children: JSX.Element }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    function fetchCart() {
      const cartString = localStorage.getItem('cart');
      if (cartString) {
        const cart = JSON.parse(cartString);
        return cart;
      }

      return [];
    }

    setCart(fetchCart());
  }, []);

  async function addToCart(cartItem: CartItem) {
    // check it item is already in cart
    const isInCart = cart.find((item) => item.id === cartItem.id);
    if (!isInCart) {
      const newCart = [...cart, cartItem];
      setCart(newCart);

      // update cart
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  }

  function removeFromCart(id: number) {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  function isInCart(id: number) {
    return !!cart.find((item) => item.id === id);
  }

  return (
    <CartContext.Provider value={{ addToCart, removeFromCart, isInCart, cart }}>
      {children}
    </CartContext.Provider>
  );
}
