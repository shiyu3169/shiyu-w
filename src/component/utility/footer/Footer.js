import React from "react";
import Social from "./Social";

const Footer = () => {
    return (
        <footer id="main-footer">
            <div className="footer-content container">
                <p>Copyright &copy; 2019, All Rights Reserved</p>
                <div className="social">
                    <Social
                        to="https://www.linkedin.com/in/shiyu-wang-profile/"
                        iconClass="fab fa-linkedin fa-2x"
                    />
                    <Social
                        to="https://github.com/shiyu3169"
                        iconClass="fab fa-github-square fa-2x"
                    />
                    <Social
                        to="mailto:shiyu3169@gmail.com"
                        email={`true`}
                        iconClass="fas fa-envelope fa-2x"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
