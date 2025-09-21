import React, { useEffect } from "react";
import "./main.css";
import locations from "../../Assets/data/locations.json";
import { GrLocation } from "react-icons/gr";
import { BsClipboardCheck } from "react-icons/bs";
import Aos from "aos";
import 'aos/dist/aos.css';

const Main = () => {

	useEffect(()=>{
			Aos.init({duration: 2000})
		}, [])

    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">Most visited destination</h3>
            </div>
            <div className="secContent grid">
                {locations.slice(0, 6).map((place) => (
                    <div key={place.id} className="cardPlace" data-aos="fade-up">
                        <div className="imgdiv">
                            <img src={place.imgsrc} alt={place.destTitle} />
                        </div>
                        <div className="cardInfo">
                            <h4 className="destTitle">{place.destTitle}</h4>
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
                                    <h5>{place.fees}</h5>
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
    );
};

export default Main;
