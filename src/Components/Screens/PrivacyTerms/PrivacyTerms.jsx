import React from "react";
import "./PrivacyTerms.css";
import NavBar from "../Navbar/NavBar";

const PrivacyTerms = () => {
  return (
    <>
      <NavBar />
      <div className="privacy-page">
        {/* LEFT INFO */}
        <div className="privacy-info">
          <h1>Privacy & Terms 🔒</h1>
          <p>
            At <span>FlyAirways</span>, your privacy and trust matter. Learn how
            we protect your data and understand the terms of using our services.
          </p>
          <ul>
            <li>✔ Safe & secure data handling</li>
            <li>✔ Transparent policies</li>
            <li>✔ User-friendly terms</li>
          </ul>
        </div>

        {/* RIGHT CONTENT */}
        <div className="privacy-content">
          <h2>Privacy Policy</h2>
          <p>
            FlyAirways collects personal information to provide you with a
            seamless travel booking experience. We respect your privacy and do
            not share your data without consent. Data is used only for
            improving services, communications, and personalized offers.
          </p>
          
          <h2>Terms of Service</h2>
          <p>
            By using FlyAirways, you agree to follow our terms, including
            accurate booking information, timely payments, and lawful use of
            our platform. We reserve the right to update terms and policies as
            needed. Continued use signifies acceptance of any changes.
          </p>

          <h2>Cookies & Tracking</h2>
          <p>
            We use cookies to enhance your browsing experience, remember your
            preferences, and collect anonymous analytics to improve our services.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about privacy or terms, reach out to us at
            <a href="mailto:support@flyairways.com"> support@flyairways.com</a>.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyTerms;
