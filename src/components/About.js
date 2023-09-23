import "./About.css";

function About() {
  return (
    <div id="about" className="About-container">
      <div className="About-title">
        <h2>About Me</h2>
      </div>
      <div className="About-container-2">
        <div className="About-text">
          <div className="About-image"></div>
          <h3>Passionate Developer and Analyst  &#128187;</h3>
          <p>
          I am passionate about <span>technology</span>, I like to develop systems 
          as well as implement development methodologies. I am able to 
          <span>handle any obstacle</span>, challenge or problem. Being a focused and 
          disciplined person makes me a wise choice. My resilience and 
          my <span>self-taught spirit</span> have led me to acquire practical knowledge 
          in development in different programming languages, my solid 
          foundation being Java for the backend and Angular for the frontend.
          Sports, reading and exploration are activities that help me <span>develop </span>
          my <span>technical skills</span> and <span>soft skills</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
