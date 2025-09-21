import React, { useEffect } from "react";
import "./footer.css";
import video from "../../Assets/videos/beach.mp4";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from "aos";
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video} muted autoPlay loop type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>
                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
                        <button data-aos="fade-up" className="btn flex" type="submit">
                            SEND <FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footercard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <Link to="/" className="logo flex">
                                <h1>
                                    <MdOutlineTravelExplore className="icon" />{" "}
                                    Flyairways.
                                </h1>
                            </Link>
                        </div>
                        <div data-aos="fade-up" className="footerpara">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente soluta ipsa suscipit vel voluptates consectetur dolor totam veritatis, laudantium repellendus id excepturi unde quaerat maiores dolores magnam reiciendis mollitia neque!
                        </div>
                        <div data-aos="fade-up" className="footerSocials flex">
                            <FaYoutube className="icon" />
                            <FaXTwitter className="icon" />
                            <FaInstagram className="icon" />
                            <FaTripadvisor className="icon" />
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        {/* Group one */}
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">OUR AGENCY</span>
                            <ul>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    Services
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    Insurance
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    Agency
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    Tourism
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    Paynents
                                </li>
                            </ul>
                        </div>
                        {/* Group two */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">PARTNERS</span>
                            <ul>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    Bookings
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    Rentcars
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    HotelWorld
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    Trivago
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    TripAdvisor
                                </li>
                            </ul>
                        </div>
                        {/* Group three */}
                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">LAST MINUTE</span>
                            <ul>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    London
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    California
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    Indonasia
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    Europe
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className="icon" />
                                    Oceania
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footerDiv">
                        <small>BEST TRVEL WEBSITE THEM</small>
                        <small>COPYRIGHTS RESERVED - SUHAIL_M 2025</small>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
