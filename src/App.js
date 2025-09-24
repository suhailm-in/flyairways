import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Screens/Home/Home";
import Contact from "./Components/Screens/Contact/Contact";
import Login from "./Components/Screens/Login/Login";
import Signup from "./Components/Screens/Signup/Signup";
import About from "./Components/Screens/About/About";
import NotFound from "./Components/Screens/NotFound/NotFound";
import Destinations from "./Components/Screens/Destinations/Destinations";
import Place from "./Components/Screens/Place/Place";
import PackgesDetails from "./Components/Screens/PackgesDetails/PackgesDetails";
import Blogs from "./Components/Screens/Blogs/Blogs";
import Profile from "./Components/Screens/Profile/Profile";
import ForgotPassword from "./Components/Screens/ForgotPassword/ForgotPassword";
import React, { useEffect, useState } from "react";
import PrivetRoute from "./Components/PrivetRoute";

export const UserContext = React.createContext();



function App() {
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(true);

    const updateUserData = (action) => {
        switch (action.type) {
            case "LOGOUT":
                setUserData(null);
                localStorage.clear();
                break;
            case "LOGIN":
                setUserData(action.payload);
                break;
            case "SIGNUP":
                setUserData(action.payload);
                break;
            default:
                break;
        }
    };

    useEffect(()=>{
        setUserData(JSON.parse(localStorage.getItem("user_data")));
        setLoading(false);
    }, [])
    
    return loading?(
        <h1>Loading.....</h1>
    ) : (
        <UserContext.Provider value={{userData, updateUserData}}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/destination" element={<Destinations />} />
                    <Route path="/packages" element={<PackgesDetails />} />
                    <Route path="packages/:id" element={<PrivetRoute Component={Place} />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profile" element={<PrivetRoute Component={Profile} />} />
                    <Route path="/forgotpass" element={<ForgotPassword />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
