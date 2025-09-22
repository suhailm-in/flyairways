import React, { useState } from "react";
import "./ForgotPassword.css";
import NavBar from "../Navbar/NavBar";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
    setEmail("");
  };

  return (
    <>
      <NavBar />
      <div className="forgot-page">
        {/* LEFT INFO */}
        <div className="forgot-info">
          <h1>Reset Your Password</h1>
          <p>
            Don’t worry, it happens to the best of us. Enter your email address
            and we’ll send you a secure link to reset your password.
          </p>
          <ul>
            <li>✔ Secure reset process</li>
            <li>✔ Link expires after limited time</li>
            <li>✔ Protecting your account</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div className="forgot-container">
          <h2>Forgot Password?</h2>
          <p>Please enter your email address below.</p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="forgot-btn">
              Send Reset Link
            </button>
          </form>

          <p className="back-login">
            Remembered your password? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
