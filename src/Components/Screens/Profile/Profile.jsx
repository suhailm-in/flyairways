import React, { useState } from "react";
import "./Profile.css";
// import { FaUser, FaPlane, FaCog, FaSignOutAlt } from "react-icons/fa";
import NavBar from "../Navbar/NavBar";

const Profile = () => {
  const [user] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://i.pravatar.cc/150?img=3",
  });

  const [bookings] = useState([
    { id: 1, destination: "Maldives", date: "Dec 20, 2025", status: "Confirmed", price: "$2500" },
    { id: 2, destination: "Australia", date: "Jan 15, 2026", status: "Pending", price: "$3500" },
    { id: 3, destination: "Paris", date: "Feb 10, 2026", status: "Cancelled", price: "$2000" },
  ]);

  return (
    <>
    <NavBar />
    <div className="profile-page">
      <div className="profile-sidebar">
        <div className="user-info">
          <img src={user.avatar} alt={user.name} />
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
        <nav className="sidebar-menu">
          {/* <a href="#"><FaUser /> Profile</a>
          <a href="#"><FaPlane /> My Bookings</a>
          <a href="#"><FaCog /> Settings</a>
          <a href="#"><FaSignOutAlt /> Logout</a> */}
        </nav>
      </div>

      <div className="profile-content">
        <h2>My Bookings</h2>
        <div className="booking-list">
          {bookings.map((booking) => (
            <div key={booking.id} className="booking-card">
              <h4>{booking.destination}</h4>
              <p>Date: {booking.date}</p>
              <p>Status: <span className={booking.status.toLowerCase()}>{booking.status}</span></p>
              <p>Price: {booking.price}</p>
              <button>View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
