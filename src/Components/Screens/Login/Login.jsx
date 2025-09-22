import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import "./Login.css";
import NavBar from "../Navbar/NavBar";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as ${formData.email}`);
    setFormData({ email: "", password: "" });
  };

  return (
    <>
    <NavBar />
    <div className="login-page">
      <div className="login-container">
        <h2>Login to FlyAirways</h2>
        <p>Access your account and manage your bookings.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>

        <p className="forgot-password">Forgot Password?</p>

        <div className="social-login">
          <p>Or login with</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaGoogle />
            <FaTwitter />
          </div>
        </div>

        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;
