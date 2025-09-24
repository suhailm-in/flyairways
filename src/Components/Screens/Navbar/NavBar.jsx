import React, { useContext, useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";	
import { TbGridDots } from "react-icons/tb";
import { UserContext } from "../../../App";

const NavBar = () => {
	const [active, setActive] = useState('navBar');
	const [dropdownOpen, setDropdownOpen] = useState(false);
  	const {userData, updateUserData} = useContext(UserContext);
	const [user] = useState({
		name: "John Doe",
		email: "johndoe@example.com",
		// avatar: "https://i.pravatar.cc/150?img=3",
		avatar: "https://i.pravatar.cc/40",
	  });

	const showNav = ()=>{
		setActive('navBar activeNavbar')
	};
	const hideNav = ()=>{
		setActive('navBar')
	};
	const hendleLogout = ()=>{
		updateUserData({ type: "LOGOUT" })
	}

    return (
        <section className="navBarSection">
            <header className="header flex">

				<div className="logoDiv">
					<Link to="/" className="logo flex">
						<h1><MdOutlineTravelExplore className="icon"/> Flyairways.</h1>
					</Link>
				</div>

				<div className={active}>
					<ul className="navLists flex">
						<li className="navItem">
							<NavLink to="/" className={({ isActive }) => isActive ? "navLink active" : "navLink"}>Home</NavLink>
						</li>
						<li className="navItem">
							<NavLink to="/about" className={({ isActive }) => isActive ? "navLink active" : "navLink"}>About</NavLink>
						</li>
						<li className="navItem">
							<NavLink to="/destination" className={({ isActive }) => isActive ? "navLink active" : "navLink"}>Destinations</NavLink>
						</li>
						<li className="navItem">
							<NavLink to="/packages" className={({ isActive }) => isActive ? "navLink active" : "navLink"}>Package</NavLink>
						</li>
						<li className="navItem">
							<NavLink to="/blogs" className={({ isActive }) => isActive ? "navLink active" : "navLink"}>Blogs</NavLink>
						</li>
						<li className="navItem">
							<NavLink to="/contact" className={({ isActive }) => isActive ? "navLink active" : "navLink"}>Contact</NavLink>
						</li>
						{userData ? (
							<li className="navItem profileWrapper">
								<div
								className="profileSection"
								onClick={() => setDropdownOpen(!dropdownOpen)}
								>
									<img
										src="https://i.pravatar.cc/40"
										alt="profile"
										className="profileImg"
									/>
									<span className="username">
										{userData.name || user.name || "User"}
									</span>
									<span className={`arrow ${dropdownOpen ? "up" : "down"}`}>
										▾
									</span>
								</div>

								{dropdownOpen && (
									<ul className="dropdownMenu">
										<li>
											<Link to="/dashboard">Dashboard</Link>
										</li>
										<li>
											<Link to="/settings">Settings</Link>
										</li>
										<li>
											<Link to="/privacyterms">Privacy</Link>
										</li>
										<li className="logout">
											<Link onClick={()=>hendleLogout()}>Logout</Link>
										</li>
									</ul>
								)}
							</li>
						):(
							<li className="navBarBtn flex">
								<Link to="/login" className="btn">Login</Link>
							</li>
						)}
					</ul>

					<div className="closeNavbar" onClick={()=>hideNav()}>
						<IoIosCloseCircleOutline className="icon"/>
					</div>
				</div>
				
				<div className="toggleNavbar" onClick={()=>showNav()}>
					<TbGridDots className="icon"/>
				</div>
			</header>
        </section>
    );
};

export default NavBar;


// {({ isActive }) => isActive ? "navLink active" : "navLink"}