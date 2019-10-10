import React from "react";
import InnerHeader from "../layout/InnerHeader";

import react from "../../img/about-logos/react.png";
import angular from "../../img/about-logos/angular.png";
import bootstrap from "../../img/about-logos/bootstrap.png";
import jquery from "../../img/about-logos/jquery.png";
import node from "../../img/about-logos/node.png";
// import springmvc from '../../img/about-logos/springmvc.png';
import vue from "../../img/about-logos/vue.png";

import Intro from "../about/Intro";
import Title from "../layout/Title";
import Skill from "../about/Skill";
import SubSkill from "../about/SubSkill";

const About = () => {
  return (
    <>
      <InnerHeader current="about" />
      <Intro />
      <section id="about-b" className="bg-dark py-3">
        <div className="container">
          <Title text="Programming Languages" />
          <Skill title="JavaScript, JSX, TypeScript" width="100%" />
          <Skill title="HTML, CSS/Sass" width="100%" />
          <Skill title="SQL, NoSQL" width="95%" />
          <Skill title="Java" width="90%" />
          <Skill title="Python" width="80%" />
          <Skill title="R" width="50%" />
        </div>
      </section>
      <section id="about-c" className="py-4 bg-light">
        <div className="container">
          <Title text="Frameworks, Organizational Libraries & Environments" />
          <div className="about-logos">
            <SubSkill title="React" img={react} />
            <SubSkill title="Vue" img={vue} />
            <SubSkill title="Angular" img={angular} />
            <SubSkill title="Bootstrap" img={bootstrap} />
            <SubSkill title="jQuery" img={jquery} />
            <SubSkill title="Node.js" img={node} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
