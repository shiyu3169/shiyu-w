import React from "react";
import Navbar from "../utility/Navbar";
import Typer from "../utility/Typer";

export default function Header() {
    return (
        <header id="header-home">
            <div className="container">
                <Navbar />
                <div className="header-content">
                    <h1>I Am Shiyu Wang</h1>
                    <p className="lead">
                        The{" "}
                        <Typer
                            words={[
                                "Software Developer",
                                "Full-Stack Developer",
                                "Web Developer"
                            ]}
                        />
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
}
