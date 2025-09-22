import React, { useEffect, useState } from "react";
import "./Contact.css";
import NavBar from "../Navbar/NavBar";
import { IoMailSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <>
            <NavBar />
            <div className="contact-page">
                <div className="contact-hero">
                    <h1 data-aos="fade-up" >Get in Touch with FlyAirways</h1>
                    <p data-aos="fade-up" >
                        We’d love to hear from you! Fill out the form or reach
                        out using the details below.
                    </p>
                </div>

                <div className="contact-wrapper">
                    {/* Contact Form */}
                    <div data-aos="fade-up" className="contact-form">
                        <h2>Contact Us</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div data-aos="fade-up" className="contact-info">
                        <h2>Our Office</h2>

                        <div className="infoDiv">
                            <FaLocationDot className="info-icon" />
                            <p>Dubai, United Arab Emirates</p>
                        </div>

                        <div className="infoDiv">
                            <IoMailSharp className="info-icon" />
                            <p>support@flyairways.com</p>
                        </div>

                        <div className="infoDiv">
                            <FaPhoneAlt className="info-icon" />
                            <p>+971 55 123 4567</p>
                        </div>

                        {/* Optional: Embed Google Map */}
                        <div className="map">
                            <iframe
                                title="FlyAirways Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.534809503314!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434f50fbb2e1%3A0x95d8c9f1e4f0b2c!2sDubai%2C%20UAE!5e0!3m2!1sen!2sin!4v1695420000000!5m2!1sen!2sin"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
			<Footer />
        </>
    );
};

export default Contact;
