import React from "react";
import Navbar from "../utility/Navbar";
import Typer from "../utility/Typer";

const Header = () => {
    return (
        <header id="header-home">
            <div className="container">
                <Navbar current="home" />
                <div className="header-content">
                    <h1>Shiyu Wang</h1>
                    <p className="lead">
                        <strong>
                            The <Typer words={["Full-Stack Developer"]} />
                        </strong>
                    </p>
                    <div className="header-button">
                        <a href="#work-a" className="btn-light">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
