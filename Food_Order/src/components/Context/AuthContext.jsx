// context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Check for existing user session on app load
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("auth_token");
        const userData = localStorage.getItem("user_data");

        if (token && userData) {
          // Validate token with backend (in a real app)
          // For demo, we'll just set the user
          const user = JSON.parse(userData);
          setUser(user);
          console.log("User session restored:", user);
        }
      } catch (err) {
        console.error("Error initializing auth:", err);
        // Clear invalid storage
        localStorage.removeItem("auth_token");
        localStorage.removeItem("user_data");
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Signup function
  const signup = async (email, password, name) => {
    try {
      setLoading(true);
      setError("");
      console.log("Signup initiated for:", { email, name });

      // Simulate API call - replace with your actual backend
      const response = await simulateAPICall("/api/auth/signup", {
        method: "POST",
        body: { email, password, name },
      });

      if (!response.success) {
        throw new Error(response.message || "Signup failed");
      }

      // Create user object from response
      const userData = {
        id: response.data.userId || Math.random().toString(36).substr(2, 9),
        email: email,
        name: name,
        createdAt: new Date().toISOString(),
        ...response.data.user,
      };

      // Store in localStorage
      localStorage.setItem(
        "auth_token",
        response.data.token || "demo-token-" + Date.now()
      );
      localStorage.setItem("user_data", JSON.stringify(userData));

      // Update state
      setUser(userData);

      console.log("Signup successful:", userData);
      return {
        success: true,
        user: userData,
        message: "Account created successfully!",
      };
    } catch (err) {
      const errorMessage = err.message || "An error occurred during signup";
      setError(errorMessage);
      console.error("Signup error:", err);
      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      setLoading(false);
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      setLoading(true);
      setError("");
      console.log("Login attempt for:", email);

      // Simulate API call - replace with your actual backend
      const response = await simulateAPICall("/api/auth/login", {
        method: "POST",
        body: { email, password },
      });

      if (!response.success) {
        throw new Error(response.message || "Invalid email or password");
      }

      // Create user object from response
      const userData = {
        id: response.data.userId || Math.random().toString(36).substr(2, 9),
        email: email,
        name: response.data.name || "User",
        createdAt: new Date().toISOString(),
        ...response.data.user,
      };

      // Store in localStorage
      localStorage.setItem(
        "auth_token",
        response.data.token || "login-token-" + Date.now()
      );
      localStorage.setItem("user_data", JSON.stringify(userData));

      // Update state
      setUser(userData);

      console.log("Login successful:", userData);
      return {
        success: true,
        user: userData,
        message: "Login successful!",
      };
    } catch (err) {
      const errorMessage = err.message || "An error occurred during login";
      setError(errorMessage);
      console.error("Login error:", err);
      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    console.log("Logging out user:", user?.email);

    // Clear localStorage
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_data");

    // Clear state
    setUser(null);
    setError("");

    // Optional: Call backend logout endpoint
    // simulateAPICall('/api/auth/logout', { method: 'POST' });

    console.log("Logout successful");
  };

  // Update user profile
  const updateProfile = async (updatedData) => {
    try {
      setLoading(true);
      setError("");

      const response = await simulateAPICall("/api/auth/profile", {
        method: "PUT",
        body: updatedData,
      });

      if (!response.success) {
        throw new Error(response.message || "Profile update failed");
      }

      const updatedUser = { ...user, ...updatedData };

      // Update localStorage
      localStorage.setItem("user_data", JSON.stringify(updatedUser));

      // Update state
      setUser(updatedUser);

      return {
        success: true,
        user: updatedUser,
        message: "Profile updated successfully!",
      };
    } catch (err) {
      const errorMessage =
        err.message || "An error occurred while updating profile";
      setError(errorMessage);
      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      setLoading(false);
    }
  };

  // Change password
  const changePassword = async (currentPassword, newPassword) => {
    try {
      setLoading(true);
      setError("");

      const response = await simulateAPICall("/api/auth/change-password", {
        method: "POST",
        body: { currentPassword, newPassword },
      });

      if (!response.success) {
        throw new Error(response.message || "Password change failed");
      }

      return {
        success: true,
        message: "Password changed successfully!",
      };
    } catch (err) {
      const errorMessage =
        err.message || "An error occurred while changing password";
      setError(errorMessage);
      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      setLoading(false);
    }
  };

  // Reset password
  const resetPassword = async (email) => {
    try {
      setLoading(true);
      setError("");

      const response = await simulateAPICall("/api/auth/reset-password", {
        method: "POST",
        body: { email },
      });

      if (!response.success) {
        throw new Error(response.message || "Password reset failed");
      }

      return {
        success: true,
        message: "Password reset instructions sent to your email!",
      };
    } catch (err) {
      const errorMessage =
        err.message || "An error occurred while resetting password";
      setError(errorMessage);
      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      setLoading(false);
    }
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return !!user;
  };

  // Clear error
  const clearError = () => {
    setError("");
  };

  // Mock API call function - Replace with actual fetch/axios calls
  const simulateAPICall = async (endpoint, options) => {
    console.log(`API Call: ${endpoint}`, options);

    // Simulate network delay
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 1000)
    );

    // Simulate different responses based on endpoint and data
    const { body } = options;

    // Signup endpoint
    if (endpoint === "/api/auth/signup") {
      // Check if email already exists (demo)
      const existingUsers = JSON.parse(
        localStorage.getItem("demo_users") || "[]"
      );
      const userExists = existingUsers.find((u) => u.email === body.email);

      if (userExists) {
        return {
          success: false,
          message: "User with this email already exists",
        };
      }

      // Add to demo users
      const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        email: body.email,
        name: body.name,
        createdAt: new Date().toISOString(),
      };
      existingUsers.push(newUser);
      localStorage.setItem("demo_users", JSON.stringify(existingUsers));

      return {
        success: true,
        data: {
          userId: newUser.id,
          token: "demo-jwt-token-" + Date.now(),
          user: newUser,
        },
      };
    }

    // Login endpoint
    if (endpoint === "/api/auth/login") {
      const existingUsers = JSON.parse(
        localStorage.getItem("demo_users") || "[]"
      );
      const user = existingUsers.find((u) => u.email === body.email);

      if (!user) {
        return {
          success: false,
          message: "User not found",
        };
      }

      // In real app, verify password here
      if (body.password.length < 6) {
        return {
          success: false,
          message: "Invalid password",
        };
      }

      return {
        success: true,
        data: {
          userId: user.id,
          token: "demo-jwt-token-" + Date.now(),
          user: user,
        },
      };
    }

    // Default success response for other endpoints
    return {
      success: true,
      data: {
        message: "Operation successful",
      },
    };
  };

  // Context value
  const value = {
    // State
    user,
    loading,
    error,

    // Actions
    signup,
    login,
    logout,
    updateProfile,
    changePassword,
    resetPassword,
    clearError,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
