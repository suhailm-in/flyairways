import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import "./Signup.css";
import NavBar from "../Navbar/NavBar";
import axios from "axios";
import { BASE_URL } from "../../../axiosConfig";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";
// import { data } from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const {updateUserData} = useContext(UserContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        axios.post(`${BASE_URL}/auth/register/`,{ email:formData.email, password:formData.password, first_name:formData.name})
		.then((response)=>{
            let data = response.data.data;
            let status_code = response.data.StatusCode;
            console.log(data);
            if( status_code === 6000 ){
                localStorage.setItem("user_data", JSON.stringify(data));
                updateUserData({type: "SIGNUP", payload:data});
                navigate("/");
            }else{
                setMessage(response.data.message);
            }
		}).catch((error)=>{
			console.log(error.response.data.message);
		})
        // setFormData({ name: "", email: "", password: "" });
    };

    const handleGoogleSignup = () => {
        alert("Sign up with Google clicked!");
        // Integrate Google OAuth here in future
    };

    return (
        <>
            <NavBar />
            <div className="signup-page">
                {/* Left Side */}
                <div className="signup-left">
                    <h1>FlyAirways</h1>
                    <p>
                        Start your journey with us today. Book flights, discover
                        destinations, and create unforgettable memories.
                    </p>
                </div>

                {/* Right Side */}
                <div className="signup-right">
                    <div className="signup-container">
                        <h2 className="title">Create Your Account</h2>
                        <p className="subtitle">
                            Join FlyAirways and start booking amazing trips!
                        </p>

                        <form onSubmit={handleSubmit} className="signup-form">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
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
                            <button type="submit" className="signup-btn">
                                Sign Up
                            </button>
                            {message && <small className="errorMsg">{message}</small>}
                        </form>

                        <div className="social-signup">
                            <p>Or sign up with</p>
                            <button
                                className="google-btn"
                                onClick={handleGoogleSignup}
                            >
                                <FaGoogle className="google-icon" /> Sign up
                                with Google
                            </button>
                        </div>

                        <p className="login-link">
                            Already have an account? <a href="/login">Login</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
