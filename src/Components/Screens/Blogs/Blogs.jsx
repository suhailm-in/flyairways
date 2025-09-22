import React, { useEffect } from "react";
import "./Blogs.css";
import blogs from "../../Assets/data/blogs.json";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const Blogs = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <NavBar />
            <div className="blog-page">
                <div className="blog-hero" data-aos="fade-up">
                    <h1>Our Travel Blog</h1>
                    <p>
                        Get travel tips, inspiration, and guides from
                        FlyAirways.
                    </p>
                </div>

                <div className="blog-list" data-aos="fade-up">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="blog-card">
                            <div className="imgdiv">
                                <img src={blog.image} alt={blog.title} />
                            </div>
                            <div className="card-content">
                                <h3>{blog.title}</h3>
                                <p className="meta">
                                    By {blog.author} | {blog.date}
                                </p>
                                <p className="description">
                                    {blog.description}
                                </p>
                                <button className="btn">Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blogs;
