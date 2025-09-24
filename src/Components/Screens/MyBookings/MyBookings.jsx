import React from "react";
import "./MyBookings.css";
import NavBar from "../Navbar/NavBar";
import SideBar from "../SideBar/SideBar";

const bookingsData = [
    {
        id: 1,
        title: "Australia Coastal",
        destination: "Australia",
        dates: "12 Sep 2025 - 19 Sep 2025",
        price: "$3500",
        status: "Confirmed",
    },
    {
        id: 2,
        title: "Egypt Historical Tour",
        destination: "Egypt",
        dates: "01 Oct 2025 - 06 Oct 2025",
        price: "$2300",
        status: "Pending",
    },
    {
        id: 3,
        title: "Japan Sakura Trip",
        destination: "Japan",
        dates: "15 Mar 2026 - 22 Mar 2026",
        price: "$4000",
        status: "Cancelled",
    },
];

const MyBookings = () => {
    return (
        <>
            <NavBar />
            <div className="main-div">
                <SideBar />
                <div className="bookings-page">
                    <h1>My Bookings</h1>

                    <div className="bookings-container">
                        {bookingsData.map((booking) => (
                            <div key={booking.id} className="booking-card">
                                <div className="card-header">
                                    <h2>{booking.title}</h2>
                                    <span className={`status ${booking.status.toLowerCase()}`}>
                                        {booking.status}
                                    </span>
                                </div>
                                <p>
                                    <strong>Destination:</strong> {booking.destination}
                                </p>
                                <p>
                                    <strong>Dates:</strong> {booking.dates}
                                </p>
                                <p>
                                    <strong>Price:</strong> {booking.price}
                                </p>
                                <div className="card-actions">
                                    <button className="btn view-btn">View</button>
                                    <button className="btn cancel-btn">Cancel</button>
                                    <button className="btn download-btn">Download</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyBookings;
