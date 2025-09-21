import React from "react";
import "./Destinations.css";
import locations from "../../Assets/data/locations.json";
import { GrLocation } from "react-icons/gr";
import { BsClipboardCheck } from "react-icons/bs";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";

const Destinations = () => {
  return (
    <>
        <NavBar />
        <main className="destinations-wrapper">
        <section className="destinations-hero">
            <h1>Explore Our Destinations</h1>
            <p>Discover beautiful places around the world and choose your next adventure.</p>
        </section>

        <section className="destinations-grid">
            {locations.map((place) => (
            <div key={place.id} className="destination-card">
                <div className="imgdiv">
                <img src={place.imgsrc} alt={place.destTitle} />
                </div>
                <div className="card-info">
                <h4 className="destTitle">{place.destTitle}</h4>
                <span className="location flex">
                    <GrLocation className="icon" />
                    <span>{place.location}</span>
                </span>
                <div className="fees flex">
                    <div className="grade">
                    <span>
                        {place.grade}
                        <small>+1</small>
                    </span>
                    </div>
                    <div className="price">
                    <h5>{place.fees}</h5>
                    </div>
                </div>
                <p className="desc">{place.description}</p>
                <button className="btn flex">
                    DETAILS <BsClipboardCheck className="icon" />
                </button>
                </div>
            </div>
            ))}
        </section>
        </main>
        <Footer />
    </>
  );
};

export default Destinations;