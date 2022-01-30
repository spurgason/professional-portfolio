import "./skill.scss";

export default function Skill() {
  return (
    <div className="skill" id="skill">
      <h1>Skills and Technologies</h1>
      <div className="container">
        <div className="card">
          <h3 className="top">Front-End</h3>
          <div className="bottom">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>SCSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Responsive Design</li>
              <li>Bootstrap</li>
              <li>Foundation</li>
              <li>Material UI</li>
            </ul>
          </div>
        </div>
        <div className="resume-card">
          <h3 className="top">Resume</h3>
          <div className="middle">
            <p>Web Developer leveraging a background in customer service to deliver performative and innovative solutions to satisfy customer needs. Often appointed by leadership roles to train new employees and take the initiative to deliver on sales, as well as meeting project deadlines. Enjoys creative and collaborative group work to deliver exemplary products to exceed client expectations</p>
          </div>
          <div className="resume-download">
            <button>Download Resume</button>
          </div>
        </div>
        <div className="card">
          <h3 className="top">Back-End</h3>
          <div className="bottom">
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>React</li>
              <li>MySQL (Sequelize)</li>
              <li>MongoDB (Mongoose)</li>
              <li>REST</li>
              <li>GraphQl</li>
              <li>Redux</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
