import React from "react";
import InnerHeader from "../layout/InnerHeader";
import Intro from "../about/Intro";
import Title from "../layout/Title";
import Skill from "../about/Skill";
import SubSkills from "../about/SubSkills";
import Timeline from "../about/Timeline";

const About = () => {
  return (
    <>
      <InnerHeader current="about" />
      <Intro />
      <section id="about-b" className="bg-dark py-3">
        <div className="container">
          <Title text="Programming Languages" />
          <Skill title="JavaScript" width="100%" />
          <Skill title="HTML, CSS" width="100%" />
          <Skill title="SQL, NoSQL" width="95%" />
          <Skill title="Java" width="90%" />
          <Skill title="Python" width="80%" />
        </div>
      </section>
      <section id="about-c" className="py-4 bg-light">
        <SubSkills />
      </section>
      <section id="about-d" className="bg-dark py-3">
        <Timeline />
      </section>
      <section id="about-e"></section>
    </>
  );
};

export default About;
