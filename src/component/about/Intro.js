import React from 'react';
import about from '../../img/about.jpg';
import resume from '../../files/Wang-Shiyu-Resume.pdf';

const Intro = () => {
  const intro =
    "I'm a full-stack web developer with hands on experience in designing, developing and maintaining web as well as mobile applications. Possesses diverse experience of creating multiple highly scalable applications using different tech stacks. Adept at understanding the requirements and delivering projects accordingly. Demonstrates the capability of maintaining code by fixing bugs as well as conducting end to end testing. Highly skilled at problem solving to ship mature products within deadlines.";
  return (
    <section id="about-a" className="text-center py-3">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="bottom-line" />

        <div className="about-info">
          <img src={about} alt="Qiuting" className="bio-image" />
          <div className="bio bg-light">
            <h1 className="lead">Shiyu Wang</h1>
            <p>{intro}</p>
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
