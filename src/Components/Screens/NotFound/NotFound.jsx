import React from "react";
import { Link } from "react-router-dom";
import "./NotFount.css";
import NavBar from "../Navbar/NavBar";

const NotFound = () => {
  return (
    <>
      <NavBar />
      <div className="notfound-page">
        <div className="notfound-container">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>
            Oops! The page you’re looking for doesn’t exist or has been moved.
          </p>
          <Link to="/" className="home-btn">
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
