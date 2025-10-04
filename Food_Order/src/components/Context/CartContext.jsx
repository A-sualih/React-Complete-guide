// context/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const CartContext = createContext();

// Create a simple provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // Calculate total items count
  const totalItems = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("react_meals_cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.log("Error loading cart:", error);
      }
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("react_meals_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addItem = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);

      if (existingItem) {
        // Update quantity if item exists
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        // Add new item
        return [...prevItems, item];
      }
    });
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Update item quantity
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Check if item is in cart
  const isItemInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  // Get item quantity
  const getItemQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const value = {
    items: cartItems,
    totalAmount,
    totalItems,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    isItemInCart,
    getItemQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
