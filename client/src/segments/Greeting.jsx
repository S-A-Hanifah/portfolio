import React from "react";
import "./Greeting.css";
import resume from "../img/Projects/resume/resume.pdf";

export default function Greeting({ isLoading }) {
  return (
    <div className={`section1`}>
      <div className={`${isLoading || "greetings"}`}>
        <h3>Greetings</h3>
        <h1>I'm Syed Abu Hanifah,</h1>
        <h2>
          I'm A full Stack Web <span>Developer</span>
        </h2>
        <a href={resume} target="_blank" rel="noreferrer" title="Syed's Resume">
          <button>Resume</button>
        </a>
      </div>
    </div>
  );
}
