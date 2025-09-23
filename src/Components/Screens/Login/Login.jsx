import React, { useContext, useState } from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import "./Login.css";
import NavBar from "../Navbar/NavBar";
import axios from "axios";
import { BASE_URL } from "../../../axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate()
    const {updateUserData} = useContext(UserContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
		axios.post(`${BASE_URL}/auth/token/`,{ username:formData.email, password:formData.password})
		.then((response)=>{
			// console.log(response)
            let data = response.data;
            localStorage.setItem("user_data", JSON.stringify(data));
            updateUserData({type: "LOGIN", payload:data});
            navigate("/");
		}).catch((error)=>{
			// console.log(error.response.status);
            if(error.response.data.detail){
                setMessage(error.response.data.detail);
            }
			
		})
        // setFormData({ email: "", password: "" });
    };

    return (
        <>
            <NavBar />
            <div className="login-page">
                {/* Left Side */}
                <div className="login-left">
                    <h1>FlyAirways</h1>
                    <p>
                        Discover the world with us. Exclusive packages, seamless
                        booking, and unforgettable memories.
                    </p>
                </div>

                {/* Right Side */}
                <div className="login-right">
                    <div className="login-container">
                        <h2 className="title">Welcome Back</h2>
                        <p className="subtitle">
                            Login to FlyAirways and manage your bookings.
                        </p>

                        <form onSubmit={handleSubmit} className="login-form">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit" className="login-btn">
                                Login
                            </button>
                            {message && <small className="errorMsg">{message}</small>}
                        </form>

                        <Link to="/forgotpass" className="forgot-password">Forgot Password?</Link>

                        <div className="social-login">
                            <p>Or continue with</p>
                            <div className="social-icons">
                                <button className="social facebook">
                                    <FaFacebookF />
                                </button>
                                <button className="social google">
                                    <FaGoogle />
                                </button>
                                <button className="social twitter">
                                    <FaTwitter />
                                </button>
                            </div>
                        </div>

                        <p className="signup-link">
                            Don’t have an account? <a href="/signup">Sign Up</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
