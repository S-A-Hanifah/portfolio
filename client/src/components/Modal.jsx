import React from "react";
import "./Modal.css";
import closer from "../img/brown-x.png";
import Hire from "./Forms/Hire";
import Project from "./Forms/Project";
import Contact from "./Forms/Contact";

export default function Modal({ curMenu, handleClick }) {
  let display;
  if (curMenu === "Hire") {
    display = <Hire />;
  } else if (curMenu === "Projects") {
    display = <Project />;
  } else if (curMenu === "Contact") {
    display = <Contact />;
  }

  return (
    <>
      <div className="modal-overlay" onClick={(e) => handleClick("")}></div>
      <div className="modal">
        <div className="closer-modal" onClick={(e) => handleClick("")}>
          <img src={closer} alt="" className="close" />
        </div>
        <div className="content-modal">{display}</div>
      </div>
    </>
  );
}
