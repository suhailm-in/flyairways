import React from 'react'
import "./Packages.css";
import packagesData from "../../Assets/data/packge.json";
import { BsClipboardCheck } from "react-icons/bs";
import NavBar from '../Navbar/NavBar';

const Packages = () => {
  return (
    <>
        <NavBar />
        <main className="packages-wrapper">
            <section className="packages-hero">
                <h1>Our Travel Packages</h1>
                <p>Choose from our curated travel packages and book your perfect trip.</p>
            </section>

            <section className="packages-grid">
                {packagesData.map((pkg) => (
                <div key={pkg.id} className="package-card">
                    <div className="imgdiv">
                        <img src={pkg.imgsrc} alt={pkg.title} />
                    </div>
                    <div className="card-info">
                        <h4 className="package-title">{pkg.title}</h4>
                        <p className="duration">{pkg.duration}</p>
                        <p className="desc">{pkg.description}</p>

                        <div className="price-features flex">
                            <span className="price">{pkg.price}</span>
                            <span className="features">{pkg.features.join(", ")}</span>
                        </div>

                        <button className="btn flex">
                            BOOK NOW <BsClipboardCheck className="icon" />
                        </button>
                    </div>
                </div>
                ))}
            </section>  
        </main>
    </>
  );
};

export default Packages;