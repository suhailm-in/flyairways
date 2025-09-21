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
							<NavLink to="/" className="navLink">Home</NavLink>
						</li>
						<li className="navItem">
							<NavLink to="/about" className="navLink">About</NavLink>
						</li>
						<li className="navItem">
							<NavLink to="/places" className="navLink">Package</NavLink>
						</li>
						<li className="navItem">
							<NavLink to="/" className="navLink">Pages</NavLink>
						</li>
						<li className="navItem">
							<NavLink to="/" className="navLink">News</NavLink>
						</li>
						<li className="navItem">
							<NavLink to="/contact" className="navLink">Contact</NavLink>
						</li>
						<li className="navBarBtn flex">
							<Link to="/login" className="btn">BOOK NOW</Link>
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
