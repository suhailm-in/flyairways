import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import "./Signup.css";
import NavBar from "../Navbar/NavBar";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signed up as ${formData.email}`);
    setFormData({ name: "", email: "", password: "" });
  };

  const handleGoogleSignup = () => {
    alert("Sign up with Google clicked!");
    // Integrate Google OAuth here in future
  };

  return (
    <>
    <NavBar />
    <div className="signup-page">
      <div className="signup-container">
        <h2>Create Your Account</h2>
        <p>Join FlyAirways and start booking amazing trips!</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
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
          <button type="submit">Sign Up</button>
        </form>

        <div className="social-signup">
          <p>Or sign up with</p>
          <button className="google-btn" onClick={handleGoogleSignup}>
            <FaGoogle /> Sign up with Google
          </button>
        </div>

        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
    </>
  );
};

export default Signup;
