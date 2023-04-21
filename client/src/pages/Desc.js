import React from "react";
import Carousel from "../components/Carousel";
import { myProjects } from "../utils/data";
import { useLocation } from "react-router-dom";
import resume from "../img/Projects/resume/resume.pdf";
import "./Desc.css";
import usePages from "../hooks/usePages";
import useObserver from "../hooks/useObserver";

export default function Desc({ isLoading }) {
  const dir = useLocation().pathname.split("/")[2];
  const featSect = document.querySelector(".feature-sect");
  const secth4 = document.querySelector(".stack h4");
  const stackItems = document.querySelector(".stack-items");

  const { cross: h4Cross } = useObserver(secth4, 0.1);
  const { cross: featCross } = useObserver(featSect, 0.1);
  const { cross: stackCross } = useObserver(stackItems, 0.2);

  const { ScrollToTop } = usePages();
  ScrollToTop();

  let curProject;

  if (dir === "visipin") {
    curProject = myProjects[0];
  } else if (dir === "traveltube") {
    curProject = myProjects[1];
  } else if (dir === "ecom") {
    curProject = myProjects[2];
  } else {
    return;
  }

  return (
    <div className={`Desc ${!isLoading && "show-project"}`}>
      <div className={`Project-segment`}>
        <h2>{curProject.name}</h2>
        <Carousel items={curProject.items} />
        <h3>Project Description</h3>
        <p className="main-desc">{curProject.mainDesc}</p>
      </div>
      <div className={"stack"}>
        <h4 className={`${h4Cross ? "project-rise" : "project-sink"}`}>
          Tech Stack and Technologies
        </h4>
        <ul>
          {curProject.stacks.map((stack, index) => (
            <li
              className={`stack-items ${
                stackCross ? "show-stack" : "hide-stack"
              }`}
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              {stack}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`feature-sect ${
          featCross ? "project-rise" : "project-sink"
        }`}
      >
        <h3>Features</h3>
        <div className="features-cont">
          {curProject.items.map((item, index) => (
            <div className="feature-item" key={item + index}>
              <div className="indi-feature">
                <img src={item} alt="" />
              </div>
              <h3>Description</h3>
              <p>{curProject.features[index].feature}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="download-cont">
        <a href={resume} target="_blank" rel="noreferrer" title="Syed's Resume">
          <button>Resume</button>
        </a>
        <a href={curProject.link} target="_blank" rel="noreferrer">
          See {curProject.name}
        </a>
      </div>
    </div>
  );
}
