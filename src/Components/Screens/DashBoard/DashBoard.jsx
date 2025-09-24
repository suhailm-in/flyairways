import React, { useState } from "react";
import "./DashBoard.css";
// import { FaUser, FaPlane, FaCog, FaSignOutAlt, FaBars } from "react-icons/fa";
import NavBar from "../Navbar/NavBar";
// import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const DashBoard = () => {
	// const [user] = useState({
	// 	name: "John Doe",
	// 	email: "johndoe@example.com",
	// 	avatar: "https://i.pravatar.cc/40",
	// });

	const [bookings] = useState([
		{
			id: 1,
			destination: "Maldives",
			date: "Dec 20, 2025",
			status: "Confirmed",
			price: "$2500",
		},
		{
			id: 2,
			destination: "Australia",
			date: "Jan 15, 2026",
			status: "Pending",
			price: "$3500",
		},
		{
			id: 3,
			destination: "Paris",
			date: "Feb 10, 2026",
			status: "Cancelled",
			price: "$2000",
		},
	]);

	// const [collapsed, setCollapsed] = useState(false);

	return (
		<>
			<NavBar />
			<div className="profile-page">
				<SideBar />
				{/* Content */}
				<div className="profile-content">
					<h2>My Bookings</h2>
					<div className="booking-list">
						{bookings.map((booking) => (
							<div key={booking.id} className="booking-card">
								<h4>{booking.destination}</h4>
								<p>Date: {booking.date}</p>
								<p>
									Status:{" "}
									<span
										className={booking.status.toLowerCase()}
									>
										{booking.status}
									</span>
								</p>
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

export default DashBoard;
