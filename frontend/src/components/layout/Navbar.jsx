import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../auth/auth';

const Navbar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <Link className="navbar-brand" to="/">
                <img src="your-logo-url.png" alt="Logo" className="logo" />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blogs">Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ecommercepage">E-Commerce</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
                {/* <div className="reglog">
                    <Link className="btn" to="/register">Register</Link>
                    <Link className="btn" to="/login">Login</Link>
                </div> */}
                <div className="reglog">
                    {isLoggedIn ? (
                        <li>
                            <Link className="btn" to="/logout">Logout</Link>
                        </li>
                    ) : (
                        <>
                            <Link className="btn" to="/register">Register</Link>
                            <Link className="btn" to="/login">Login</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
