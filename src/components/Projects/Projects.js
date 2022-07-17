import React from "react";
import "./Projects.css";
import imgHomeMyReads from "../../assests/myReadsHome.png";
import imgSearchMyReads from "../../assests/myReadsSearch.png";
import homePortfolio from "../../assests/home_portfolio.png";
import aboutPortfolio from "../../assests/about_portfolio.png";
import skillsPortfolio from "../../assests/skills_portfolio.png";
import contactPortfolio from "../../assests/contact_portfolio.png";
import eccomerceFull from "../../assests/eccomerceFull.png";
import eccomerceSmall from "../../assests/eccomerceSmall.png"


function Projects() {
  const onShowInfoProject = (e) => {
    const items = document.querySelectorAll("span.title");
    items.forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
  };
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="content-projects">
          <h2>PROJECTS</h2>
          <div className="content">
            <ul>
              <li>
                <span className="title active" onClick={onShowInfoProject}>
                  My Reads
                </span>
                <div className="info-project">
                  <p>
                    My Reads app use tools : React , React Hooks, React Router
                    Dom{" "}
                  </p>
                  <img className="project-img" src={imgHomeMyReads} alt="home" />
                  <img className="project-img" src={imgSearchMyReads} alt="search" />
                </div>
              </li>
              <li>
                <span className="title" onClick={onShowInfoProject}>
                  Portfolio
                </span>
                <div className="info-project">
                  <p>
                    portfolio app use tools : React , react-router-dom , sass , animate.css and font awsome 
                    
                  </p>
                  
                  <img className="project-img" src={homePortfolio} alt="home" />
                  <img className="project-img" src={aboutPortfolio} alt="search" />
                  <img className="project-img" src={skillsPortfolio} alt="home" />
                  <img className="project-img" src={contactPortfolio} alt="search" />
                </div>
              </li>
              <li>
                <span className="title" onClick={onShowInfoProject}>
                  Eccomerce
                </span>
                <div className="info-project">
                  <p>
                    Amazona Eccomerce app use tools : React , React Hooks, React Router
                    Dom, sass and Redux 
                  </p>
                  <img className="project-img" src={eccomerceFull} alt="home" />
                  <img className="project-img" src={eccomerceSmall} alt="search" />
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
