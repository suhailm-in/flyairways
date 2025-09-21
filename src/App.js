import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "./Components/Screens/Navbar/NavBar";
import Home from "./Components/Screens/Home/Home";
// import Main from "./Components/Screens/Main/Main";
// import Footer from "./Components/Screens/Footer/Footer";
import Contact from "./Components/Screens/Contact/Contact";
import Login from "./Components/Screens/Login/Login";
import Signup from "./Components/Screens/Signup/Signup";
import About from "./Components/Screens/About/About";
import NotFound from "./Components/Screens/NotFound/NotFound";
import Destinations from "./Components/Screens/Destinations/Destinations";
import Packages from "./Components/Screens/Packages/Packages";
import Place from "./Components/Screens/Place/Place";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="destination" element={<Destinations />} />
                <Route path="contact" element={<Contact />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="packages" element={<Packages />} />
                <Route path="Place" element={<Place />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
