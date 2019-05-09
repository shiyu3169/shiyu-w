import React from "react";
import logo from "../../img/logo.png";
export default function Navbar() {
    return (
        <nav id="main-nav">
            <img src={logo} alt="My portfolio" id="logo" />
            <ul>
                <li>
                    <a href="index.html" className="current">
                        Home
                    </a>
                </li>
                <li>
                    <a href="about.html">About</a>
                </li>
                <li>
                    <a href="work.html">Work</a>
                </li>
                <li>
                    <a href="contact.html">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
