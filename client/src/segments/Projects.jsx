import React from "react";
import { Link } from "react-router-dom";

import { myProjects } from "../utils/data";
import useObserver from "../hooks/useObserver";

import "./Projects.css";

export default function Projects({ setIsLoading, setProgress }) {
  const section2 = document.querySelector(".section2");
  const handleLoading = () => {
    try {
      setIsLoading(true);
      setProgress(0);
    } catch (error) {
      console.log(error);
    }
  };

  const { cross } = useObserver(section2, 0.5);

  return (
    <div className={`section2 ${cross ? "show-section2" : "hide-section2"}`}>
      <h2>Projects</h2>
      {myProjects.map((project, index) => (
        <Link
          style={{ textDecoration: "none" }}
          to={`desc/${project.nav}`}
          onClick={handleLoading}
        >
          <div
            className={`project-cont ${
              cross ? "reveal-segment" : "hide-segment"
            }`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="img-cont">
              <img src={project.img} alt="" />
            </div>
            <div className="desc-con">
              <h3>{project.name}</h3>
              <p>View Project</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
