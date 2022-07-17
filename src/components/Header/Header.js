
import React, { useEffect, useState } from "react";

import "./Header.css";


function Header() {
  const [showNavBar, setShowNavBar] = useState(false);
  const [resize, setResize] = useState(true);

  window.addEventListener("resize", function () {
    setShowNavBar(false);
    if (this.innerWidth > 768) {
      // console.log(true);
      setResize(false);
    } else {
      setResize(true);
    }
  });
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    for (let i = 0; i < sections.length; i++) {
      let section = sections[i];
      let sectionId = section.getAttribute("id");
      let activeLink = document.querySelector(`[data-nav= ${sectionId}]`);

      if (
        section.getBoundingClientRect().top <= 410 &&
        section.getBoundingClientRect().top >= -260
      ) {
        activeLink.classList.add("active");
      } else {
        activeLink.classList.remove("active");
      }
    }
  });

  const showDisplay =
    window.innerWidth < 768
      ? resize
        ? showNavBar === true
          ? {
              display: "flex",
            }
          : {
              display: "none",
            }
        : {
            display: "flex",
          }
      : {
          display: "flex",
        };

  const handleShowNavbar = () => {
    setShowNavBar(!showNavBar);
  };
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);
  return (
    <header>
      <div className="container">
        <div className="container-header">
          <div className="header-brand">
            <h1> Portflio</h1>
          </div>
          <ul className="navbar-header" style={showDisplay}>
            <li className="active" data-nav="home">
              <a href="#home">HOME</a>
            </li>
            <li data-nav="about">
              <a href="#about">ABOUT</a>
            </li>
            <li data-nav="skills">
              <a href="#skills">SKILLS</a>
            </li>
            <li data-nav="projects">
              <a href="#projects">PROJECTS</a>
            </li>
            <li data-nav="contact">
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
          <button onClick={handleShowNavbar} className="bars">
            <span ></span><span></span> <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
