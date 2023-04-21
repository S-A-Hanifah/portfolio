import React, { useEffect, useState } from "react";
import { myProjects } from "../../utils/data";
import { Link } from "react-router-dom";
import "./Project.css";

export default function Project() {
  const [curProject, setCurProject] = useState(0);

  const handleClick = (i) => {
    setCurProject(i);
  };

  return (
    <div className="Project">
      <div
        className="project-preview"
        style={{
          background: `url(${myProjects[curProject].items[0]})`,
        }}
      >
        <div className="project-overlay"></div>
      </div>
      <div className="project-snippet">
        <h3>{myProjects[curProject].name}</h3>
        <p>
          {myProjects[curProject].mainDesc.slice(0, 100)}...
          <Link to={`/desc/${myProjects[curProject].nav}`} target="_blank">
            More of {myProjects[curProject].name}
          </Link>
        </p>
      </div>
      <div className="project-window-buttons">
        {myProjects.map((project, index) => (
          <div
            className="project-button-cont"
            key={index}
            onClick={() => handleClick(index)}
          >
            <div className="project-window-icons">
              <img src={project.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
