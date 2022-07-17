import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="content-about">
          <div className="content">
            {/* <h2>About Me</h2> */}
            <p>
              Hello! My name is Mohamed Ahmed and I enjoy creating things that
              live on the internet. My interest in web development started back
              in 2020 when I decided to start in learn web development.
            </p>
            <p>
              I as Front-End Developer is responsible for developing new
              user-facing features, determining the structure and design of web
              pages, building reusable codes, optimizing page loading times, and
              using a variety of markup languages to create the web pages.
            </p>
            <p>
              I also recently create more apps by using React js , Hooks and
              redux.
            </p>
            <div>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Bootstarap</span>
              <span>Sass</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
