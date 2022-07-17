import React from "react";

import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="content-contact">
          <div>
            <div className="row">
              <span className="title">Name :</span>
              <span
                className="anchor"
                
              >
                Muhamed Ahmed
              </span>
            </div>
            <div className="row">
              <span className="title">mobile :</span>
              <span
                className="anchor"
               
              >
                01000621259 / 01092556365
              </span>
            </div>
            <div className="row">
              <span className="title">email :</span>
              <a
                className="anchor"
                href="https://www.linkedin.com/in/mohamed-ahmed-011559219"
              >
                muhameed.ahmedd@gmail.com
              </a>
            </div>

            <div className="row">
              <span className="title">LinkedIn :</span>
              <a
                className="anchor"
                href="https://www.linkedin.com/in/mohamed-ahmed-011559219"
              >
                https://www.linkedin.com/in/mohamed-ahmed-011559219
              </a>
            </div>
            <div className="row">
              <span className="title">GitHub :</span>
              <a
                className="anchor"
                href="https://github.com/Muhamed0Ahmed"
              >
                https://github.com/Muhamed0Ahmed
              </a>
            </div>
            <div className="row">
              <span className="title">Behance :</span>
              <a
                className="anchor"
                href="https://www.behance.net/mohameedahmedd"
              >
                https://www.behance.net/mohameedahmedd
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
