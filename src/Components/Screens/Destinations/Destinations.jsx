import React, { useEffect } from "react";
import "./Destinations.css";
import data from "../../Assets/data/data.json";
import { GrLocation } from "react-icons/gr";
import { BsClipboardCheck } from "react-icons/bs";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import Aos from "aos";
import 'aos/dist/aos.css';

const Destinations = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

  return (
    <>
        <NavBar />
        <section className="main container section">

            {/* Section Title */}
            <div className="destinations-hero">
                <h1 data-aos="fade-right" className="title">Explore Our Destinations</h1>
                <p data-aos="fade-right" >Discover beautiful places around the world and choose your next adventure.</p>
            </div>

            {/* Destination Cards */}
            <div className="secContent grid">
                {data.map((place) => (
                    <div key={place.id} className="cardPlace" data-aos="fade-up">

                        {/* Destination Cards Image */}
                        <div className="imgdiv">
                            <img src={place.image} alt={place.title} />
                        </div>

                        {/* Destination Cards Info */}
                        <div className="cardInfo">
                            <h4 className="destTitle">{place.title}</h4>
                            <span className="spanContant flex">
                                <GrLocation className="icon" />
                                <span className="name">{place.location}</span>
                            </span>
                            <div className="fees flex">
                                <div className="grade">
                                    <span>
                                        {place.grade}
                                        <small>+1</small>
                                    </span>
                                </div>
                                <div className="price">
                                    <h5>${place.price}</h5>
                                </div>
                            </div>
                            <div className="desc">
                                <p>{place.description}</p>
                            </div>
                            <button className="btn flex">
                                DETAILS <BsClipboardCheck className="icon" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        <Footer />
    </>
  );
};

export default Destinations;