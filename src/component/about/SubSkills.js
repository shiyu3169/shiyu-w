import React, { useState } from "react";
import Title from "../layout/Title";
import SubSkill from "./SubSkill";

const SubSkills = () => {
  const [skills] = useState([
    {
      name: "Object Oriented Programming",
      url: "https://en.wikipedia.org/wiki/Object-oriented_programming"
    },
    {
      name: "Test-driven Development",
      url: "https://en.wikipedia.org/wiki/Test-driven_development"
    },
    {
      name: "Agile Software Development",
      url: "https://en.wikipedia.org/wiki/Agile_software_development"
    },
    { name: "React", url: "https://reactjs.org/" },
    { name: "Redux", url: "https://redux.js.org/" },
    { name: "React Native", url: "https://facebook.github.io/react-native/" },
    { name: "Angular", url: "https://angular.io/" },
    { name: "Vue", url: "https://vuejs.org/" },
    { name: "TypeScript", url: "https://www.typescriptlang.org/" },
    { name: "jQuery", url: "https://jquery.com/" },
    { name: "Bootstrap", url: "https://getbootstrap.com/" },
    { name: "Node.js", url: "https://nodejs.org/en/" },
    { name: "Express", url: "https://expressjs.com/" },
    { name: "Sass/Scss", url: "https://sass-lang.com/" },
    { name: "Spring Framework", url: "https://spring.io/" },
    { name: "Jasmine", url: "https://jasmine.github.io/" },
    { name: "MongoDB", url: "https://www.mongodb.com/" },
    { name: "Amazon Web Service", url: "https://aws.amazon.com/" },
    { name: "MySQL", url: "https://www.mysql.com/" },
    { name: "JIRA", url: "https://www.atlassian.com/software/jira" },
    { name: "Git", url: "https://git-scm.com/" },
    { name: "Heroku", url: "https://heroku.com" }
  ]);
  return (
    <div className="container">
      <Title text="Technical Skills" />
      <div className="skills">
        {skills.map(skill => (
          <SubSkill skill={skill} key={skill.name} />
        ))}
      </div>
    </div>
  );
};

export default SubSkills;
