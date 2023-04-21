import React, { useEffect, useState } from "react";
import BrwLogo from "../img/brown-s.png";
import whtLogo from "../img/S-white.png";
import closerX from "../img/closer-x.png";
import resume from "../img/Projects/resume/resume.pdf";

import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";

export default function Navbar({ setIsLoading, setProgress }) {
  const [isClose, setIsClose] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [curMenu, setCurMenu] = useState("");
  const navigate = useNavigate();

  const menuItem = ["Home", "Hire", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsActive(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openMenu = () => {
    setIsClose(false);
  };

  const closeMenu = () => {
    setIsClose(true);
  };

  const handleHome = () => {
    try {
      setIsLoading(true);
      setProgress(0);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e) => {
    const target = e.target?.innerText;
    if (target === "Home") {
      handleHome();
      navigate("/");
      setCurMenu("");
    } else if (target !== "Home") {
      setCurMenu(target);
    }
  };

  return (
    <>
      <div className={`navbar ${isActive ? "navbar-active" : ""}`}>
        <Link to="/" onClick={handleHome}>
          <div className="logo-cont">
            <img src={BrwLogo} alt="" className="logo" />
          </div>
        </Link>
        <button className="nav-btn mob-only" onClick={openMenu}>
          <img src={whtLogo} alt="" className="logo" />
        </button>
        <div className="ds-only">
          <ul className="ds-menu">
            {menuItem.map((menu) => (
              <li onClick={(e) => handleClick(e)} key={menu}>
                {menu}
              </li>
            ))}
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              title="Syed's Resume"
            >
              <button>Resume</button>
            </a>
          </ul>
        </div>
      </div>
      <div
        className={`mobile-nav-overlay ${!isClose && "isShown"}`}
        onClick={closeMenu}
      ></div>
      <navbar className={`mobile-nav ${!isClose && "isOpen"}`}>
        <div className="nav-container">
          <img src={whtLogo} alt="" className="logo" />
          <ul>
            {menuItem.map((menu) => (
              <li onClick={(e) => handleClick(e)} key={menu}>
                {menu}
              </li>
            ))}
          </ul>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            title="Syed's Resume"
          >
            <button>Resume</button>
          </a>
        </div>
        <div className="closer-x" onClick={closeMenu}>
          <img src={closerX} alt="" className="logo" />
        </div>
      </navbar>
      {curMenu && <Modal curMenu={curMenu} handleClick={handleClick} />}
    </>
  );
}
