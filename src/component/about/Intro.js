import React from "react";
import about from "../../img/about.jpg";

const Intro = () => {
    return (
        <section id="about-a" className="text-center py-3">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="bottom-line" />

                <div className="about-info">
                    <img src={about} alt="Qiuting" className="bio-image" />
                    <div className="bio bg-light">
                        <h5 className="lead">Shiyu Wang</h5>
                        <p>
                            Full-stack developer with 3 years of experience in
                            designing, developing, debugging and training
                            students within web application development.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
