// components/Orders/OrderItem.js
import React, { useState } from "react";
import styles from "./Orders.module.css";

const OrderItem = ({ order }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Check if order is defined before rendering
  if (!order) {
    return (
      <div className={styles.orderItem}>
        <div className={styles.errorMessage}>
          Order information is not available.
        </div>
      </div>
    );
  }

  // Check if order has required properties
  if (!order.id || !order.items || !Array.isArray(order.items)) {
    return (
      <div className={styles.orderItem}>
        <div className={styles.errorMessage}>Invalid order data format.</div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return "Date not available";

    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (error) {
      return "Invalid date";
    }
  };

  const getStatusColor = (status) => {
    if (!status) return "#6c757d";

    switch (status.toLowerCase()) {
      case "delivered":
        return "#28a745";
      case "preparing":
        return "#ffc107";
      case "on the way":
        return "#17a2b8";
      case "cancelled":
        return "#dc3545";
      default:
        return "#6c757d";
    }
  };

  const calculateTotal = (items) => {
    if (!items || !Array.isArray(items)) return 0;

    return items.reduce((total, item) => {
      const price = item.price || 0;
      const quantity = item.quantity || 0;
      return total + price * quantity;
    }, 0);
  };

  const totalAmount = order.totalAmount || calculateTotal(order.items);
  const deliveryFee = 2.99;
  const finalTotal = totalAmount + deliveryFee;

  return (
    <div className={styles.orderItem}>
      <div
        className={styles.orderHeader}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className={styles.orderInfo}>
          <h3>Order #{order.id || "N/A"}</h3>
          <p className={styles.orderDate}>{formatDate(order.date)}</p>
          <span
            className={styles.status}
            style={{ backgroundColor: getStatusColor(order.status) }}
          >
            {order.status || "Unknown"}
          </span>
        </div>
        <div className={styles.orderTotal}>${totalAmount.toFixed(2)}</div>
        <button className={styles.expandBtn}>{isExpanded ? "▲" : "▼"}</button>
      </div>

      {isExpanded && (
        <div className={styles.orderDetails}>
          {order.deliveryAddress && (
            <div className={styles.deliveryAddress}>
              <strong>Delivery Address:</strong>
              <p>{order.deliveryAddress}</p>
            </div>
          )}

          <div className={styles.orderItems}>
            <h4>Items:</h4>
            <ul>
              {order.items.map((item, index) => (
                <li
                  key={item.id || `item-${index}`}
                  className={styles.orderItemDetail}
                >
                  <span>
                    {item.quantity || 0}x {item.name || "Unknown Item"}
                  </span>
                  <span>
                    ${((item.price || 0) * (item.quantity || 0)).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.orderSummary}>
            <div className={styles.summaryRow}>
              <span>Subtotal:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Delivery Fee:</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow + " " + styles.total}>
              <span>Total:</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderItem;
