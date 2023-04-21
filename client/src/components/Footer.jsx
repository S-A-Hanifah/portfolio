import React from "react";

import "./Footer.css";
import { contact } from "../utils/data";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="owner">
        <h3>© Syed Abu Hanifah {new Date().getFullYear()}</h3>
      </div>
      <div className="socials">
        <ul className="contact-link">
          {contact.map((cn) => (
            <li className="footer-list">
              <a href={cn.link} target="_blank" rel="noreferrer">
                <img src={cn.img} alt="" className="footer-links" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
