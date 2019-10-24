import React from "react";
import InnerHeader from "../layout/InnerHeader";
import Intro from "../about/Intro";
import Title from "../layout/Title";
import Skill from "../about/Skill";
import SubSkills from "../about/SubSkills";

const About = () => {
  return (
    <>
      <InnerHeader current="about" />
      <Intro />
      <section id="about-b" className="bg-dark py-3">
        <div className="container">
          <Title text="Programming Languages" />
          <Skill title="JavaScript, JSX, TypeScript" width="100%" />
          <Skill title="HTML, CSS" width="100%" />
          <Skill title="SQL, NoSQL" width="95%" />
          <Skill title="Java" width="90%" />
          <Skill title="Python" width="80%" />
          <Skill title="R" width="50%" />
        </div>
      </section>
      <section id="about-c" className="py-4 bg-light">
        <SubSkills />
      </section>
    </>
  );
};

export default About;
