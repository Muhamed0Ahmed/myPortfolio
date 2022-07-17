import React from "react";
import Chart from "../Chart/Chart";
import "./Skills.css";

function Skills() {
  const onChangeActiveSkill = (e) => {
    const liItem = document.querySelectorAll(".skills-links span button");
    liItem.forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
  };
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="content-skills">
          <h2>Skills</h2>
          <div className="content">
            <div className="skills-links">
              <span className="item">
                <button onClick={onChangeActiveSkill}>HTML</button>
                <div className="skill">
                  <div className="left">
                    <h4>HTML</h4>
                    <div className="chart">
                      <Chart label={"HTML"} presentage="0.9" />
                    </div>
                  </div>
                  <div className="right">
                    {/* <h4> Technical skills </h4>
                                        <span>symantic code</span>
                                        <span>React Hooks</span>
                                        <span>React Redux</span>
                                        <span>React Router Dom</span>
                                        <span>axios</span> */}
                  </div>
                </div>
              </span>
              <span className="item">
                <button onClick={onChangeActiveSkill}>CSS</button>
                <div className="skill">
                  <div className="left">
                    <h4>CSS</h4>
                    <div className="chart">
                      <Chart label={"HTML"} presentage="0.8" />
                    </div>
                  </div>
                  <div className="right">
                    <h4> Technical skills </h4>
                    <span>Better User Experience</span>
                    <span>Animation</span>
                    <span>Use Variables</span>
                    <span>Responsive Design</span>
                  </div>
                </div>
              </span>
              <span className="item">
                <button onClick={onChangeActiveSkill}>JavaScript</button>
                <div className="skill">
                  <div className="left">
                    <h4>JavaScript</h4>
                    <div className="chart">
                      <Chart label={"JavaScript"} presentage="0.85" />
                    </div>
                  </div>
                  <div className="right">
                    <h4> Technical skills </h4>
                    <span>Dynamic Pages</span>
                    <span>API integrations</span>
                    <span>faster user experiences</span>
                    <span>user interface interactivity</span>
                  </div>
                </div>
              </span>
              <span className="item">
                <button onClick={onChangeActiveSkill} className="active">
                  React
                </button>
                <div className="skill">
                  <div className="left">
                    <h4>React</h4>
                    <div className="chart">
                      <Chart label={"React"} presentage="0.8" />
                    </div>
                  </div>
                  <div className="right">
                    <h4> Technical skills </h4>
                    <span>Styled Component</span>
                    <span>React Hooks</span>
                    <span>React Redux</span>
                    <span>React Router Dom</span>
                    <span>axios</span>
                  </div>
                </div>
              </span>
              <span className="item">
                <button onClick={onChangeActiveSkill}>Bootstrap</button>
                <div className="skill">
                  <div className="left">
                    <h4>Bootstrap</h4>
                    <div className="chart">
                      <Chart label={"Bootstrap"} presentage="0.75" />
                    </div>
                  </div>
                  <div className="right">
                    <h4> Technical skills </h4>
                    <span>Styled Component</span>
                    <span>React Hooks</span>
                    <span>React Redux</span>
                    <span>React Router Dom</span>
                    <span>axios</span>
                  </div>
                </div>
              </span>
              <span className="item">
                <button onClick={onChangeActiveSkill}>SCSS</button>
                <div className="skill">
                  <div className="left">
                    <h4>SCSS</h4>
                    <div className="chart">
                      <Chart label={"SCSS"} presentage="0.7" />
                    </div>
                  </div>
                  <div className="right">
                    <h4> Technical skills </h4>
                    <span>Variables</span>
                    <span>Nesting</span>
                    <span>Mixin</span>
                    <span>Math operators</span>
                    <span>function</span>
                    <span></span>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
