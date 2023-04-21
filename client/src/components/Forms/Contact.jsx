import React from "react";
import { contact } from "../../utils/data";
import whatsAppImg from "../../img/Projects/stacks/whatsapp.png";

import "./Contact.css";

export default function Contact() {
  const ring = [
    ...contact,
    {
      img: whatsAppImg,
      directory: "+01121171921",
      link: "https://api.whatsapp.com/send?phone=01121171921",
    },
  ];
  return (
    <div className="contact-modal">
      <ul>
        {ring.map((ring) => (
          <li>
            <a href={ring.link} target="_blank" rel="noopener noreferrer">
              <div className="contact-icon-cont">
                <img src={ring.img} alt="" className="contact-icons" />
                <p>{ring.directory}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <button>Resume</button>
    </div>
  );
}
