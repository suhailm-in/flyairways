import React from "react";
import NavBar from "../Navbar/NavBar";
import "./About.css";
import Footer from "../Footer/Footer";

const About = () => {
    return (
        <>
            <NavBar />
            <main className="about-wrapper">
                {/* Hero Section */}
                <section className="about-hero">
                    <div
                        className="hero-media"
                        role="img"
                        aria-label="Flying over islands"
                    ></div>

                    <div className="hero-content">
                        <span className="brand">FlyAirways</span>
                        <h1>Travel made simple. Journeys made memorable.</h1>
                        <p className="lead">
                            FlyAirways is a modern travel booking platform
                            focused on simplicity, trust, and delightful
                            experiences. Discover curated destinations, compare
                            packages, and book securely — all from one beautiful
                            interface.
                        </p>

                        <div className="cta-row">
                            <button className="btn">Explore Packages</button>
                            <button className="btn btn-ghost">
                                Contact Support
                            </button>
                        </div>
                    </div>
                </section>

                {/* Highlights */}
                <section className="about-highlights">
                    <h2 className="section-label">Why FlyAirways</h2>
                    <div className="grid">
                        <article className="card">
                            <h3>Curated Destinations</h3>
                            <p>
                                Handpicked spots with trusted reviews, beautiful
                                imagery, and complete trip info.
                            </p>
                        </article>

                        <article className="card">
                            <h3>Flexible Packages</h3>
                            <p>
                                Choose packages that match your budget and
                                preferences — from budget to luxury.
                            </p>
                        </article>

                        <article className="card">
                            <h3>Secure Bookings</h3>
                            <p>
                                Safe checkout and clear policies so you can book
                                with confidence.
                            </p>
                        </article>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="about-vision">
                    <div className="two-col">
                        <div className="panel">
                            <h3>Our Mission</h3>
                            <p>
                                To make travel planning seamless and accessible
                                by combining human curation with modern,
                                easy-to-use technology. We want everyone to
                                explore the world without the stress — one
                                simple booking at a time.
                            </p>
                        </div>

                        <div className="panel">
                            <h3>Our Vision</h3>
                            <p>
                                To be the travel platform people trust for fast,
                                reliable, and delightful booking experiences —
                                inspiring journeys that create lifelong
                                memories.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="about-team">
                    <h3 className="section-label">The Team</h3>
                    <div className="team">
                        <div className="avatar">FA</div>
                        <div className="team-info">
                            <h4>Founders & Designers</h4>
                            <p>
                                A small team of travel lovers, designers, and
                                engineers dedicated to building simple travel
                                tools.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="about-cta">
                    <div className="panel cta-panel">
                        <div>
                            <h3>Ready to start your next trip?</h3>
                            <p>
                                Find deals and plan effortlessly with
                                FlyAirways.
                            </p>
                        </div>
                        <div>
                            <button className="btn">Book Now</button>
                        </div>
                    </div>
                </section>
            </main>
			<Footer />
        </>
    );
};

export default About;
