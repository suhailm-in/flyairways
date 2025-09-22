import React, { useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";	
import { TbGridDots } from "react-icons/tb";

const NavBar = () => {
	const [active, setActive] = useState('navBar')

	const showNav = ()=>{
		setActive('navBar activeNavbar')
	}
	const hideNav = ()=>{
		setActive('navBar')
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
						<li className="navBarBtn flex">
							<Link to="/login" className="btn">Login</Link>
						</li>
						<li className="navBarBtn flex">
							<Link to="/signup" className="btn">Signup</Link>
						</li>
					</ul>

					{/* <div className="navBarBtn flex">
						<Link to="/" className="btn">BOOK NOW</Link>
					</div> */}

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