import React from "react";
import about from "../../img/about.jpg";
import resume from "../../files/Wang-Shiyu-Resume.pdf";

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
              I am a full-stack developer with experience in designing,
              developing, debugging and training students within full-stack
              development. Specializing mostly in JavaScript/Node.js but also
              work with Java and Python
            </p>
            <div className="resume-button">
              <a href={resume} download className="btn-dark">
                Download My Latest Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
