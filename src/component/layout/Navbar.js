import React, { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = ({ current }) => {
    useEffect(() => {
        document.querySelector(`#${current}`).classList.add("current");
    });

    return (
        <nav id="main-nav">
            <span />
            <ul>
                <li>
                    <Link to="/" id="home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link id="about" to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link id="work" to="/#work-a">
                        Work
                    </Link>
                </li>
                <li>
                    <Link id="contact" to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
