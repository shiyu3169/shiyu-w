import React from "react";
import InnerHeader from "../utility/InnerHeader";
import about from "../../img/about.jpg";
import logo1 from "../../img/about-logos/logo-envato.png";
import logo2 from "../../img/about-logos/logo-magento.png";
import logo3 from "../../img/about-logos/logo-woocommerce.png";
import logo4 from "../../img/about-logos/logo-wordpress.png";

const About = () => {
    return (
        <>
            <InnerHeader current="about" />
            <section id="about-a" className="text-center py-3">
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <div className="bottom-line" />
                    <p className="lead">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Placeat, ducimus!
                    </p>
                    <div className="about-info">
                        <img src={about} alt="Qiuting" className="bio-image" />
                        <div className="bio bg-light">
                            <h4>Your Project Is In Safe Hands</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Totam doloribus nisi maiores
                                aspernatur modi ratione architecto officia sunt
                                suscipit! Ad tempore magni nam quos eligendi
                                natus sit quod reprehenderit eos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about-b" className="bg-dark py-3">
                <div className="container">
                    <h2 className="section-title">Technical Skills</h2>
                    <div className="bottom-line" />
                    <h4>Jewelry Making (Casting):</h4>
                    <div className="progress">
                        <div style={{ width: "100%" }} />
                    </div>
                    <h4>Jewlry Design(Rhino/Matrix):</h4>
                    <div className="progress">
                        <div style={{ width: "100%" }} />
                    </div>
                    <h4>Adobe Photoshop:</h4>
                    <div className="progress">
                        <div style={{ width: "80%" }} />
                    </div>
                    <h4>Adobe Illustrator:</h4>
                    <div className="progress">
                        <div style={{ width: "70%" }} />
                    </div>
                    <h4>Photography:</h4>
                    <div className="progress">
                        <div style={{ width: "60%" }} />
                    </div>
                    <h4>Adobe After Effects:</h4>
                    <div className="progress">
                        <div style={{ width: "50%" }} />
                    </div>
                </div>

                <section id="about-c" className="py-4 bg-light">
                    <div className="container">
                        <div className="about-logos">
                            <img src={logo1} alt="" />
                            <img src={logo2} alt="" />
                            <img src={logo3} alt="" />
                            <img src={logo4} alt="" />
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default About;
