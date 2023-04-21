import React from "react";
import { contact } from "../../utils/data";
import resume from "../../img/Projects/resume/resume.pdf";

import "./Hire.css";

export default function Hire() {
  return (
    <div className="Hire">
      <div className="resume-window">
        <div className="resume-cont">
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            title="Syed's Resume"
          >
            <div className="resume-overlay"></div>
          </a>
        </div>
        <div className="button">
          <a href={resume} download>
            <button>Download</button>
          </a>
        </div>
      </div>
      <div className="hire-cont-cta">
        <ul className="hire-list">
          {contact.map((cn) => (
            <li className="hire-lists">
              <div className="hire-link">
                <a href={cn} target="_blank" rel="noreferrer">
                  <img src={cn.img} alt="" className="hire-links" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
