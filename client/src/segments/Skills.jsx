import React from "react";
import { mySkills } from "../utils/data";
import resume from "../img/Projects/resume/resume.pdf";

import "./Skills.css";
import useObserver from "../hooks/useObserver";

export default function Skills() {
  const section3 = document.querySelector(".section3");

  const { cross } = useObserver(section3, 0.1);
  console.log(cross);
  return (
    <div className={`section3 ${cross ? "rise" : "sink"}`}>
      <h2>Tech Stacks</h2>
      <div className="skills-cont">
        {mySkills.map((skill) => (
          <div className="language-cont">
            <div className="skills-grid">
              <div className={`img-cont-skills`}>
                <img src={skill.img} alt="" />
              </div>
              <div className="skills-desc-con">
                <h3>{skill.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href={resume}
        target="_blank"
        rel="noreferrer"
        title="Syed's Resume"
        className="mob-only"
      >
        <button>Resume</button>
      </a>
    </div>
  );
}
