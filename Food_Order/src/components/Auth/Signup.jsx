// components/Auth/Signup.js
import React, { useState } from "react";
import { useAuth } from "../Context/CartContext";
import styles from "./Signup.module.css";

const Signup = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { signup } = useAuth();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Clear errors when user starts typing
    if (error) setError("");
  };

  const getPasswordStrength = (password) => {
    if (password.length === 0) return { strength: 0, label: "" };
    if (password.length < 6) return { strength: 1, label: "Weak" };
    if (password.length < 8) return { strength: 2, label: "Medium" };
    return { strength: 3, label: "Strong" };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (!formData.name.trim()) {
      setError("Please enter your full name");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      console.log("Attempting signup..."); // Debug log
      await signup(formData.email, formData.password, {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
      });

      setSuccess("Account created successfully! Redirecting...");

      // Optional: Redirect after successful signup
      setTimeout(() => {
        // You can add navigation logic here
        console.log("Signup completed successfully");
      }, 2000);
    } catch (err) {
      console.error("Signup error in component:", err); // Debug log
      setError(err.message || "Failed to create an account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.signupHeader}>Join ReactMeals</h2>

      {error && <div className={styles.errorMessage}>{error}</div>}
      {success && <div className={styles.successMessage}>{success}</div>}

      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <div className={styles.formRow}>
          <div className={styles.formControl}>
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>
        </div>

        <div className={styles.formControl}>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>

        <div className={styles.formControl}>
          <label htmlFor="address">Delivery Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            placeholder="Enter your complete delivery address..."
            disabled={isLoading}
          />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formControl}>
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            {formData.password && (
              <div className={styles.passwordStrength}>
                <span>Strength: {passwordStrength.label}</span>
                <div className={styles.strengthBar}>
                  <div
                    className={`${styles.strengthFill} ${
                      passwordStrength.strength === 1
                        ? styles.strengthWeak
                        : passwordStrength.strength === 2
                        ? styles.strengthMedium
                        : styles.strengthStrong
                    }`}
                  />
                </div>
              </div>
            )}
          </div>

          <div className={styles.formControl}>
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>
        </div>

        <div className={styles.formActions}>
          <button
            type="submit"
            disabled={isLoading}
            className={styles.submitButton}
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>
        </div>
      </form>

      <p className={styles.switchText}>
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className={styles.switchButton}
          disabled={isLoading}
        >
          Login
        </button>
      </p>

      <div className={styles.termsText}>
        By signing up, you agree to our{" "}
        <a href="/terms" className={styles.termsLink}>
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy" className={styles.termsLink}>
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Signup;
