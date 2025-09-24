import React, { useState } from 'react'
import { FaUser, FaPlane, FaCog, FaSignOutAlt, FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./SideBar.css"

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [user] = useState({
            name: "John Doe",
            email: "johndoe@example.com",
            avatar: "https://i.pravatar.cc/40",
        });

    return (
        <>
            {/* Sidebar */}
				<div
					className={`profile-sidebar ${collapsed ? "collapsed" : ""
						}`}
				>
					<div className="sidebar-header">
						<button
							className="toggle-btn"
							onClick={() => setCollapsed(!collapsed)}
						>
							<FaBars />
						</button>
						{!collapsed && <h2>Dashboard</h2>}
					</div>

					<div className="user-info">
						<img src={user.avatar} alt={user.name} />
						{!collapsed && (
							<>
								<h3>{user.name}</h3>
								<p>{user.email}</p>
							</>
						)}
					</div>

					<nav className="sidebar-menu">
						<NavLink to="../dashboard">
							<FaUser /> {!collapsed && "Profile"}
						</NavLink>
						<NavLink to="/mybookings">
							<FaPlane /> {!collapsed && "My Bookings"}
						</NavLink>
						<NavLink to="/settings">
							<FaCog /> {!collapsed && "Settings"}
						</NavLink>
						<NavLink to="#">
							<FaSignOutAlt /> {!collapsed && "Logout"}
						</NavLink>
					</nav>
				</div>
        </>
    )
}

export default SideBar