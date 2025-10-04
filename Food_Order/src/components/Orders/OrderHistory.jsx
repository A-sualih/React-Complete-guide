// components/Orders/OrderHistory.js
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import OrderItem from "./OrderItem";
import styles from "./Orders.module.css";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Safe useAuth hook usage
  let currentUser;
  try {
    const auth = useAuth();
    currentUser = auth.currentUser;
  } catch (err) {
    console.error("Auth context not available:", err);
    // Return a fallback UI if AuthContext is not available
    return (
      <div className={styles.ordersContainer}>
        <h2>Order History</h2>
        <div className={styles.errorMessage}>
          Authentication system is not available. Please refresh the page.
        </div>
      </div>
    );
  }

  useEffect(() => {
    const fetchOrders = async () => {
      if (!currentUser) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError("");

      try {
        // Simulate API call
        setTimeout(() => {
          const mockOrders = [
            {
              id: "order1",
              date: "2024-09-25T14:30:00Z",
              items: [
                { id: "m1", name: "Sushi", price: 23, quantity: 2 },
                { id: "m3", name: "Barbecue Burger", price: 13, quantity: 1 },
              ],
              totalAmount: 59,
              status: "delivered",
              deliveryAddress: "123 Main St, New York, NY",
            },
            {
              id: "order2",
              date: "2024-09-20T18:15:00Z",
              items: [
                { id: "m2", name: "Schnitzel", price: 17, quantity: 1 },
                { id: "m4", name: "Green Bowl", price: 12, quantity: 1 },
              ],
              totalAmount: 29,
              status: "delivered",
              deliveryAddress: "123 Main St, New York, NY",
            },
          ];

          setOrders(mockOrders);
          setIsLoading(false);
        }, 1000);
      } catch (err) {
        setError("Failed to load orders. Please try again.");
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, [currentUser]);

  if (!currentUser) {
    return (
      <div className={styles.ordersContainer}>
        <h2>Order History</h2>
        <div className={styles.errorMessage}>
          Please log in to view your order history.
        </div>
      </div>
    );
  }

  // ... rest of your component

  if (isLoading) {
    return (
      <div className={styles.ordersContainer}>
        <h2>Order History</h2>
        <div className={styles.loading}>Loading your orders...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.ordersContainer}>
        <h2>Order History</h2>
        <div className={styles.errorMessage}>{error}</div>
      </div>
    );
  }

  return (
    <div className={styles.ordersContainer}>
      <h2>Your Order History</h2>

      {!orders || orders.length === 0 ? (
        <div className={styles.emptyState}>
          <p>You haven't placed any orders yet.</p>
          <button
            className={styles.ctaButton}
            onClick={() => (window.location.href = "/menu")}
          >
            Browse Menu
          </button>
        </div>
      ) : (
        <div className={styles.ordersList}>
          {orders.map((order, index) => (
            <OrderItem key={order.id || `order-${index}`} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
