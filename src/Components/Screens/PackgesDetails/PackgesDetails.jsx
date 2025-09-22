import React, { useEffect, useState } from "react";
import "./PackgesDetails.css";
import data from "../../Assets/data/data.json";
import { BsClipboardCheck } from "react-icons/bs";
import NavBar from "../Navbar/NavBar";
import Aos from "aos";
import "aos/dist/aos.css";

const PackgesDetails = () => {
    const [filters, setFilters] = useState({
        destination: "",
        price: "",
        duration: "",
    });

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const filteredPackages = data.filter((pkg) => {
        return (
            (filters.destination
                ? pkg.location === filters.destination
                : true) &&
            (filters.price ? pkg.price <= parseInt(filters.price) : true) &&
            (filters.duration ? pkg.duration === filters.duration : true)
        );
    });

    return (
        <>
            <NavBar />
            <main className="packages-wrapper">
                {/* Hero Section */}
                <section data-aos="fade-down" className="packages-hero">
                    <h1>Our Travel Packages</h1>
                    <p>
                        Choose from our curated travel packages and book your
                        perfect trip.
                    </p>
                </section>

                {/* Filters */}
                <div className="filters">
                    <select name="destination" onChange={handleFilterChange}>
                        <option value="">Filter by Destination</option>
                        {[...new Set(data.map((pkg) => pkg.location))].map(
                            (loc, idx) => (
                                <option key={idx} value={loc}>
                                    {loc}
                                </option>
                            )
                        )}
                    </select>

                    <select name="price" onChange={handleFilterChange}>
                        <option value="">Filter by Price</option>
                        <option value="1500">Up to $1500</option>
                        <option value="2000">Up to $2000</option>
                        <option value="3000">Up to $3000</option>
                        <option value="4000">Up to $4000</option>
                    </select>

                    <select name="duration" onChange={handleFilterChange}>
                        <option value="">Filter by Duration</option>
                        {[...new Set(data.map((pkg) => pkg.duration))].map(
                            (dur, idx) => (
                                <option key={idx} value={dur}>
                                    {dur}
                                </option>
                            )
                        )}
                    </select>
                </div>

                {/* Packages Grid */}
                <section className="packages-list">
                    {filteredPackages.length > 0 ? (
                        filteredPackages.map((pkg) => (
                            <div
                                key={pkg.id}
                                className="package-card"
                                data-aos="fade-up"
                            >
                                <div className="imgdiv">
                                    <img src={pkg.image} alt={pkg.title} />
                                    <span className="tag">{pkg.grade}</span>
                                </div>
                                <div className="card-info">
                                    <h4 className="package-title">
                                        {pkg.title}
                                    </h4>
                                    <p className="duration">{pkg.duration}</p>
                                    <p className="desc">{pkg.description}</p>

                                    <div className="price-features flex">
                                        <span className="price">
                                            ${pkg.price}
                                        </span>
                                        <div className="features-list">
                                            {pkg.features.map(
                                                (feature, index) => (
                                                    <span
                                                        key={index}
                                                        className="feature-badge"
                                                    >
                                                        {feature}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <button className="btn btn-packege flex">
                                        BOOK NOW{" "}
                                        <BsClipboardCheck className="icon" />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-results">
                            No packages found. Try adjusting filters.
                        </p>
                    )}
                </section>
            </main>
        </>
    );
};

export default PackgesDetails;
