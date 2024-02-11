/* eslint-disable no-unused-vars */
import React from "react";
import "./style.css" 

const Navbar = () => {

    return (
        <div className="navbar-wrapper">
        <div className="navbar">
            <div>
                <h1>ini logo</h1>
            </div>
            <div className="nav-link">
                <p>Home</p>
                <p>About</p>
                <a href="#contact">Contact Us</a>
            <div>
                <button>Login</button>
                
                <button>Sign Up</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar