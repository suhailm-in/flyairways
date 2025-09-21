import React, { useEffect } from "react";
import "./home.css";
import video from "../../Assets/videos/city_night01.mp4";
import { GoLocation } from "react-icons/go";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsListUl } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from "aos";
import 'aos/dist/aos.css';
import NavBar from "../Navbar/NavBar";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const Home = () => {

	useEffect(()=>{
		Aos.init({duration: 2000})
	}, [])

    return (
		<>
		<NavBar />
        <section className="home">
            <div className="overlay"></div>
			<video src={video} muted autoPlay loop type="video/mp4"></video>
			<div className="homeContent container">
				<div className="textDiv">

					<span data-aos="fade-up" className="smallText">
						Our Packages
					</span>
					
					<h1 data-aos="fade-up" className="homeTitle">
						Search your Holiday
					</h1>
				</div>
				<div data-aos="fade-up" className="cardDiv grid">
					<div className="destinationInput">
						<label htmlFor="city">Search your destination: </label>
						<div className="input flex">
							<input type="text" placeholder="Enter name here..."/>
							<GoLocation className="icon"/>
						</div>
					</div>
					<div className="dateInput">
						<label htmlFor="date">Search your destination: </label>
						<div className="input flex">
							<input type="date" />
						</div>
					</div>
					<div className="priceInput">
						<div className="lable_total flex">
							<label htmlFor="price">Max price: </label>
							<h3 className="total">$3000</h3>
						</div>
						<div className="input flex">
							<input type="range" max="5000" min="1000"/>
						</div>
					</div>
					<div className="searchOption flex">
						<HiFilter className="icon" />
						<span>MORE FILTTER</span>
					</div>
				</div>

				<div data-aos="fade-up" className="homeFooterIcons flex">
					<div className="rightIcons">
						<FiFacebook className="icon" />
						<FaInstagram className="icon" />
						<FaLinkedinIn className="icon" />
					</div>
					<div className="leftIcon">
						<BsListUl className="icon" />
						<TbApps className="icon" />
					</div>
				</div>
			</div>
        </section>
		<Main />
		<Footer />
		</>
    );
};

export default Home;
