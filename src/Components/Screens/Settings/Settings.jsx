import React, { useState } from "react";
import "./Settings.css";
import NavBar from "../Navbar/NavBar";
import SideBar from "../SideBar/SideBar";

const Settings = () => {
    const [profile, setProfile] = useState({
        name: "John Doe",
        email: "john@example.com",
        phone: "+1 234 567 890",
    });

    const [password, setPassword] = useState({
        current: "",
        new: "",
        confirm: "",
    });

    const [notifications, setNotifications] = useState({
        email: true,
        sms: false,
        push: true,
    });

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPassword((prev) => ({ ...prev, [name]: value }));
    };

    const handleNotificationsChange = (e) => {
        const { name, checked } = e.target;
        setNotifications((prev) => ({ ...prev, [name]: checked }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Settings saved successfully!");
    };

    return (
        <>
            <NavBar />
            <div className="main-div">
                <SideBar/>
                <div className="settings-page">

                    <h1>Settings</h1>

                    {/* PROFILE */}
                    <section className="settings-section card">
                        <h2>Profile</h2>
                        <form onSubmit={handleSubmit} className="profile-form">
                            <div className="input-row">
                                <label>
                                    Full Name
                                    <input
                                        type="text"
                                        name="name"
                                        value={profile.name}
                                        onChange={handleProfileChange}
                                    />
                                </label>
                                <label>
                                    Email
                                    <input
                                        type="email"
                                        name="email"
                                        value={profile.email}
                                        onChange={handleProfileChange}
                                    />
                                </label>
                            </div>
                            <label>
                                Phone
                                <input
                                    type="text"
                                    name="phone"
                                    value={profile.phone}
                                    onChange={handleProfileChange}
                                />
                            </label>
                            <button type="submit" className="save-btn">Save Profile</button>
                        </form>
                    </section>

                    {/* SECURITY / PASSWORD */}
                    <section className="settings-section card">
                        <h2>Security / Password</h2>
                        <form onSubmit={handleSubmit} className="password-form">
                            <label>
                                Current Password
                                <input
                                    type="password"
                                    name="current"
                                    value={password.current}
                                    onChange={handlePasswordChange}
                                />
                            </label>

                            <div className="input-row">
                                <label>
                                    New Password
                                    <input
                                        type="password"
                                        name="new"
                                        value={password.new}
                                        onChange={handlePasswordChange}
                                    />
                                </label>
                                <label>
                                    Confirm Password
                                    <input
                                        type="password"
                                        name="confirm"
                                        value={password.confirm}
                                        onChange={handlePasswordChange}
                                    />
                                </label>
                            </div>

                            <button type="submit" className="save-btn">Update Password</button>
                        </form>
                    </section>

                    {/* NOTIFICATIONS */}
                    <section className="settings-section card">
                        <h2>Notifications</h2>
                        <form onSubmit={handleSubmit} className="notification-form">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    name="email"
                                    checked={notifications.email}
                                    onChange={handleNotificationsChange}
                                />
                                Email Notifications
                            </label>

                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    name="sms"
                                    checked={notifications.sms}
                                    onChange={handleNotificationsChange}
                                />
                                SMS Notifications
                            </label>

                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    name="push"
                                    checked={notifications.push}
                                    onChange={handleNotificationsChange}
                                />
                                Push Notifications
                            </label>

                            <button type="submit" className="save-btn">Save Preferences</button>
                        </form>
                    </section>
                </div>
            </div >
        </>
    );
};

export default Settings;
