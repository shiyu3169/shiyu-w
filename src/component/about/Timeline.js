import React from "react";
import Title from "../layout/Title";
import TimeLineBox from "./TimeLineBox";
const Timeline = () => {
  return (
    <>
      <Title text="Career Timeline" />
      <section id="timeline">
        <ul>
          <TimeLineBox
            title="2012: Northeastern University"
            description="Start learning computer science in Northeastern University, Boston MA"
          />
          <TimeLineBox
            title="2013: JAVA Teaching Assistant"
            description="Provided supplemental support for students in Computer Science to enhance their skills in JAVA"
          />
          <TimeLineBox
            title="2014 - 2015: SourceOne Inc (Co-op)"
            description="Full-time Worked on the development of web portal development with JavaScript, Durandal.js, Knockout.js, SQL and Telerik"
          />
          <TimeLineBox
            title="2016: B.S. -> M.S."
            description="Graduated from Northeastern University and Starting pursue my master degree in computer science"
          />
          <TimeLineBox
            title="2017: Graduated from Northeastern University"
            description="Graduated from Northeastern University with my Master degree in computer science."
          />
          <TimeLineBox
            title="2018 - Present: Urban League of Eastern MA"
            description="Full-time working as MSIMBO Full-Stack Development Instructor at ULEM to develope applications and instruct students."
          />
        </ul>
      </section>
    </>
  );
};

export default Timeline;
