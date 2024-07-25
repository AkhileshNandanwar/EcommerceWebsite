import { useState } from "react";
import { useAuth } from "../components/auth/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
    topic: "general", // Default value for the topic
};

export const Contact = () => {
    const [contact, setContact] = useState(defaultContactFormData);
    const [userData, setUserData] = useState(true);
    const { user } = useAuth();
    const navigate = useNavigate(); // Initialize useNavigate

    if (userData && user) {
        setContact({
            username: user.username,
            email: user.email,
            message: "",
            topic: "general", // Set default topic
        });
        setUserData(false);
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/form/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });
            if (response.ok) {
                setContact(defaultContactFormData);
                const data = await response.json();
                console.log(data);
                alert("Message sent successfully");
                navigate("/");
            } else {
                console.error("API Error:", response.status, response.statusText);
            }
        } catch (error) {
            console.log(error);
            alert("Message not sent");
        }
    };

    return (
        <>
            <section>
                <main>
                    <div className="section-contact">
                        <div className="contact-content container">
                            <h1 className="main-heading">Contact us</h1>
                            <div className="container grid grid-two-cols">
                                <div className="contact-img">
                                    <img
                                        src="/src/assets/images/contact1-removebg-preview.png"
                                        alt="we are always ready to help"
                                    />
                                </div>
                                <div className="section-form">
                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <label htmlFor="username">Username</label>
                                            <input
                                                type="text"
                                                name="username"
                                                placeholder="Username"
                                                id="username"
                                                required
                                                autoComplete="off"
                                                value={contact.username}
                                                onChange={handleInput}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                id="email"
                                                required
                                                autoComplete="off"
                                                value={contact.email}
                                                onChange={handleInput}
                                            />
                                        </div>
                                        <div className="radio-group">
                                            <legend>Topic</legend>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="topic"
                                                    value="general"
                                                    checked={contact.topic === "general"}
                                                    onChange={handleInput}
                                                />
                                                <span>General</span>
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="topic"
                                                    value="blog"
                                                    checked={contact.topic === "blog"}
                                                    onChange={handleInput}
                                                />
                                                <span>Blog</span>
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="topic"
                                                    value="ecommerce"
                                                    checked={contact.topic === "ecommerce"}
                                                    onChange={handleInput}
                                                />
                                                <span>E-Commerce</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label htmlFor="message">Message</label>
                                            <textarea
                                                name="message"
                                                placeholder="Your message"
                                                id="message"
                                                required
                                                autoComplete="off"
                                                cols="60"
                                                rows="10"
                                                value={contact.message}
                                                onChange={handleInput}
                                            ></textarea>
                                        </div>
                                        <br />
                                        <button type="submit" className="btn btn-submit">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <section className="mb-3">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.4846162711856!2d72.88640247425202!3d19.086384551648358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c887efb78b9f%3A0x9f9dc99c3119470a!2sPhoenix%20Marketcity!5e0!3m2!1sen!2sin!4v1719555784417!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </section>
                    </div>
                </main>
            </section>
        </>
    );
};
