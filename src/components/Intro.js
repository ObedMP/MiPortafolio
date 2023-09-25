import "./Intro.css";

function Intro() {
  return (
    <section id="home" className="intro-section">
      <div className="intro-top">
        <div className="intro-title">
          <h1>Java Developer</h1>
          <p className="intro-p">
            Hi, I'm <span>Diego Menéndez</span>. <br />A passionate FullStack 
             Developer and QA Testing from El Salvador
          </p>
          <ul className="intro-ul">
            <li>
              <a
                className="intro-links"
                href="https://www.linkedin.com/in/obedmenendez/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-md bxl-linkedin-square"></i>
              </a>
            </li>
            <li>
              <a
                className="intro-links"
                href="https://github.com/ObedMP"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-md bxl-github"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="intro-img"></div>
      </div>
      <br/>
      <div className="intro-skills">
        <div>
          <h2>Knowledge & Skills</h2>
        </div>
        <div className="skills">
          <div className="skill-a"></div>
          <div className="skill-b"></div>
          <div className="skill-c"></div>
          <div className="skill-d"></div>
          <div className="skill-h"></div>
          <div className="skill-i"></div>
          <div className="skill-j"></div>
          
        </div>
        <br/>
        <div className="skills">
          <div className="skill-k"></div>
          <div className="skill-l"></div>
          <div className="skill-pentaho"></div>
          <div className="skill-spring"></div>
          <div className="skill-selenium"></div>
          <div className="skill-jira"></div>
          <div className="skill-git"></div>    
        </div>
        <br/>
        
      </div>
    
    </section>
   
  );
}

export default Intro;
